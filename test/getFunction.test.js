import getFunction from '../sloutions/getFunction/getFunction.js';
import {expect,assert} from 'chai';

describe('test pascalsTriangle', function(){
    it('should equal', function() {
        expect(getFunction([0, 1, 2, 3, 4]) == "f(x) = x",'getFunction([0, 1, 2, 3, 4])')
    });
});