import pascalsTriangle from '../sloutions/pascalsTriangle/pascalsTriangle.js';
import {expect,assert} from 'chai';

describe('test pascalsTriangle', function(){
    it('should equal', function() {
        expect(pascalsTriangle(4)==[1,1,1,1,2,1,1,3,3,1],'pascalsTriangle(4)')
    });
});