/**
 * defaultArguments
 * @param func
 * @param params
 *
 *
 * Write a function defaultArguments.
 * It takes a function as an argument, along with an object containing default values for that function's arguments, and returns another function which defaults to the right values.

 You cannot assume that the function's arguments have any particular names.

 You should be able to call defaultArguments repeatedly to change the defaults.

 function add(a,b) { return a+b;};

 var add_ = defaultArguments(add,{b:9});
 add_(10); // returns 19
 add_(10,7); // returns 17
 add_(); // returns NaN

 HINT: This problem requires using Fuction.prototype.toString() in order to extract a function's argument list
 */
Function.prototype.getParamNames = function () {
    var fnStr = this.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '');
    return fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(/([^\s,]+)/g) || [];
}

function defaultArguments(func, params) {
    if (!params) return func;
    var paramNames = func.getParamNames();
    var f = function () {
        var args = [].slice.call(arguments);
        return func.apply(null,args.concat(paramNames.map(function(p) {return params[p];}).slice(args.length)));
    };
    f.getParamNames = function () { return paramNames; };
    return f;
}
const _defaultArguments = (func, params) => {
    if (!func) return null;
    if (!params) return func;
    let funcStr = func.toString();
    var match = funcStr.match(/function[^\(]*\(([^\)]*)\)/);
    let argKeys = match[1].replace(/\/\/.*/gm, '')
        .replace(/\/\*.*?\*\//g, '')
        .replace(/\s+/g, '');
    if (!argKeys) return func;
    argKeys = argKeys.split(',');
    let wrapper = function () {
        let args = [].slice.call(arguments);
        // 优先使用传递的arg ，然后再补充默认args
        args = args.concat(argKeys.map(k=>params[k]).slice(args.length));
        return func.apply({}, args);
    };
    wrapper.toString = () => func.toString();
    return wrapper;
};

export default _defaultArguments;