import convertFrac from '../sloutions/convertFrac/convertFrac.js';
import {expect,assert} from 'chai';

describe('test convertFrac', function(){
    it('should return matched', function() {
        assert.equal(convertFrac([ [1, 2], [1, 3], [1, 4] ]),
            '(6,12)(4,12)(3,12)', 'convertFrac([ [1, 2], [1, 3], [1, 4] ])');
    });
});
