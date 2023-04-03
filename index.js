// add module
const { format } = require('date-fns');

var d = new Date();
console.log(d);
// 포맷변환: 4자리수 년도-2자리수 월-2자리수 일 
var formatedD = format(d, 'yyyy-MM-dd');
console.log(formatedD);

 var hour = d.getHours();
 console.log('hours =', hour);