/**
 * book: js面向对象精要
 * Created by hebo on 2018/10/11.
 */


/** #1
 *
 * 对象：
 *
 * 内部属性：[[Attr]] 用双中括号来标注内部属性。
 *          内部属性无法通过代码访问，而是定义了代码执行时的行为。
 */

// note:
// 原始类型：boolean number string null undefined
//         原始类型 直接保存原始值

console.log(typeof 's')

// 三等号不会强制变量类型转换
console.log(1 === '1')


// 复杂类型：Object Array  Date Error Function RegExp
//         变量只保存对象所在位置指针

// {}是new Object的字面量形式，这样可以在不需要使用new操作符的情况下生成引用值。
// 其他类型同理。
var o1 = {};

var s1 = 's';// 隐藏操作： var s1 = new String('s');

// 解除引用可以直接 variable=null

// 鉴别继承
console.log('s' instanceof String)

// Array.isArray:
// 当一个数组从一个iframe传到另一个iframe . instanceof无法鉴别来自不同iframe的Array.
// Array.isArray就可以鉴别,无论Array来自哪里，都可以对数组返回true

// 原生封装类型：
//      Number String Boolean

var s2 = 'aaa';
// 隐藏操作：var temp = new String(s2)  临时对象
var s2_first = s2.charAt(0);
// 隐藏操作： s2_first = temp.charAt(0)
s2.last = '123';
// 隐藏操作： temp = null    此时temp被销毁

//隐藏操作：var temp = new String(name)
console.log(s2.last) // undefined 。因为temp是新的临时对象 没有last属性。
//隐藏操作： temp = null


// 手动创建一个原始封装类型：
var s3 = new String('test');

// 是对象，无法判断真是类型
console.log(typeof s3); // object

// 挂载属性可以成功
s3.name = 'a';

console.log(s3.name) // a

/** #2
 * 函数
 *
 */

// note:
// 函数也是对象。不同点在于函数存在对象中[[Call]]的内部属性中。
// typeof 对于任何有[[Call]]属性的对象返回'function'
// 参数： arguments类数组。[].prototype.slice.call(arguments)
// 函数期望的参数个数保存在 length属性中
// 全局作用域中，this代表全局对象
// call apply可以改变this  bind也可以，但是它只返回一个新的绑定this的函数。

// 函数声明： 会被提升至作用域顶端
function testFn() {
}

// 函数表达式: 仅仅能通过变量引用，无法提升
var add = function (a, b) {
};

// 函数期望的参数个数保存在 length属性中
console.log(add.length);


if (!Function.prototype.bind) {
    Function.prototype.bind = function (thisObj) {
        var args = Array.prototype.slice(arguments, 1);
        // 空白函数
        // 帮助原型链继承
        var F = function () {
        }
        var me = this;

        function b() {
            let arg = Array.prototype.slice(arguments);

            return me.apply(
                // 这里是为了 让新函数new可以正确返回this
                // 非new 返回 thisObj
                this instanceof me && thisObj ? me : thisObj || window,
                args.concat(arg));
        }

        // b.prototype 直接绑定到this.prototype会破坏this.prototype
        // eg: b.prtotype增加方法会直接加到this.prototype


        // F原型绑定到this上
        F.prototype = me.prototype;
        // 给该函数增加原型链 借助F实现
        b.prototype = new F();
        return b;
    }
}
/**
 * this 问题
 *
 * 绑定规则：
 1. 由new调用？绑定到新创建的对象。
 2. 由call或者apply（或者bind）调用？绑定到指定的对象。
 3. 由上下文对象调用？绑定到那个上下文对象。
 4. 默认：在严格模式下绑定到undefined，否则绑定到全局对象。

 箭头函数并不会使用以上四种规则，它会继承外层函数调用的this绑定。
 */


/**
 * 对象操作
 *
 *  内部属性/方法：
 *  [[Put]]  : 定义属性的时候会用到该方法
 *  [[Set]]  : 给属性设定新值的时候用到该方法
 *  [[Delete]]: 删除属性的方法 。  delete obj.name
 *  [[Extensible]]: 对象是否不可扩展
 *  [[Prototype]]
 *
 *  某属性内部属性：
 *  [[Enumerable]]：表示属性是否可以被枚举
 *  [[Configurable]]: 表示属性是否可配置
 *  [[Writable]]: 表示属性是否可以被写入
 *  [[Value]] : 值保存在这里
 *  [[Get]] : 访问器属性 内含getter函数
 *  [[Set]] : 访问器属性 内含setter函数
 *
 *  数据属性和访问器属性：
 *      数据属性保存值
 *      访问器属性不保存值，它用getter和setter来进行制定操作。
 *     [Put]方法默认是增加数据属性 eg: obj.name
 *     访问器属性是定义一个属性"name"被读取/写入时调用的函数： getter | setter
 */
var obj3 = {
    age: 1
};
//属性探测： in更为准确（会查找自身属性以及原型属性）
console.log('age' in obj3);

// 枚举自有属性 不包含原型属性
console.log(Object.keys(obj3));

//
Object.defineProperty(obj3, 'name', {
    configurable: true,
    enumerable: true,
    value: 'xiaoming',
    writable: true
});

// 获取某属性特征
console.log(Object.getOwnPropertyDescriptor(obj3, 'xiaoming'));

// 禁止修改对象

// 1. Object.preventExtensions  无法再新增属性

// 2. Object.seal()  无法新增属性，且不能删除属性或者改变类型，只能读写它的属性。

// 3. Object.freeze() 无法新增苏醒 不能删除修改 不能写入属性。


/**
 *  构造函数
 */

