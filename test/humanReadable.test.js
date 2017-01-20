import humanReadable from '../sloutions/humanReadable/humanReadable.js';
import {expect,assert} from 'chai';

describe('test humanReadable', function(){
    it('should format correctly', function() {
        assert.equal(humanReadable(0), '00:00:00', 'humanReadable(0)');
        assert.equal(humanReadable(5), '00:00:05', 'humanReadable(5)');
        assert.equal(humanReadable(60), '00:01:00', 'humanReadable(60)');
        assert.equal(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
        assert.equal(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
        assert.equal(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
    });
});