/**
 * Created by hebo (razr409355439@gmail.com)on 14-9-25.
 */

(function(){
    /**
     * 字典
     * @constructor
     */
    function Dictionary(){
        var me = this;
        me.dataStore = [];
        me.add = add;
        me.find = find;
        me.remove = remove;
        me.clear = clear;
        me.count = count;
        me.showAll = showAll;

        function add(key,value){
            me.dataStore[key] = value;
        }
        function find(key){
            return me.dataStore[key] ;
        }
        function remove(key){
            delete me.dataStore[key]
        }
        function clear(){
            for(var i in Object.keys(me.dataStore)){
                delete me.dataStore[i];
            }
        }
        function showAll (){
            var list = Object.keys(me.dataStore).sort(),s=' ';
            list.forEach(function(item){
                s+= "key: "+item;
                s+= ",value: "+me.dataStore[item] +" \n "
            })
            console.log(s)
        }
        function count(){
            var list = Object.keys(me.dataStore),n=0;
            list.forEach(function(){
                ++n;
            })
            return n;
        }

    }

    window.Dictionary = Dictionary;
})()
