/**
 * Created by hebo on 2018/10/11.
 */


// 在 JavaScript 中，数组是哈希映射。它可以通过多种数据结构实现，其中一种是链表。

// JavaScript 引擎已经在为同种数据类型的数组分配连续的存储空间了

// ArrayBuffer 类型化数组 会有一大块连续的存储位置 ，
// 类型化数组性能良好且非常高效。WebGL 开发者因为缺少高效处理二进制数据的手段而经常面临性能问题，所以提出了类型化数组。


// 性能测试

    // 类型不一致数组  耗性能
var LIMIT = 10000000;
var arr = new Array(LIMIT);
arr.push({a: 22});
console.time('Array insertion time');
for (var i = 0; i < LIMIT; i++) {
    arr[i] = i;
}
console.timeEnd('Array insertion time');


//ArrayBuffer
var buffer = new ArrayBuffer(LIMIT * 4);
var arr2 = new Int32Array(buffer);
console.time("ArrayBuffer insertion time");
for (var i = 0; i < LIMIT; i++) {
    arr2[i] = i;
}
console.timeEnd("ArrayBuffer insertion time");




// 时间复杂度

// 插入操作：
// 将一个数据插入到数组中的第 k 个位置。为了把第 k 个位置腾出来，给新来的数据，我们需要将第 k～n 这部分的元素都顺序地往后挪一位。
// 如果是末尾插入，那不需要移动，复杂度是O(1)
// 如果是开头插入，那需要全部移动，复杂度是O(n)
// 平均是O(n)
// 在JavaScript中，数组是一个可以修改的对象。如果添加元素，它就会动态增长



// 删除操作：
// 如果删除数组末尾的数据，则最好情况时间复杂度为 O(1)；
// 如果删除开头的数据，则最坏情况时间复杂度为 O(n)；
// 平均情况时间复杂度也为 O(n)。
// 多次删除集中在一起，提高删除效率


// 查找操作：
// 即便是排好的数组，用二分查找，时间复杂度也是O（logn）。
// 标随机访问的时间复杂度为O（1）
