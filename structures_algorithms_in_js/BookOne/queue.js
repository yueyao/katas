/**
 * Created by hebo (razr409355439@gmail.com)on 2014/9/12.
 */
(function(){
    /**
     * 队列，先进先出  First-In-First-Out
     * 入队  出队
     * @constructor
     */
    function Queue(){
        this.dataStore=[];
        this.count = length;
        this.clear = clear;
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.empty = empty;

        /**
         * 队列数量
         * @returns {Number}
         */
        function length(){
            return this.dataStore.length;
        }

        /**
         * 清空队列
         */
        function clear(){
            this.dataStore = [];
        }

        /**
         * 查询队列是否为空
         * @returns {boolean}
         */
        function empty() {
            if (this.dataStore.length == 0) {
                return true;
            }
            else {
                return false;
            }
        }

        /**
         * 入列
         * @param element
         */
        function enqueue(element){
            this.dataStore.push(element)
        }

        /**
         * 出列
         * @returns {*}
         */
        function dequeue(){
            return this.dataStore.shift();
        }

        /**
         * 队尾
         * @returns {*}
         */
        function back() {
            return this.dataStore[this.dataStore.length-1];
        }

        /**
         * 队首
         * @returns {*}
         */
        function front(){
            return this.dataStore[0]
        }

        /**
         * 返回队列所有元素
         * @returns {string}
         */
        function toString(){
            var s = '';
            for(var i=0;i<this.dataStore.length;i++){
                s+= this.dataStore[i]+'\n'
            }
            return s;
        }
    }

    window.Queue = Queue
})()
