/**
 * Created by hebo on 2018/8/13.
 */
/**
 *
 * @param puzzle
 *
 *  https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript
 * var puzzle = [
 [5,3,0,0,7,0,0,0,0],
 [6,0,0,1,9,5,0,0,0],
 [0,9,8,0,0,0,0,6,0],
 [8,0,0,0,6,0,0,0,3],
 [4,0,0,8,0,3,0,0,1],
 [7,0,0,0,2,0,0,0,6],
 [0,6,0,0,0,0,2,8,0],
 [0,0,0,4,1,9,0,0,5],
 [0,0,0,0,8,0,0,7,9]];

 sudoku(puzzle);
 /* Should return
 [[5,3,4,6,7,8,9,1,2],
 [6,7,2,1,9,5,3,4,8],
 [1,9,8,3,4,2,5,6,7],
 [8,5,9,7,6,1,4,2,3],
 [4,2,6,8,5,3,7,9,1],
 [7,1,3,9,2,4,8,5,6],
 [9,6,1,5,3,7,2,8,4],
 [2,8,7,4,1,9,6,3,5],
 [3,4,5,2,8,6,1,7,9]]
 */
function sudoku(puzzle) {
    //return the solved puzzle as a 2d array of 9 x 9
    let p = [];
    p = p.concat(puzzle);
    let size = p.length;
    let temp = new Array(size).fill(0).map((e, i) => i + 1);
    let unFilled = 0;
    // 获取一行
    function getRow(row, p) {
        return p[row];
    }

    // 获取一列
    function getCol(col, p) {
        let c = [];
        p.forEach(row => {
            c.push(row[col])
        });
        return c;
    }

    // 获取该组数据可能的值
    function getUnFilled(dataSet, dataSet2, dataSet3) {
        let exist = [];
        let existItem = dataSet;
        existItem = existItem.concat(dataSet2)
        existItem = existItem.concat(dataSet3)
        return temp.filter(f => !existItem.includes(f))
    }

    // 通过坐标来判断这个位置可能的值
    function getAnswer(row, col, p) {
        let r = getRow(row, p);
        let c = getCol(col, p);
        let min9 = get9(row, col, p);
        let u = getUnFilled(r, c, min9);
        return u;
    }

    // 通过位置获取其九宫格数据
    function get9(row, col, p) {
        let c = [];
        let rr = matchRange(row);
        let cr = matchRange(col);
        rr.forEach((rIndex) => {
            p[rIndex].forEach((citem, cIndex) => {
                if (cr.includes(cIndex)) {
                    c.push(citem)
                }
            })
        });
        return c;
        function matchRange(rowOrCol) {
            if (rowOrCol > 5) {
                return [6, 7, 8]
            } else if (rowOrCol > 2) {
                return [3, 4, 5]
            }
            return [0, 1, 2]
        }
    }

    function getPosMaybes(p) {
        let posCache = {};
        p.forEach((row, rIndex) => {
            row.forEach((item, cIndex) => {
                if (unFilled === item) {
                    let maybe = getAnswer(rIndex, cIndex, p);
                    if (maybe.length) {
                        posCache[rIndex + '/' + cIndex] = maybe;
                    }
                }
            })
        });
        return posCache;
    }

    function checkFull(p) {
        let isFulled = true;
        p.forEach(r => {
            r.forEach(c => {
                if (c === unFilled) {
                    isFulled = false;
                }
            })
        });
        return isFulled;
    }

    let filledPos = {};
    // 开始填充数独
    function filled(p) {
        let posArrs = getPosMaybes(p);
        // 获取只有一个可填充值的位置
        let resultOne = [];
        for (let pos in posArrs) {
            if (posArrs[pos].length === 1) {
                resultOne.push(pos);
            }
        }
        if (!resultOne.length) {
            return p;
        }
        resultOne.forEach(pos => {
            let poss = pos.split('/').map(i => Number(i));
            if (!filledPos[pos] && p[poss[0]][poss[1]] == unFilled) {
                p[poss[0]][poss[1]] = posArrs[pos][0];
                filledPos[pos] = true;
            }
        });

        if (checkFull(p)) {
            return p;
        }
        // 填充完以后 重新计算
        return filled(p);
    }

    return filled(p);
}
var puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]];


let r = sudoku(puzzle);

console.log(r);

