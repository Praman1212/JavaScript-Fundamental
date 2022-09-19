//First challenge

// const ageMark = 78;
// const heightMark = 1.69;
// const ageJohn = 92;
// const heightJohn = 1.95;

// const markBMI = ageMark/(heightMark ** 2);
// console.log(markBMI); 

// const johnBMI = ageJohn/(heightJohn ** 2);
// console.log(johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI,'>',johnBMI,'=',markHigherBMI); 
// const firstName = 'Jonas'
// const job = 'teacher'
// const birthYear = 1990;
// const year = 2022;
// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job +' !';
// console.log(jonas)

// const jonasNew = `I'm ${firstName}, a ${(year - birthYear)} years old ${job} !`;
// console.log(jonasNew);

// // Multiple line string 
// console.log('Im \n\
// Praman \n\
// Ghimire');

// console.log(`I am 
// Praman
// Ghimire`);
// condition
// const age = 15;
// const isAge = age >=18;

// if(isAge){
//     console.log('Ram can start driving')
// }else{
//     const year = 18 - age;
//     console.log(`Ram has ${year} left to get driving license`)
// }

const johnMass = 60;
const johnHeight = 1.65;

const markMass = 90;
const markHeight = 1.45;

const johnBMI = johnMass/(johnHeight ** 2);
const markBMI = markMass/(markHeight ** 2);

if(johnBMI> markBMI){
    console.log(`johnBMI (${johnBMI}) is higher than markBMI (${johnBMI})`);
}else{
    console.log(`markBMI (${markBMI}) is higher than johnBMI (${johnBMI})`);
}