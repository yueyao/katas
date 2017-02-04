import Dictionary from '../sloutions/Dictionary/Dictionary.js';
import {expect,assert} from 'chai';


function TestDictionary(spec) {
    var matcher = new Dictionary(spec.words);
    spec.expectations.forEach(function (e) {
        assert.equal(matcher.findMostSimilar(e.query), e.nearest);
    });
}

describe('test Dictionary', function(){
    it('should findMostSimilar equal', function() {
        TestDictionary({
            words: ['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry'],
            expectations: [
                { query:   'strawbery',
                    nearest: 'strawberry'
                },
                { query:   'berry',
                    nearest: 'cherry'
                }
            ],
        });
    })

});

