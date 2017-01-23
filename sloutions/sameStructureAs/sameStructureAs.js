/**
 * sameStructureAs
 * @param other
 * Complete the method to return true when its argument is an array
 * that has the same nesting structure as the first array.
 *
 * example:
 *   // should return true
        [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
     // should return false
       [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
 */
Array.prototype._sameStructureAs = function (other) {
    if (!Array.isArray(other)){
        return false;
    }

    let me = this;
    return me.every((item,index)=>{
        if (Array.isArray(item)) {
            return item.sameStructureAs(other[index]);
        }else {
            return other[index];
        }
    })
};
Array.prototype.sameStructureAs = function (other) {
    return (this.length === other.length) ? this.every((el,index)=>{
        return Array.isArray(el) ? el.sameStructureAs(other[index]) : true;
    }): false;
};




