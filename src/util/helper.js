// const date = new Date();

// const monthsArr = [ 'January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

// const month = monthsArr[date.getMonth()];

// const batchName = 'californium';
// const week = 'W3';
// const day = 'D4';
// const topic = 'Nodejs module system';

// const getBatchInfo = function ( ) {
//     return batchName + ' ' + week + ' ' + day + ' the topic of today is ' + topic ;
// }

function getBatchInfo() {
  return "Batch Name: Californium, W3D4, the topic for today is Nodejs module system’";
}
const date = new Date();
const monthsArr = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = monthsArr[date.getMonth()];

// const month = date.getMonth();

module.exports.date = date;

module.exports.Month = month;

module.exports.batchInfo = getBatchInfo();