function Person(name) {
    this.name = name;

    // 构造函数内部声明sayName
    // 这样有个性能问题：N个实例有N个sayname函数（用原型解决这个问题）
    this.sayName = function () {
        console.log(this.name)
    }
}

// 当调用new的时候，会自动帮你生成一个this对象，且其类型就是构造函数的类型。并且会帮你返回这个对象。无需主动返回。
var p1 = new Person('test');
// 无参数的构造函数也可以： var p1= new Person;


// constructor 可以被更改，所以只靠这个判断不合适，用instanceof
console.log(p1.constructor === Person);


/**
 *  原型:
 *
 *  原型链：
 obj找不到自有属性，会沿着[[Prototype]]搜索该属性，如果找到则返回，找不到返回undefined。

 原型对象不应存储属性：会被多个实例共享一个属性值 他们都可以修改删除新增

 原型对象有constructor属性 指向自身构造函数。
 */

var obj = {};
var obj_pro = Object.getPrototypeOf(obj);
// obj.prototype 属性指向了另一个对象，称之为obj的原型

// obj可以再自己原型上声明新的方法：
//              obj.prototype.say = function(){}

// 也可以不声明新的方法 而是继承别人的功能：
//       obj.prototype = new Person();   注：不能obj.prototype = Person.prototype ，这样修改变动obj原型会同步到Person.
//       这样 obj就可以调用sayName。这里体现了原型链的能力。


// console.log(Object.prototype.__proto__) //null

// .__proto__可以读取到prototype的值,  getPrototypeOf也可以
console.log(obj.__proto__ === Object.prototype)
console.log(obj_pro === Object.prototype)


function Obj4() {

}
Obj4.prototype = {
    // 使用 prototype={} 改变了 constructor（Object）, 需要纠正回来
    constructor: Obj4,

}


// 构造函数：Person
// 原型对象： Person.prototype
// 实例：p1

// 关系：
// 实例跟原型对象有直接联系 ， 实例跟构造函数并没有直接联系
// 证明： p1.__proto__ === Person.prototype

// 原型对象跟构造函数有直接联系
// 证明： Person.prototype.constructor = Person;


/**
 * 继承：
 *
 * 通过原型链继承，称之为原型对象继承。
 *
 */

// 继承自Object.prototype的方法:
//  hasOwnProperty
//  propertyIsEnumerable()
//  isPrototypeOf()
//  valueOf()
    // 每当一个操作符被用于一个对象时。会调用valueOf();
    // var s = 1; s++
    //封装类型对valueOf()方法进行了重写：String类会返回字符串，Number类会返回数字 等等
//  toString()
    // 如果valueOf()返回的是引用而不是原始值的时候，会去调用toString()方法
    // 当JS 期望一个字符串时 也会去调用toString()

// 对象继承

var obj5 = {}; //继承了Object.prototype
var obj6 = Object.create(Object.prototype)// 等同于上面

// 构造函数继承

function P1() {
}
P1.prototype = {
    constructor: P1,
    sayName(){

    }
}
function P2() {
}

// P2.prototype = new P1() ；不推荐： 你不确定P1是否需要传参，有可能错误，
P2.prototype = Object.create(P1.prototype);


// 构造函数窃取

function P3(width, height) {
    this.width = width;
    this.height = height;
}

P3.prototype.say = function () {
    console.log(this.width, this.height)
}
P3.prototype.toString = function () {
    return 'p3 :' + this.width + ',' + this.height;
}

function P4(size) {
    P3.call(this, size, size)
    // 自动继承了属性。并且可以声明新的属性。
    this.area = this.width * this.height;
}

P4.prototype = Object.create(P3.prototype);

// 调用父级方法
P4.prototype.toString = function () {
    let ts = P3.prototype.toString.call(this);
    return ts.replace('p3', 'p4')
}

var p44 = new P4(20);
console.log(p44.toString())


/**
 * 对象模式
 */


// 私有成员和特权成员

// 通过闭包以及IIFE函数，可以让私有成员不被外部访问，还可以增加特权方法对私有成员进行访问以及修改。
// 推荐IIFE立即执行，这样匿名函数执行完会立即销毁。
var vistor = (function () {
    var name = 'jack';
    return {

        getName: function () {
            return name;
        },

        setName: function (name) {
            name = name;
        }
    }
}())

// 混入
// 一个对象再不改变原型链的前提下获得其他对象的属性与方法

function mixin(origin, target) {
    Object.keys(target).map(k => {
        origin[k] = target[k]
    })
    return origin;
}

// 混入有很多用处，比如给一个对象增加事件支持而不使用继承。


function EventTarget() {
}

function Peo(name) {
    this.name = name;
}
// 伪继承方式，但 Peo跟EventTarget不应是父子级关系。
//Peo.prototype=Object.create(EventTarget.prototype);

// 混入新的方法到Peo.prototype
mixin(Peo.prototype, new EventTarget());
// 纠正constructor 以及新增方法
mixin(Peo.prototype, {
    constructor: Peo,
    test(){

    },
    // 在mixin1版本中，访问器属性不被识别，
    // 因为mixin里面是直接赋值，而不是被object.definePrototype创建
    get name() {
        return this.name
    },
    set name(name) {
        this.name = name;
    }
});

function mixin2(origin, target) {
    Object.keys(target).forEach(k => {
        var desc = Object.getOwnPropertyDescriptor(target, k);

        Object.defineProperty(origin, k, desc);
    })
    return origin;
}

//作用域安全构造函数
// 如果没有new调用 还是可以正确运行
function Pa(name) {
    if (this instanceof Pa) {
        this.name = name;
    } else {
        return new Pa(name)
    }
}

