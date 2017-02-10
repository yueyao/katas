/**
 * LazyMan
 * @param name
 * @constructor
 *
 * 实现一个LazyMan，可以按照以下方式调用:
 LazyMan(“Hank”)输出:
 Hi! This is Hank!

 LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
 Hi! This is Hank!
 //等待10秒..
 Wake up after 10
 Eat dinner~

 LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
 Hi This is Hank!
 Eat dinner~
 Eat supper~

 LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
 //等待5秒
 Wake up after 5
 Hi This is Hank!
 Eat supper
 */

function LazyMan(name){
    const self = this;
    self.taskList = [];

    const init = name => () => {
        console.log(` Hi! This is ${name}!`);
        self.next();
    };

    this.sleep = function(time){
        const fn = () => {
            setTimeout(function(){
                console.log(`Wake up after ${time}`);
                self.next();
            },time*1000);
        };
        self.taskList.push(fn);
        return this;
    };

    this.eat = function(name){
        const fn = () => {
            console.log(`Eat ${name}~`);
            self.next();
        };
        self.taskList.push(fn);
        return this;
    };

    this.sleepFirst = time => {
        const fn = () => {
            setTimeout(function(){
                console.log(`Wake up after ${time}`);
                self.next();
            },time*1000);
        };
        self.taskList.unshift(fn);
        return this;
    };

    this.next = () => {
        var fn = self.taskList.shift();
        fn && fn();
    };

    self.taskList.push(init(name));

    setTimeout(function(){
        self.next();
    }, 0);

    return this;
}

// LazyMan('nn').sleep(5).eat('dinner');
LazyMan('Hank').sleepFirst(5).eat('supper');
// export default LazyMan;
