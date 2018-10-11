/**
 * Created by hebo (razr409355439@gmail.com)on 2014/9/11.
 */
(function(){

    /**
     * 列表的实现， 数据结构与算法JavaScript描述  第三章
     * @constructor
     */
    function List(){
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = []; //初始化一个空数组来保存列表元素
        this.clear = clear;
        this.find = find;
        this.toString = toString;
        this.insert = insert;
        this.append = append;
        this.remove = remove;
        this.front = front;
        this.end = end;
        this.prev = prev;
        this.next = next;
        this.length = length;
        this.currPos = currPos;
        this.moveTo = moveTo;
        this.getElement = getElement;
        this.contains = contains;



        //清空列表
        function clear(){
            delete this.dataStore;
            this.dataStore.length = 0;
            this.listSize = this.pos = 0;
        }
        //查找元素位置
        function find(element){
            for (var i = 0; i < this.dataStore.length; ++i) {
                if (this.dataStore[i] == element) {
                    return i;
                }
            }
            return -1;
        }
        //某元素之前插入元素
        function insert(element,after){
            var p = this.find(after)
            if(p>-1){
                this.dataStore.splice(p+1,0,element)
                ++this.listSize;
                return true;
            }
            return false;

        }
        //插入元素
        function append(element){
            this.dataStore[this.listSize++] = element;
        }
        //移除元素
        function remove(element){
            var f = this.find(element)
            if(f>-1){
                this.dataStore.splice(f,1)
                this.listSize--;
                return true;
            }
            return false;
        }
        //把位置挪到最前面
        function front(){
            this.pos = 0;
        }
        //把位置挪到坐后面
        function end(){
            this.pos = (this.listSize-1)
        }
        //把位置上移一个节点
        function prev(){
            if (this.pos > 0) {
                --this.pos;
            }
        }
        //把位置下移一个节点
        function next(){
            if (this.pos < this.listSize-1) {
                ++this.pos;
            }
        }
        //返回当前位置
        function currPos(){
            return this.pos;
        }
        //移到某一个位置
        function moveTo(position){
            this.pos = position;
        }
        //获得当前位置的元素
        function getElement(){
            return this.dataStore[this.pos]
        }
        //查找当前元素 是否在列表中
        function contains(element){
            for(var i=0;i<this.dataStore.length;i++){
                if(this.dataStore[i]==element){
                    return true;
                }
            }
            return false;
        }
        //tostring
        function toString() {
            return this.dataStore;
        }
        //返回该列表的长度
        function length(){
            return this.listSize;
        }

    }

    var booklist = new List();

    booklist.append('jsbook');
    booklist.append('cssbook');
    booklist.append('htmlbook');

    console.log(booklist.length())   //3
    console.log(booklist.toString())   //["jsbook", "cssbook", "htmlbook"]
})()