import defaultArguments from '../sloutions/defaultArguments/defaultArguments.js';
import {expect,assert} from 'chai';

function add(a,b) { return a+b;};
function addComments( a, // comment,
                      b /* more comments */ ) { return a+b; }
var id = function (_id) { return _id; }
describe('test defaultArguments', function(){
    it("should return equal", function(){
        var add_ = defaultArguments(add,{b:9});
        assert.equal(add_(10), 19, "should return 19");
        assert.equal(add_(10,5), 15, "should return 15");

        var add_ = defaultArguments(add_,{b:3});
        assert.equal(add_(10), 13,"should return 13");

        var addComment_ = defaultArguments(addComments,{b:9});
        assert.equal(addComment_(10), 19, "should return 19");
    });
});