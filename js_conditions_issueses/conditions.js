//**** */ "q" */
// let enterGrade;
// enterGrade = prompt("enter a student grade(0-100) : ");
// while (
//   enterGrade == "Q" ||
//   enterGrade == "q" ||
//   (enterGrade > 0 && enterGrade < 100)
// ) {
//   if (enterGrade < 0 || enterGrade > 100) {
//     console.log("Girdiğiniz not 0-100 arası olmalıdır");
//   } else if (enterGrade == "Q" || enterGrade == "q") {
//     console.log("quiting...");
//     break;
//   } else {
//     console.log(`Grade-${enterGrade}`);
//   }
//   enterGrade = prompt("enter a student grade(0-100) : ");
// }

// //*? prime number*////

// var sum = 0;
// for (var i = 3; i < 7; i++) {
// sum += i;
// if (i ===3 || sum > 10) {
// continue;
// }
// console.log(i);
// }
// //*? convertor*////
//   function celsiusCevir(x) {
//     return   (x - 32)/(1.8);
//   }
//   alert(celsiusCevir);

// function frk(parameter1,parameter2){
// return parameter1 * parameter2;
// }
// alert(frk(3,4));
// const num = function (a, b) {
//   return a * b;
// };
// console.log(num(5, 7));

//**if statement */
//? pseudo code;
// -take grade notes from user by prompt +
//  statement1(not 0-100 arasında olmalı) aksi halde hata mesajı verilecek
//  statement 1
// (0-25 arası FF ,
// 26-45 arası DD,
// 46-65 arası CC,
// 66- 75 arası BB,
// 76-90 arası BA,
// 91-100 arası AA)
//
// let not = Number(prompt(`please enter grades:`));
// if ( not < 0 || not > 100) {
//   console.log(`its not a valid grades`);
//   not = Number(prompt(`please enter grades:`));
// } else if (91 <= not) {
//   console.log(`AA`);
// } else if (76 <= not) {
//   console.log(`BA`);
// } else if (66 <= not) {
//   console.log(`BB`);
// } else if (46 <= not) {
//   console.log(`CC`);
// } else if (26 <= not) {
//   console.log(`DD`);
// } else {
//   console.log(`FF`);
// }
