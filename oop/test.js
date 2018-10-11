/**
 * Created by hebo on 2018/10/11.
 */

// 构造函数
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



// 原型

var obj = {};
var obj_pro= Object.getPrototypeOf(obj);
// obj.prototype 属性指向了另一个对象，称之为obj的原型

// obj可以再自己原型上声明新的方法：
//              obj.prototype.say = function(){}

// 也可以不声明新的方法 而是继承别人的功能：
//                  obj.prototype = new Person();
//                  这样 obj就可以调用sayName。这里体现了原型链的能力。



// console.log(Object.prototype.__proto__) //null

// .__proto__可以读取到prototype的值,  getPrototypeOf也可以
console.log(obj.__proto__ === Object.prototype)
console.log(obj_pro === Object.prototype)

