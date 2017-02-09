/**
 * getFunction
 * @param sequence
 * @returns {*}
 * For any given linear sequence,
 * calculate the function [f(x)] and return it as a string.
 */
const getFunction = (sequence) => {
    // 间隔
    let a = sequence[1] - sequence[0],
        // 第一个值
        b = sequence[0],
        i;
    // 通过间隔累加 可以判断出改数组是否为linear sequence
    for(i = 0; i < sequence.length; ++i){
        if(i * a + b != sequence[i])
            return "Non-linear sequence";
    }
    // 计算表达式 正负操作
    var combinator = a != 0 && b > 0 ? " + " :
                            a != 0 && b < 0 ? " - " : "",
        // 表达式x操作
        varTerm   = a === 1  ? "x" :
                        a === -1 ? "-x":
                            a !== 0  ? a+"x": "",
        // 表达式数值操作
        constTerm = b === 0  ? "" :
                        Math.abs(b);

    return "f(x) = " + varTerm + combinator + constTerm;
};

export default getFunction;