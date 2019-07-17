const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var message = generateMessage('Admin', 'Welcome to the app');

        expect(message.from).toBe('Admin');
        expect(message.text).toBe('Welcome to the app');
        expect(message.createdAt).not.toBeNaN();
    });
})