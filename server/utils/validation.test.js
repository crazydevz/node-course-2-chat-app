const expect = require('expect');
const {isRealString} = require('./validation');


describe('isRealString', () => {
    it('shoud reject non-string values', () => {
        expect(isRealString(123)).toBe(false);
    });
    
    it('should reject string with only spaces', () => {
        expect(isRealString('   ')).toBe(false);
    });
    
    it('should allow string with non-space characters', () => {
        expect(isRealString(' lol cool  ')).toBe(true);
    });
});
