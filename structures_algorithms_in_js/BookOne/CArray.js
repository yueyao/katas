/**
 * Created by hebo (razr409355439@gmail.com)on 14/10/20.
 */
(function(){
    /**
     * 测试类 ，数组
     * @param numElements
     * @constructor
     */
    function CArray(numElements){
        var me = this;
        me.dataStore = [];
        me.pos = 0;
        me.numElements = numElements;
        me.insert = insert;
        me.toString = toString;
        me.clear = clear;
        me.setData = setData;
        me.getData = getData;
        me.swap = swap;
        me.bubbleSort = bubbleSort;
        me.selectionSort = selectionSort;
        me.insertionSort = insertionSort;
        me.shellsort = shellsort;
        me.shellsort1 = shellsort1;
        me.mergeSort = mergeSort;
        me.qSort = qSort;
        //序列
        me.gaps = [701,301,132,57,23,10,4,1];

        for(var i=0;i<numElements;++i){
            me.dataStore[i] = i ;
        }
        function insert(element){
            me.dataStore[me.pos++] = element;
        }
        function toString(){
            var restr = "";
            for ( var i = 0; i < me.dataStore.length; ++i ) {
                restr += me.dataStore[i] + " ";
                if (i > 0 & i % 10 == 0) {
                    restr += "\n";
                }
            }
            return restr;
        }
        function clear(){
            for(var i=0;i<me.dataStore.length;++i){
                me.dataStore[i]=0;
            }
        }
        function setData(){
            for ( var i = 0; i < me.numElements; ++i ) {
                me.dataStore[i] = Math.floor(Math.random() * (me.numElements + 1));
            }
        }
        function getData(){
            return me.dataStore;
        }
        //交换数组元素。
        function swap(arr,index1,index2){
            var temp = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] = temp;
        }
        //冒泡排序算法
        //比较相邻的数据 左侧大于右侧时将他们进行互换。
        function bubbleSort(){
            var elen = me.dataStore.length;
            var temp ;
            for(var outer = elen; outer>=2;--outer){
                for(var inner = 0;inner<=outer -1; ++inner){
                    if(me.dataStore[inner]>me.dataStore[inner+1]){
                        swap(me.dataStore,inner,inner+1)
                    }
                }
                //console.log(me.toString()) //打印这个排序过程。
            }
        }
        //选择排序
        //将第一个元素与其他元素比较，较小的放到数组第一个位置 依次比较
        function selectionSort(){
            var min,temp ;
            for(var outer = 0;outer<=me.dataStore.length-2;++outer){
                min = outer;
                //比较第一个元素 跟第二个元素（依次递增下标再比较，直到找到一个最小的）
                for(var inner = outer+1;inner<=me.dataStore.length-1;++inner){
                    if(me.dataStore[inner]<me.dataStore[min]){
                        min = inner ;
                    }
                }
                swap(me.dataStore,outer,min)
                //console.log(me.toString()) //打印这个排序过程。
            }
        }
        //插入排序
        //将一堆数据开始排序，如果小，就往左放(此时数据已经在数组中占得一个下标，我们就把他下标右移一个位置,并把这个小的放左边）
        function insertionSort(){
            var  temp,inner;
            for(var outer=1;outer<=me.dataStore.length-1;++outer){
                temp = me.dataStore[outer];
                inner = outer;
                while(inner>0&&(me.dataStore[inner-1]>=temp)){
                    me.dataStore[inner]=me.dataStore[inner-1];
                    --inner;
                }
                me.dataStore[inner]=temp;
               // console.log(me.toString()) //打印这个排序过程。
            }
        }


        //希尔排序
        //定义间隔序列 在排序的时候到根据序列比较，动态调整序列的位置 。这种方案可以使离正确位置很远的元素更快地回到合适的位置。
        //至于间隔序列是多少呢？  有很多个不同的序列 我们用的是Marcin Ciura 2001公开的序列 701 301 132 57 23 10 4 1
        function shellsort(){
            for (var g = 0; g < this.gaps.length; ++g) {
                for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
                    var temp = this.dataStore[i];
                    for (var j = i; j >= this.gaps[g] && this.dataStore[j-                                this.gaps[g]] > temp;
                         j -= this.gaps[g]) {
                        this.dataStore[j] = this.dataStore[j - this.gaps[g]];
                    }
                    this.dataStore[j] = temp;
                }
            }
        }
        //定义间隔序列
        function setGaps(arr){
            me.gaps = arr;
        }
        //希尔排序（ 动态计算间隔序列）
        function  shellsort1(){
            var N = this.dataStore.length;
            var h = 1;
            while (h < N/3) {
                h = 3 * h + 1;
            }
            while (h >= 1) {
                for (var i = h; i < N; i++) {
                    for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j-h];j -= h) {
                        swap(this.dataStore, j, j-h);
                    }
                }
                h = (h-1)/3;
            }
        }



        //归并排序
        //把一系列排好序的子序列合并成一个大的完整有序序列。
        //我们需要两个排好序的子数组，然后通过比较数据大小，先从最小的数据开始插入，最后合并得到第三个数组。
        //自顶向下的归并排序  因实现需要递归(数据多的话递归太深) 所以采取 自底向上的归并排序
        //自底向上的归并排序
        // 这个算法首先将数据集分解为一组只有一个元素的数组。然后通过创建一组左右子数组将它们慢慢合并起来，每次合并都保存一部分排好序的数据，直到最后剩下的这个数组所有的数据都已完美排序


        function mergeSort() {
            if (this.dataStore.length < 2) {
                return;
            }
            var step = 1;
            var left, right;
            while (step < this.dataStore.length) {
                left = 0;
                right = step;
                while (right + step <= this.dataStore.length) {
                    mergeArrays(this.dataStore, left, left+step, right, right+step);
                    left = right + step;
                    right = left + step;
                }
                if (right < this.dataStore.length) {
                    mergeArrays(this.dataStore, left, left+step, right, this.dataStore.length);
                }
                //步进值
                step *= 2;
            }
        }
        function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
            var rightArr = new Array(stopRight - startRight + 1);
            var leftArr = new Array(stopLeft - startLeft + 1);
            k = startRight;
            //处理右边数组
            for (var i = 0; i < (rightArr.length-1); ++i) {
                rightArr[i] = arr[k];
                ++k;
            }
            //处理左边数组
            k = startLeft;
            for (var i = 0; i < (leftArr.length-1); ++i) {
                leftArr[i] = arr[k];
                ++k;
            }
            rightArr[rightArr.length-1] = Infinity; // 哨兵值
            leftArr[leftArr.length-1] = Infinity; // 哨兵值
            //合并
            var m = 0;
            var n = 0;
            for (var k = startLeft; k < stopRight; ++k) {
                if (leftArr[m] <= rightArr[n]) {
                    arr[k] = leftArr[m];
                    m++;
                } else {
                    arr[k] = rightArr[n];
                    n++;
                }
            }
            //console.log("left array - ", leftArr);
            //console.log("right array - ", rightArr);
        }


        //快速排序
        //将数据分解为  大于或者小于基准值 的2部分，通过递归的方式直至完成。
        function qSort(arr) {
            if (arr.length == 0) {
                return [];
            }
            var left = [];
            var right = [];
            var pivot = arr[0];
            for (var i = 1; i < arr.length; i++) {
                //console.log("基准值：" + pivot + " 当前元素：" + arr[i]);
                if (arr[i] < pivot) {
                    ///console.log("移动 " + arr[i] + " 到左边");
                    left.push(arr[i]);
                } else {
                   // console.log("移动 " + arr[i] + " 到右边");
                    right.push(arr[i]);
                }
            }
            return qSort(left).concat(pivot, qSort(right));
        }

    }

    window.CArray = CArray;
})()
