/**
 * Created by hebo (razr409355439@gmail.com)on 14-9-28.
 */
(function(){
    /**
     *
     * 质数  一个大于1的自然数，除了1和它本身，不能被整除的数
     * 合数  一个大于1的自然数，除了1和它本身，还能被其它数整除
     *
     *
     * 开链法， 对Hash表中每个Hash值建立一个冲突表，即将冲突的几个记录以表的形式存储在其中
     *
     * 开放寻址散列，当发生碰撞时，线性探测法检查散列表中的下一个位置是否为空。如果为空，就将数据存入该位置；如果不为空，则继续检查下一个位置，直到找到一个空的位置为止。
     *
     */

    //版本一 （字符串类型的键
    //因其对散列值处理中 有碰撞的可能。
    //不具备处理碰撞数据的能力(有可能散列值相同，会把上一个值覆盖掉)

    function HashTable(){
        var me = this;
        me.table = new Array(137);
        me.simpleHash = simpleHash;
        me.showDistro = showDistro;
        me.showPutLength = showPutLength;
        //统计有多少数据进入散列表
        me.putLength = 0;
        me.put = put;


        /**
         * 取散列值  *取每个字符的ASCII码值之和
         * @param s
         * @returns {number}
         */
        function simpleHash(s){
            var total = 0;
            for (var i = 0; i < s.length; ++i) {
                total += s.charCodeAt(i);
            }
            return total % me.table.length;
        }
        function put(data){
            me.putLength++;
            var pos = me.simpleHash(data);
            me.table[pos] = data;
        }
        function showDistro(){
            var s = '',i=0;
            for(;i<me.table.length;i++){
                if (me.table[i] != undefined) {
                    s+=" key: "+ i+" , value:"+me.table[i] +" \n";
                }
            }
            console.log(s)
        }

        function showPutLength(){
            console.log("共有 "+me.putLength+" 次插入散列表行为");
            return me.putLength;
        }
    }

    //版本二 （字符串类型的键
    //优化处理碰撞数据的问题
    function HashTable2(){
        var me = this;
        me.table = new Array(137);
        me.simpleHash = simpleHash;
        me.showDistro = showDistro;
        me.showPutLength = showPutLength;
        me.put = put;
        //统计有多少数据进入散列表
        me.putLength = 0;
        //质数，当该数字式37时候 也会碰撞 +_+
        me.H = 31;

        //第二版 修正碰撞问题（只能说 尽可能减少碰撞  霍纳算法
        //为了避免碰撞，首先要确保散列表中用来存储数据的数组其大小是个质数
        //新的散列函数仍然先计算字符串中各字符的ASCII码值，不过求和时每次要乘以一个质数。
        /**
         * 取散列值  *取每个字符的ASCII码值之和
         * @param s
         * @returns {number}
         */
        function simpleHash(s){
            var total = 0;
            for (var i = 0; i < s.length; ++i) {
                total += me.H * total + s.charCodeAt(i);
            }
            total = total % me.table.length;
            if (total < 0) {
                total += me.table.length-1;
            }
            return parseInt(total);
        }
        function put(data){
            me.putLength++;
            var pos = me.simpleHash(data);
            me.table[pos] = data;
        }
        function showDistro(){
            var s = '',i=0;
            for(;i<me.table.length;i++){
                if (me.table[i] != undefined) {
                    s+=" key: "+ i+" , value: "+me.table[i] +" \n";
                }
            }
            console.log(s)
        }
        function showPutLength(){
            console.log("共有 "+me.putLength+" 次插入散列表行为");
            return me.putLength;
        }
    }


    //版本三 （整形类型的键
    //散列化整形
    function HashTable3(){
        var me = this;
        me.table = new Array(137);
        me.simpleHash = simpleHash;
        me.showDistro = showDistro;
        me.showPutLength = showPutLength;
        me.put = put;
        me.get = get;
        //统计有多少数据进入散列表
        me.putLength = 0;
        //质数，当该数字式37时候 也会碰撞 +_+
        me.H = 31;

        //第二版 修正碰撞问题（只能说 尽可能减少碰撞  霍纳算法
        //为了避免碰撞，首先要确保散列表中用来存储数据的数组其大小是个质数
        //新的散列函数仍然先计算字符串中各字符的ASCII码值，不过求和时每次要乘以一个质数。
        /**
         * 取散列值  *取每个字符的ASCII码值之和
         * @param s
         * @returns {number}
         */
        function simpleHash(s){
            var total = 0;
            for (var i = 0; i < s.length; ++i) {
                total += me.H * total + s.charCodeAt(i);
            }
            total = total % me.table.length;
            if (total < 0) {
                total += me.table.length-1;
            }
            return parseInt(total);
        }
         //第三版 修改参数
        //对key值进行散列 存入data
        /**
         * 插入散列表
         * @param data
         */
        function put(key,data){
            me.putLength++;
            var pos = me.simpleHash(key);
            me.table[pos] = data;
        }
        function get(key){
            key = me.simpleHash(key) ;
            return me.table[key];
        }
        function showDistro(){
            var s = '',i=0;
            for(;i<me.table.length;i++){
                if (me.table[i] != undefined) {
                    s+=" key: "+ i+" , value: "+me.table[i] +" \n";
                }
            }
            console.log(s)
        }
        function showPutLength(){
            console.log("共有 "+me.putLength+" 次插入散列表行为");
            return me.putLength;
        }
    }

    /**
     * 第4版本   * 有问题  put方法参数key不知从何而来
     *
     * @type {HashTable}
     */
    function HashTable4(){
        var me = this;
        me.table = new Array(137);
        me.simpleHash = simpleHash;
        me.showDistro = showDistro;
        me.showPutLength = showPutLength;
        me.buildChains =  buildChains;
        me.put = put;
        me.get = get;
        //统计有多少数据进入散列表
        me.putLength = 0;
        //质数，当该数字式37时候 也会碰撞 +_+
        me.H = 31;

        /**
         * 取散列值  *取每个字符的ASCII码值之和
         * @param s
         * @returns {number}
         */
        function simpleHash(s){
            var total = 0;
            for (var i = 0; i < s.length; ++i) {
                total += me.H * total + s.charCodeAt(i);
            }
            total = total % me.table.length;
            if (total < 0) {
                total += me.table.length-1;
            }
            return parseInt(total);
        }
        //第三版 修改参数
        //对key值进行散列 存入data
        /**
         * 插入散列表
         * @param data
         */
        function put(key,data){
            me.putLength++;
            var pos = me.simpleHash(data);

            var index = 0;
            if(me.table[pos][index]== undefined){
                me.table[pos][index] = pos;
                me.table[pos][index+1] = data;
                ++index;
            }else{
                while(me.table[pos][index]!=undefined){
                    ++index;
                }
                me.table[pos][index] = pos;
                me.table[pos][index+1] = data;
            }

        }
        function get(data){
            var pos = me.simpleHash(data);
            var index = 0;
            if (me.table[pos][index] == pos) {
                return me.table[pos][index+1];

            }else{
                while (me.table[pos][index] != pos) {
                    index += 2;
                }
                return me.table[pos][index+1];
            }
            return undefined;
        }
        function showDistro(){
            var s = '',i=0;      console.log(me.table)
            for(;i<me.table.length;i++){
                if (me.table[i][0]!= undefined) {
                   console.log(me.table[i])
                   // s+=" key: "+ i+" , value: "+me.table[i].join(' , ') +" \n";
                }
            }
            console.log(s)
        }
        function showPutLength(){
            console.log("共有 "+me.putLength+" 次插入散列表行为");
            return me.putLength;
        }
        function buildChains() {
            for (var i = 0; i < me.table.length; ++i) {
                me.table[i] = [];
            }
        }


    }

    /**
     * 第五版本 线性探测
     * @constructor
     */
    function HashTable5(){
        var me = this;
        me.put = put;
        me.get = get;
        me.table = new Array(137);
        me.values = [];
        me.simpleHash = simpleHash;
        me.showDistro = showDistro;
        me.showPutLength = showPutLength;
        me.buildChains =  buildChains;
        //质数，当该数字式37时候 也会碰撞 +_+
        me.H = 31;
        function put(key,data){
            me.putLength++;
            var pos = me.simpleHash(key)
            if (me.table[pos] == undefined) {
                me.table[pos] = key;
                me.values[pos] = data;
            }
            else {
                while (me.table[pos] != undefined) {
                    pos++;
                }
                me.table[pos] = key;
                me.values[pos] = data;
            }
        }
        function get(key){
            var hash = -1;
            hash = this.simpleHash(key);
            if (hash > -1) {
                for (var i = hash; me.table[hash] != undefined; i++) {
                    if (me.table[hash] == key) {
                        return me.values[hash];
                    }
                }
            }
            return undefined;
        }
        function showDistro(){

        }
        function showPutLength(){
            console.log("共有 "+me.putLength+" 次插入散列表行为");
            return me.putLength;
        }
        function buildChains(arr){
            for (var i = 0; i < arr.length; ++i) {
                arr[i] = new Array();
            }
        }
        function simpleHash(s){
            var total = 0;
            for (var i = 0; i < s.length; ++i) {
                total += me.H * total + s.charCodeAt(i);
            }
            total = total % me.table.length;
            if (total < 0) {
                total += me.table.length-1;
            }
            return parseInt(total);
        }
        buildChains(me.table)
    }

    window.HashTable = HashTable;
    window.HashTable2 = HashTable2;
    window.HashTable3 = HashTable3;
    window.HashTable4 = HashTable4;
    window.HashTable5 = HashTable5;
})()
