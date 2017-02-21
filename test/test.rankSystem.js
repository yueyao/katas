import User from '../sloutions/rankingsystem/rankSystem.js';
import {expect,assert} from 'chai';

describe('test rankSystem', function(){
    var user = new User();
    user.incProgress(-7)
    it('should equal', function() {
        expect( user.progress ==  10 ,'incProgress(-7) should progress 10')
    });
});
