/** Problem 01 -*/
var area = 100 ;
const divideArea = area/2;
const result = divideArea;
console .log(result);


/** Problem 02 -*/
var money = 11000;
if(money >= 25000){
    console .log('Laptop')
}
else if(money >= 10000){
    console .log('Cycle')
}
else{
    console .log('Chocolate')
}


/** Problem 03 -*/
let lastDay = 1;
var sum = 0;

while(lastDay <= 2){
    sum = sum + lastDay;
    console . log('-rest');
    lastDay++;
    }
    console .log('-medicine day')

  /** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
function check(fileName) {
    if (fileName.startsWith('#') || fileName.endsWith('.pdf') || fileName.endsWith('.docx')) {
        return 'Store';
    } else {
        return 'Delete';
    }
}
console.log(check(fileName));

/** Problem 05 -*/

    