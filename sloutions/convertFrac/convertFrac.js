/**
 * convertFrac
 * @param lst   [ [numer_1, denom_1] , ... [numer_n, denom_n] ]
 * @results lst [ [N_1, D] ... [N_n, D] ]
 *
 *  N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
 *
 *  [ [1, 2], [1, 3], [1, 4] , [1,5] = (6,12)(4,12)(3,12)
 */
// 求最大公约数
const maximumCommonDivisor = (m,n) => {
    while(m%n!==0) {
        var temp = m % n;
        m = n;
        n = temp;
    }
    return n;
};

const leastCommonMultiple = (m,n) => {
    return m * n / maximumCommonDivisor(m,n);
};

const convertFrac = lst => {
    //Your code here
    let mul = 0;
    for(let i=0;i<lst.length-1;i++) {
        mul = leastCommonMultiple(lst[i][1],lst[i+1][1]);
    }
    let result = lst.map(k=>{
        return `(${mul/k[1]},${mul})`
    });
    return result.join('')
};

export default convertFrac;
