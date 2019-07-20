const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Admin';
        var text = "Welcome to the app";
        
        var message = generateMessage(from, text);

        expect(message.from).toBe('Admin');
        expect(message.text).toBe('Welcome to the app');
        expect(message.createdAt).not.toBeNaN();
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location message', () => {
        var from = 'Admin';
        var location = {
            latitude: 1,
            longitude: 2
        }

        var locationMessage = generateLocationMessage(from, location.latitude, location.longitude);

        expect(locationMessage.from).toBe(from);
        expect(locationMessage.url).toBe('https://www.google.com/maps?1,2');
        expect(locationMessage.createdAt).not.toBeNaN();
    });
});