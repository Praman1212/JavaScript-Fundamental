//First challenge

const ageMark = 78;
const heightMark = 1.69;
const ageJohn = 92;
const heightJohn = 1.95;

const markBMI = ageMark/(heightMark ** 2);
console.log(markBMI); 

const johnBMI = ageJohn/(heightJohn ** 2);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI,'>',johnBMI,'=',markHigherBMI); 