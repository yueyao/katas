/**
 * Created by hebo (razr409355439@gmail.com)on 14-9-19.
 */



(function(){

    /**
     * 节点
     * @constructor
     */
    function Node(element){
        this.element = element,
        this.next = null;
    }

    /**
     * 链表
     * @constructor
     */
    function LinkedList(){
        var me = this ;
        me.head = new Node('head')
        me.find = find;
        me.insert = insert;
        me.remove = remove;
        me.display = display;
        //查找元素
        function find(element){
            var cur = me.head;
            while(cur.element!=element){
                cur = cur.next;
            }
            return cur;
        }
        //插入元素到链表
        function insert(newElement,item){
            var current ;
            if(me.head.next==null && !item){
                current = me.head;
            }else if(item){
                current = me.find(item);
            }else {
                throw Error("need item")
            }
            var newNode = new Node(newElement);

            newNode.next = current.next;
            current.next = newNode;
        }
        //从链表中移除元素
        function remove(element){
            var curPrev = findPrev(element);
            var curNext = find(element).next;
            curPrev.next = curNext;
        }
        //查找前一个元素
        function findPrev(element){
            var cur = me.head;
            while(!(cur.next==null) && cur.next.element!=element){
               cur = cur.next;
            }
            return cur;
        }
        //打印所有链表元素
        function display(){
            var s = '',cur = me.head;
            while(!(cur.next==null)){
                s += cur.next.element +"  ";
                cur = cur.next;
            }
            console.log(s)
        }

    }

    window.LinkedList = LinkedList;

    /**
     * 链表是由一组节点组成的集合。每个节点都使用一个对象的引用指向它的后继。指向另一个节点的引用叫做链
     *        链表头需要我们标识
     *  { element:head,next:obj1 } ==> { element:obj1,next:obj2 } ==> { element:obj2,next:obj3 } ==> { element:obj3,next:null }==> null
     *
     *  head 是我们内部标识，我们默认不显示给用户这个数据，只用于内部使用。 即 用户的链表数据中 不会有head
     */


   function DoublyNode(element){
        this.element = element;
        this.next = null;
        this.previous = null;
   }
   function DoublyLinkedList(){
        var me = this ;

        me.head = new DoublyNode('head');
        me.find = find;
        me.display = display;
        me.remove = remove;
        me.insert = insert;
        me.findLast = findLast;
        me.dispReverse = dispReverse;
       function find(element){
           var cur = me.head;
           while(cur.element!=element){
               cur = cur.next;
           }
           return cur;
       }

       function display(){
           var s = '',cur = me.head;
           while(!(cur.next==null)){
               s += cur.next.element +"  ";
               cur = cur.next;
           }
           console.log(s)
       }

       function insert(newElement,item){
           var newE = new DoublyNode(newElement)
           var cur = find(item)
           newE.next = cur.next;
           newE.previous = cur ;
           cur.next = newE;
       }

       function remove(element){
           var currNode = find(element);
           if (!(currNode.next == null)) {
               currNode.previous.next = currNode.next;
               currNode.next.previous = currNode.previous;
               currNode.next = null;
               currNode.previous = null;
           }
       }
       function findLast(){
           var currNode = this.head;
           while (!(currNode.next == null)) {
               currNode = currNode.next;
           }
           return currNode;
       }
       function dispReverse(){
           var currNode = me.head,s='';
           currNode = me.findLast();
           while (!(currNode.previous == null)) {
               s+=  currNode.element +" "
               currNode = currNode.previous;
           }
           console.log(s)
       }


   }

    window.DoublyLinkedList = DoublyLinkedList;
})()
