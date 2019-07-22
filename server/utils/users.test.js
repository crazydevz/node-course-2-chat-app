const expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'John',
            room: 'Avengers'
        }, {
            id: '2',
            name: 'Jacob',
            room: 'Noobs'
        }, {
            id: '3',
            name: 'Stephen',
            room: 'Avengers'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: 123,
            name: 'Talha',
            room: 'Avengers'
        }
        
        users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '3';
        var user = users.removeUser(userId);

        expect(user).toBeDefined();
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '5';
        var user = users.removeUser(userId);

        expect(user).toBeUndefined();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '4';
        var user = users.getUser(userId);

        expect(user).toBeUndefined();
    });

    it('should return names for Avengers', () => {
        var userList = users.getUserList('Avengers');

        expect(userList).toEqual(['John', 'Stephen']);
    });

    it('should return names for Noobs', () => {
        var userList = users.getUserList('Noobs');

        expect(userList).toEqual(['Jacob']);
    });
});