/**
 * Created by hebo (razr409355439@gmail.com)on 14-9-30.
 */
(function(){
    /**
     * 树，一种非线性的数据结构。 以分层的方式存储数据。
     *    一棵树最上面的节点成为根节点，如果一个节点下面有多个节点，这个节点称为父节点，下面的节点称为子节点
     *    没有任何子节点的节点，陈宝国职位叶子节点。
     *
     * 二叉树是每个节点最多有两个子树的有序树
     *    从一个节点到另外一个节点称为路径
     *    树有层的概念，根节点是 0层，那它的子节点是第一层，以此类推。
     *    因为二叉树中，子节点只有两个，那么数据的查找，删除，插入实现起来就速度很快（因为非节点一就是节点二~
     *
     * 二叉查找树  是一个特殊的二叉树，相对较小的值保存在左边子节点，较大值保存在右边子节点。
     *
     *    示例：
     *      （ 56 ）
     *      /      \
     *   (22)     (81)
     *  /   \     /   \
     * (10) (30) (77) (92)
     *
     */


    /**
     * 节点类
      * @param data
     * @param left
     * @param right
     * @constructor
     */
    function Node(data,left,right){
        this.data = data;
        this.right = right;
        this.left = left;
        this.show = show;
        function show(){
            return this.data;
        }
    }
    //二叉查找树
    //保存值原理：相对较小的值保存在左边子节点，较大值保存在右边子节点。
    //遍历： 有三种方式：中序，先序，后序。
    //      中序， 中序遍历按照节点上的键值，以升序访问BST上的所有节点。
    //      先序， 先序遍历先访问根节点，然后以同样方式访问左子树和右子树。
    //      后序， 后序遍历先访问叶子节点，从左子树到右子树，再到根节点。
    //
    /**
     * 二叉查找树
     * @constructor
     */
    function BST(){
        var me = this;
        me.root = null;
        me.inOrder = inOrder;
        me.preOrder = preOrder;
        me.postOrder = postOrder;
        me.insert = insert;
        me.getMin = getMin;
        me.getMax = getMax;
        me.find = find;
        me.remove = remove;

        /**
         * 插入 新数据。
         * @param data
         */
        function insert(data){
            var newNode = new Node(data,null,null)
            if(me.root == null){
                me.root =newNode;
            }else{
                var cur = me.root,
                    parent;
                while(true){
                    parent = cur;
                    //数据小于节点   ==》left
                    if(data<cur.data){
                        cur = cur.left;
                        //如果节点 null 说明该节点下为空。可以插入新数据
                        if(cur == null){
                            parent.left = newNode;
                            break;
                        }
                    } else{
                        //数据大于节点 ==》right
                       cur = cur.right;
                        //如果节点 null 说明5节点下为空。可以插入新数据
                        if(cur==null){
                            parent.right = newNode;
                            break;
                        }

                    }
                }
            }
        }

        /**
         * 中序
         * @param node
         */
        function inOrder(node,fn){
            if(!(node==null)){
                me.inOrder(node.left)
                //中序实现的演示 在这里 将node展示出来
                console.log(node.show()+"  ");
                fn&&fn(node.show())
                me.inOrder(node.right)
            }
        }

        /**
         * 先序
         * @param node
         * @param fn
         */
        function preOrder(node,fn){
            if(!(node==null)){
                //先序实现的演示，在这里 将node展现出来
                console.log(node.show()+"  ");
                fn&&fn(node)
                me.preOrder(node.left)
                me.preOrder(node.right)
            }
        }

        /**
         * 后序
         * @param node
         * @param fn
         */
        function postOrder(node,fn){
            if(!(node==null)) {
                me.postOrder(node.left);
                me.postOrder(node.right);
                //后序实现的演示，在这里，将node展现
                console.log(node.show()+"  ");
                fn&&fn(node.show())
            }
        }

        /**
         * 返回最小节点
         * @returns {null|*}
         */
        function getMin(){
            var cur = me.root;
            while(!(cur.left==null)){
                cur = cur.left;
            }
            return cur;
        }

        /**
         * 返回最大节点
         * @returns {null|*}
         */
        function getMax(){
            var cur = me.root;
            while(!(cur.right==null)){
                cur = cur.right;
            }
            return cur;
        }

        /**
         * 查找该节点
         * @param v
         * @returns {*}
         */
        function find(v){
            var cur = me.root;
            while(cur!=null){
                if(cur.data == v){
                    return cur;
                }else if(cur.data>v){
                    cur = cur.left;
                }else{
                    cur = cur.right;
                }
            }
            return null;
        }

        function remove(data){
            me.root = removeNode(me.root,data)
        }

        function removeNode(node,data){
            if(node ==null)return null;
            if(data == node.data){
                if(node.left==null&&node.right==null){
                    return null;
                }
                if(node.left==null){
                    return node.right;
                }
                if(node.right==null){
                    return node.left;
                }
                //当该节点是需要删除的值时（并且该节点下面有子节点）
                //那么需要将该节点right上升到该位置 或者 right节点的left节点。
                //因为   左边永远小于父节点，右边大于父节点。
                var tmp = getSmallest(node.right);
                node.data = tmp.data;
                node.right = removeNode(node.right,tmp.data)
                return node;
            }else if(data<node.data){
                //left
                node.left = removeNode(node.left,data)
                return node;
            }else{
                //right
                node.right = removeNode(node.right,data)
                return node;
            }
        }

        function getSmallest(node){
            if (node.left == null) {
                return node;
            }
            else {
                return getSmallest(node.left);
            }
        }
    }


    //TODO bug
    //用于生成二叉树视图的函数，直观的显示数据插入到二叉树的哪一层
    /**
     * 二叉树视图
     * @param data  数据 array
     * @constructor
     */
    function BSTTreeView(data){
        var me = this;
        me.bst = new BST();
        me.bstArr = [];
        me.viewArr = [];
        me.doOrder = doOrder;
        me.splitBst = splitBst;
        me.view = createView;
        me.createBst = createBst;
        me.splitIndex = 0 ;
        me.splitLen=1 ;
        if(!data) throw Error("no data in!");

        function createBst(){
            for(var i=0;i<data.length;i++){
                me.bst.insert(data[i]);
            }
            me.doOrder(me.bst.root)
            splitBst();
        }
        function createView(){
            var oBstView = document.createElement('div');
            oBstView.id="bst";
            oBstView.innerHTML = viewJoin()
            document.body.appendChild(oBstView)
        }
        function splitBst(){
            if(me.viewArr.length<1) me.viewArr.push(me.bstArr[0]);
            var cacheLen = me.splitLen;
            me.splitIndex++;
            me.splitLen+=Math.pow(2,me.splitIndex);
            var base = me.bstArr.slice(cacheLen,me.splitLen)
            me.viewArr.push(base)
            if(me.splitLen<me.bstArr.length) me.splitBst();
        }
        function doOrder(r){
            if(me.bstArr.length<1) me.bstArr[0]= r.show();
            if(!(r==null)){

                if(r.left){
                    me.bstArr.push(r.left.show())

                }else{
                    me.bstArr.push(null)
                }
                if(r.right){
                    me.bstArr.push(r.right.show())

                }else{
                    me.bstArr.push(null)

                }
                doOrder(r.left);
                doOrder(r.right);

            }
        }
        function viewJoin(){
            var len = me.viewArr.length
                ,i= 1
                ,inner = '<div class="bst-layer"><div class="bst-block">'+me.viewArr[0]+'</div></div>';
            for(;i<len;i++){
                inner+="<div class='bst-layer'>"
                inner+= addBlock(i,me.viewArr[i])
                inner+="</div>"
            }
            return inner;

            function addBlock(n,arr){
                var s = '',i=0;
                arr.length=Math.pow(2,n)
                for(;i<arr.length;i++){
                    if(!arr[i]) {
                        s+="<div class='bst-block'>&nbsp;&nbsp;&nbsp; </div>"
                    } else{
                        s+="<div class='bst-block'>"+arr[i]+"</div>"
                    }


                }
                return s;
            }
        }
        me.createBst();
        me.view();
        console.log(me.bst)
        console.log(me.bstArr)
        console.log('bst TreeView')
    }

    //二叉树视图 第一版
    function BSTView(bst){
        var me = this,
            arr = [],viewArr = [],splitIndex = 0 ,splitLen=1;
        preOrder(bst.root);
        splitArr();
        function preOrder(r){
            if(!(r==null)){
                arr.push(r.show())
                preOrder(r.left);
                preOrder(r.right)
            }
        }
        function splitArr(){
            if(viewArr.length<1) viewArr.push(arr[0]);
            var cacheLen = splitLen;
            splitIndex++;
            splitLen+=Math.pow(2,splitIndex);
            var base = arr.slice(cacheLen,splitLen)
            viewArr.push(base)
            if(splitLen<arr.length) splitArr();
        }
        function viewJoin(){
            var len = viewArr.length,i= 1,inner = '<div class="bst-layer"><div class="bst-block">'+viewArr[0]+'</div></div>';
            for(;i<len;i++){
                inner+="<div class='bst-layer'>"
                inner+= addBlock(i,viewArr[i])
                inner+="</div>"
            }
            oBstView.innerHTML = inner;

            function addBlock(n,arr){
                var s = '',i=0;
                arr.length=Math.pow(2,n)
                for(;i<arr.length;i++){
                    if(!arr[i]) {
                        s+="<div class='bst-block'>&nbsp; </div>"
                    } else{
                        s+="<div class='bst-block'>"+arr[i]+"</div>"
                    }
                }
                return s;
            }
        }
        var oBstView = document.createElement('div');
        oBstView.id="bst";
        viewJoin();
        //
        document.body.appendChild(oBstView)
    }

    window.BST = BST
    window.BSTView = BSTView;
    window.BSTTreeView = BSTTreeView;

})()
