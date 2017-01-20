/**
 *
 *  pascalsTriangle
 *
 * @param n
 *
 * http://en.wikipedia.org/wiki/Pascal's_triangle
 *
 * Write a function that, given a depth (n),
 * returns a single-dimensional array representing Pascal's Triangle to the n-th level.
 * forExample:
 * pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]
 */
const pascalsTriangle = n => {
    let arr = Array(n).fill().map((_,i)=>Array(i+1).fill(1));
    for(let index =1; index<n;index++){
        for(let i=0;i<arr[index].length;i++){
            if (arr[index+1]){
                arr[index+1][i] = (arr[index][i]||0)+ (arr[index][i-1]||0)
            }
        }
    }
    return arr.reduceRight((prev,current)=>prev.concat(current)).reverse();
};
const pascalsTriangle2 = n => {
    var pascal = [];
    var idx = 0;

    for(var i = 0; i<n ;i++){//遍历每一层
        idx = pascal.length -i; //下边遍历时 idx并不变
        for(var j = 0 ;j< i+1;j ++){ //这是具体到每一行，每一行的长度是当前行号（0开始）+1
            if(j ===0 || j ==i){  //每一行第一个或最后一个都是1
                pascal.push(1);
            }else{
                pascal.push(pascal[idx + j] + pascal[idx + j -1]);
            }
        }
    }

    return pascal
};
export default pascalsTriangle;