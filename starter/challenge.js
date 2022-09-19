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

// const johnMass = 60;
// const johnHeight = 1.65;

// const markMass = 90;
// const markHeight = 1.45;

// const johnBMI = johnMass/(johnHeight ** 2);
// const markBMI = markMass/(markHeight ** 2);

// if(johnBMI> markBMI){
//     console.log(`johnBMI (${johnBMI}) is higher than markBMI (${johnBMI})`);
// }else{
//     console.log(`markBMI (${markBMI}) is higher than johnBMI (${johnBMI})`);
// }

// Logical operator
// const hasLicense = true; 
// const hasGoodVision = true;
//  console.log(hasLicense && hasGoodVision);
//  console.log(hasLicense || hasGoodVision);
//  console.log(!hasLicense);

//  const shouldDrive = hasLicense && hasGoodVision
//  if(shouldDrive){
//     console.log('Sarah can drive ')
//  }else{
//     console.log('She cant drive..');
//  }

//  const isTired = false;
//  console.log(hasLicense && hasGoodVision && isTired);

//  if(hasLicense && hasGoodVision && !isTired){
//     console.log('Sarah can drive');
//  }else{
//     console.log('Sarah cant drive');
//  }

// Third Challenge 

// const dolphin1 = 1;
// const dolphin2 = 1;
// const dolphin3 = 9;

// const kolas1 = 1;
// const kolas2 = 1;
// const kolas3 = 9;

// const averageScoreDolphin = (dolphin1+dolphin2+dolphin3)/3;
// console.log(averageScoreDolphin);

// const averageScoreKolas = (kolas1+kolas2+kolas3)/3;
// console.log(averageScoreKolas);

// const winner = (averageScoreDolphin > averageScoreKolas);
// if(winner){
//     console.log('Dolphin team is winner')
// }else if(averageScoreKolas> averageScoreDolphin){
//     console.log('Kolas team is winner');
// }else{
//     console.log('There is draw between dolphin and kolas');
// }


//Bonus

// const dolphin1 = 00;
// const dolphin2 = 50;
// const dolphin3 = 90;

// const kolas1 = 10;
// const kolas2 = 10;
// const kolas3 = 00;

// const averageScoreDolphin = (dolphin1+dolphin2+dolphin3)/3;
// console.log(averageScoreDolphin);

// const averageScoreKolas = (kolas1+kolas2+kolas3)/3;
// console.log(averageScoreKolas);

// if(averageScoreDolphin> averageScoreKolas && averageScoreDolphin >=100){
//         console.log('Dolphin team is winner')
//     }else if(averageScoreKolas> averageScoreDolphin && averageScoreKolas >= 100){
//         console.log('Kolas team is winner');
//     }else if (averageScoreDolphin == averageScoreKolas && averageScoreDolphin >=100){
//         console.log('There is draw between dolphin and kolas');
//     }else{
//         console.log('No one wins the trophy');
//     }

// Switch statement

const day = 'monday'

switch(day){
    case 'monday':
        console.log('Plan to code');
        console.log('Play futsal');
        break;
    case 'tuesday':
        console.log('Prepare for presentation');
        break;
    case 'wednesday':
    case'thursday':
        console.log('Chill day');
        break;
        default:
            console.log('No a valid day');
}
if(day === 'monday'){}