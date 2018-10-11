/**
 * Created by hebo (razr409355439@gmail.com)on 14/12/7.
 */


(function(){


    function seqSearch1(arr,data){
        //顺序查找
        //就是循环查找 挨着一个一个查找
        //v1 返回布尔值
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i] == data) {
                return true;
            }
        }
        return false;
    }
      //v2 找到返回下标或者-1
    function seqSearch2(arr,data){
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i] == data) {
                return true;
            }
        }
        return false;
    }
    function findMin(arr){
        var min = arr[0]
        for(var i=0;i<arr.length;++i){
            min = Math.min(arr[i],min)
        }
        return min;
    }
    function findMax(arr){
        var min = arr[0]
        for(var i=0;i<arr.length;++i){
            min = Math.max(arr[i],min)
        }
        return min;
    }



    //自组织数据
    //数据未排序的情况下，你要找一个数据就需要耗费较多时间去查找。
    //对于未排序的数据集来说，当被查找的数据位于数据集的起始位置时，查找是最快、最成功的。
    //这一想法 参照与 82理论，百分之八十的查找都是在找百分之二十的那些数据
    //所以我们将被查找的元素不断的放到数据起始位置，来改变数组的排序。
    //使用这个方法之后，查找最频繁的元素最终会移动到数据集的起始位置，
    function seqSearch3(arr,data){
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i] == data) {
                if (i > 0) {
                    //改变元素位置。
                    swap(arr,i,i-1);
                }
                return true;
            }
        }
        return false;
    }
    function swap(arr, index, index1) {
        var temp = arr[index];
        arr[index] = arr[index1];
        arr[index1] = temp;
    }

    //进化版本
    //我们将判断该元素是否处于 20%的位置，如果处于就不调换位置。
    function seqSearch4(arr,data){
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i] == data && i > (arr.length * 0.2)) {
                swap(arr,i,0);
                return true;
            }
            else if (arr[i] == data) {
                return true;
            }
        }
        return false;

    }


    //二分查找(有序数据)
    //应用在有序数据的情况下，二分查找就非常快
    function binSearch(arr,data){
        var topBound = arr.length-1;
        var bottomBound = 0;
        while(bottomBound<=topBound){
            var mid = Math.floor((topBound + bottomBound) / 2);
            if (arr[mid] < data) {
                bottomBound = mid + 1;
            }
            else if (arr[mid] > data) {
                topBound = mid - 1;
            }
            else {
                return mid;
            }
        }
        return -1;
    }
    //新的问题
    //如果一个数据 34 在数组中有多个 34，34，34 那么2分发会找到中间的那个，那么无法准确告知我们有3个34
    //我们需要一个统计方法 来告知有几个相同的查找值
    function binCount(arr,data){
        var count = 0;
        var pos = binSearch(arr,data)
        if(pos>-1){
            ++count;
            for(var i=pos-1;i>0;--i){
                if(arr[i]==data){
                    ++count;
                }else{
                    break;
                }
            }
            for(var i=pos+1;i<arr.length;++i){
                if(arr[i]==data){
                    ++count;
                }else{
                    break;
                }
            }
        }
        return count;
    }


    window.seqSearch1=seqSearch1;
    window.seqSearch2=seqSearch2;
    window.seqSearch3=seqSearch3;
    window.seqSearch4=seqSearch4;
    window.binSearch=binSearch;
    window.binCount=binCount;
    window.findMin=findMin;
    window.findMax=findMax;
}())
