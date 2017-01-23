import * as ARRAY from '../sloutions/sameStructureAs/sameStructureAs.js';
import {expect,assert} from 'chai';

describe('test sameStructureAs', function(){
    it("should return true", function(){
        assert.equal([ 1, 1, 1 ].sameStructureAs([2,2,2]), true,
            "[ 1, 1, 1 ].sameStructureAs([2,2,2])");

        assert.equal([ 2, [ 2, 2 ] ].sameStructureAs([ 2, [ 2, 2 ] ]), true,
            "[ 2, [ 2, 2 ] ].sameStructureAs([ 2, [ 2, 2 ] ])");

        assert.notEqual([ 1, [ 1, 1 ] ].sameStructureAs([ 2, [ 2 ] ]), true,
            "[[[],[]]].sameStructureAs([[1,1]])");

        assert.notEqual([[[],[]]].sameStructureAs( [[1,1]]), true,
            "[[[],[]]].sameStructureAs([[1,1]])");
    });
});