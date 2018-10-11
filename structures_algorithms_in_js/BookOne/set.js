/**
 * Created by hebo (razr409355439@gmail.com)on 14-9-29.
 */
(function(){
     //集合（set）是一种包含不同元素的数据结构。
     // 集合中的元素称为成员。
     // 集合的两个最重要特性是：首先，集合中的成员是无序的；其次，集合中不允许相同成员存在。

    /**
     *
     * @constructor
     */
    function Set(){
        var me = this;
        me.dataStore = [];
        me.add = add;
        me.remove =remove;
        me.size = size;
        me.union = union;
        me.intersect = intersect;
        me.subset = subset;
        me.difference = difference;
        me.show = show;
        me.contains = contains;

        function add(data){
            if(me.dataStore.indexOf(data)<0){
                me.dataStore.push(data)
                me.dataStore.sort();
                return true;
            }else{
                return false;
            }
        }
        function remove(data){
            var pos = me.dataStore.indexOf(data);
            if(pos>-1){
                me.dataStore.splice(pos,1)
                return true;
            }else{
                return false;
            }

        }

        /**
         * 合并集合
         * @param set
         */
        function union(set){
            var tempSet = new Set();
            for(var i=0;i<me.dataStore.length;i++){
                tempSet.add(me.dataStore[i])
            }
            for(var i=0;i<set.dataStore.length;i++){
                if(!tempSet.contains(set.dataStore[i])){
                    tempSet.add(set.dataStore[i])
                }
            }
            return tempSet;
        }

        /**
         * 寻找交集
         */
        function intersect(set){
            var tempSet = new Set();
            for(var i=0;i<me.dataStore.length;i++){
                if(set.contains(me.dataStore[i])){
                    tempSet.add(me.dataStore[i])
                }
            }
            return tempSet;
        }

        /**
         * 判断是否子集
         * @param set
         * @returns {boolean}
         */
        function subset(set){
            if(me.size()>set.size()) {
                return false;
            }else{
               for(var i in me.dataStore){
                   if(!(set.contains(me.dataStore[i]))){
                       return false;
                   }
               }

            }
            return true;

        }

        /**
         * 比较2集合不同 并返回
         * @param set
         * @returns {Set}
         */
        function difference(set){
            var tempSet = new Set();
            for(var i=0;i<me.dataStore.length;i++){
                if(!set.contains(me.dataStore[i])){
                    tempSet.add(me.dataStore[i])
                }
            }
            return tempSet;
        }

        /**
         * 获取该集合长度
         * @returns {Number}
         */
        function size(){
            return me.dataStore.length;
        }
        /**
         * 显示该集合
         * @returns {Array}
         */
        function show(){
            console.log(me.dataStore)
            return me.dataStore;
        }

        /**
         * 检查该成员是否属于该集合
         * @param data
         * @returns {boolean}
         */
        function contains(data){
            if(me.dataStore.indexOf(data)>-1){
                return true;
            }else{
                return false;
            }
        }
    }

    window.Set = Set;
})()