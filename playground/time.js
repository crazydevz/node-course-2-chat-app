const moment = require('moment');


var timeStamp = moment().valueOf();
var date = moment(timeStamp);

console.log('timeStamp: ', timeStamp);

console.log(date.format('MMMM Do, YYYY'));
console.log(date.format('h:mm a'));