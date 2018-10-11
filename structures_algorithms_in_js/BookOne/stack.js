/**
 * Created by hebo (razr409355439@gmail.com)on 2014/9/11.
 */
(function(){
    /**
     * 栈 后入先出
     * @constructor
     */
    function Stack(){
        this.pop = pop;
        this.push = push
        //栈顶位置
        this.top= 0;
        this.length = 0;
        this.dataStore = [];
        this.peek = peek;
        this.clear = clear;
        this.length = length;

        //返回栈顶元素
        function peek(){
            return this.dataStore[this.top-1];
        }
        //清空栈内元素
        function clear(){
            this.top=0;
            this.dataStore=[];
        }
        //返回栈内元素长度
        function length (){
            return this.top;
        }
        //弹出栈顶元素
        function pop(){
            return this.dataStore[--this.top];
        }
        //插入新元素
        function push(element){
            this.dataStore[this.top++]=element;
        }

    }

    /**
     * 进制转换
     * @param num  数字 *10进制
     * @param base  转换进制 任何进制
     * @returns {string}
     */
    function mulBase(num, base) {
        var s = new Stack();
        do {
            s.push(num % base);
            num = Math.floor(num /= base);
        } while (num > 0);
        var converted = "";
        while (s.length() > 0) {
            converted += s.pop();
        }
        return converted;
    }
    var s = mulBase(32,2)
    console.log(s)

    /**
     * 判断字符是否  回文    *回文是指这样一种现象：一个单词、短语或数字，从前往后写和从后往前写都是一样的。
     * @param word
     * @returns {boolean}
     */
    function ishuiwen(word){
        var s = new Stack()
        for(var i=0;i<word.length;i++){
            s.push(word[i])
        }
        var foword = '';

        while(s.length()>0){
            foword+=s.pop()
        }
        return word==foword;
    }
    var hs = 'aca'
    console.log(hs+"判断是否回文："+ishuiwen(hs))


    /**
     * 斐波那契数列
     * @param n
     * @returns {number}
     */
    function factorial(n) {
        if (n === 0) {
            return 1;
        }
        else {
            return n * factorial(n-1);
        }
    }
})()
