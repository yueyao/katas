/**
 *  sqInRect   矩形切割成为多个正方形 给出边长组合
 * @param lng
 * @param wdth
 *
 *
 * https://www.codewars.com/kata/rectangle-into-squares/train/javascript
 *The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).
 *
 *Can you translate this drawing into an algorithm?

 You will be given two dimensions

 a positive integer length (parameter named lng)
 a positive integer width (parameter named wdth)
 You will return an array with the size of each of the squares.

 sqInRect(5, 3) should return [3, 2, 1, 1]
 sqInRect(3, 5) should return [3, 2, 1, 1]

 *
 */
const sqInRect = (lng, wdth) => {
    if (lng == wdth) {
        return null;
    }

    var list = new Array();

    while (lng > 0 && wdth > 0) {

        if (lng < wdth) {
            list.push(lng);
            wdth = wdth - lng;
        }
        else {
            list.push(wdth);
            lng = lng - wdth;
        }
    }

    return list;
};

export default sqInRect;