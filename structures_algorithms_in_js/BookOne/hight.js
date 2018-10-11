/**
 * Created by hebo (razr409355439@gmail.com)on 14/12/9.
 */

//动态规划有时被认为是一种与递归相反的技术。
// 递归是从顶部开始将问题分解，通过解决掉所有分解出小问题的方式，来解决整个问题。
// 动态规划解决方案从底部开始解决问题，将所有小问题解决掉，然后合并成一个整体解决方案，从而解决掉整个大问题。

(function(){
    //斐波那契数列 递归版本
    function recurFib(n) {
        if (n < 2) {
            return n;
        }
        else {
            return recurFib(n-1) + recurFib(n-2);
        }
    }
    //通过动态规划来保存结果，避免重复计算
    //数组最后一个值 是总和
    function dynFib(n) {
        var val = [];
        for (var i = 0; i <= n; ++i) {
            val[i] = 0;
        }
        if (n == 1 || n == 2) {
            return 1;
        }
        else {
            console.log(n)
            val[1] = 1;
            val[2] = 2;
            for (var i = 3; i <= n; ++i) {
                val[i] = val[i-1] + val[i-2];
            }
            return val[n-1];
        }
    }
    //迭代版本
    //我们已经知道 每次结果都是 前2个值相加得来，我们利用这个规则将数组存值的方式替换掉。
    function iterFib(n) {
        var last = 1;
        var nextLast = 1;
        var result = 1;
        for (var i = 2; i < n; ++i) {
            result = last + nextLast;
            nextLast = last;
            last = result;
        }
        return result;
    }

    //寻找最长公共子串  （在单词“raven”和“havoc”中，最长的公共子串是“av”。
    //
    function lcs(word1, word2) {
        function match(){
            var max = 0;
            var index = 0;
            var lcsarr = new Array(word1.length + 1);
            for (var i = 0; i <= word1.length + 1; ++i) {
                lcsarr[i] = new Array(word2.length + 1);
                for (var j = 0; j <= word2.length + 1; ++j) {
                    lcsarr[i][j] = 0;
                }
            }
            for (var i = 0; i <= word1.length; ++i) {
                for (var j = 0; j <= word2.length; ++j) {
                    if (i == 0 || j == 0) {
                        lcsarr[i][j] = 0;
                    } else {
                        if (word1[i - 1] == word2[j - 1]) {
                            lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
                        } else {
                            lcsarr[i][j] = 0;
                        }
                    }
                    if (max < lcsarr[i][j]) {
                        max = lcsarr[i][j];
                        index = j;
                    }
                }
            }
            return {
                max:max,
                index:index
            }
        }
        //通过记录 最大相同字符 和最后一个相同字符的index，我们可以从字符串中拿到结果
        var index = match().index,
            max = match().max;
            var str=""
            for (var i = index-max; i < index; ++i) {
                str += word2[i];
            }
            return str;

    }
    //背包问题
    //将不同容量的物品 塞入一个大容量的背包，并尽量塞满 给出最优方案。

    /**
     *
     * @param capacity  背包容积
     * @param size      物品尺寸
     * @param value     物品价值
     * @param n        物品数量
     * @returns {*}
     */
    function dKnapsack(capacity, size, value, n) {
        var K = [];
        for (var i = 0; i <= capacity + 1; i++) {
            K[i] = [];
        }
        for (var i = 0; i <= n; i++) {
            for (var w = 0; w <= capacity; w++) {
                if (i == 0 || w == 0) {
                    K[i][w] = 0;
                } else if (size[i - 1] <= w) {
                    K[i][w] = max(value[i - 1] + K[i - 1][w - size[i - 1]], K[i - 1][w]);
                } else {
                    K[i][w] = K[i - 1][w];
                }
            }
        }
        return K[n][capacity];
        function max(a,b){
            return (a>b)?a:b ;
        }
    }

    //贪心算法
    //贪心算法就是一种比较简单的算法。贪心算法总是会选择当下的最优解，而不去考虑这一次的选择会不会对未来的选择造成影响
    function makeChange(origAmt, coins) {
        var remainAmt = 0;
        if (origAmt % .25 < origAmt) {
            coins[3] = parseInt(origAmt / .25);
            remainAmt = origAmt % .25;
            origAmt = remainAmt;
        }
        if (origAmt % .1 < origAmt) {
            coins[2] = parseInt(origAmt / .1);
            remainAmt = origAmt % .1;
            origAmt = remainAmt;
        }
        if (origAmt % .05 < origAmt) {
            coins[1] = parseInt(origAmt / .05);
            remainAmt = origAmt % .05;
            origAmt = remainAmt;
        }

        coins[0] = parseInt(origAmt / .01);
    }
    //背包问题的贪心算法
    //最核心的问题在于，对物品进行性价比排序，  用价格跟尺寸的来得到这个性价比，性价比高的肯定优先。
    //就好比给你一个包，放iphone6 /水杯/键盘/鼠标/插板 ，这样的东西， 你肯定选择最有价值的 iphone6 因为它占用地方小，又最有价值。
    /**
     *
     * @param values    价值
     * @param weights   容量
     * @param capacity  背包大小
     * @param len       几个物品
     * @returns {number} 最大可容纳价值
     */
    function ksack(values, weights, capacity,len) {
        var load = 0;
        var i    = 0;
        var w    = 0;
        while (load < capacity && i < len) {
            //当背包可以放进这个物品的时候
            if (weights[i] <= (capacity-load)) {
                w += values[i];
                load += weights[i];
            } else {
                //
                var r = (capacity-load)/weights[i];
                w += r * values[i];
                load += weights[i];
            }
            ++i;
        }
        return w;
    }


    window.dynFib = dynFib
    window.recurFib = recurFib
    window.iterFib = iterFib
    window.lcs = lcs;
    window.dKnapsack = dKnapsack;
    window.makeChange = makeChange;
    window.ksack = ksack;

})()





