


// let dayNumber = Number(prompt("enter a number and learn day name"));
// let dayName;
// switch (dayNumber) {
//     case 1:
//         dayName ="Monday";
//         break;
//     case 2:
//         dayName="Tuesday";
//         break;
//     case 3:
//         dayName="Wednesday";
//         break;
//     case 4:
//         dayName="Thursday";
//         break;
//     case 5:
//         dayName="Friday";
//         break;
//     case 6:
//         dayName="Saturday";
//         break;
//     case 7:
//         dayName="Sunday";
//         break;

//     default:
//         alert("not a valid number for week days.")
//         break;
// }
// console.log(dayName);

let month = prompt("enter a month name and learn order of your month").toLowerCase();
let monthNumber;
switch (month) {
  case "ocak":
    monthNumber = 1;
    break;
  case "şubat":
    monthNumber = 2;
    break;
  case "mart":
    monthNumber = 3;
    break;
  case "nisan":
    monthNumber = 4;
    break;
  case "mayıs":
    monthNumber = 5;
    break;
  case "haziran":
    monthNumber = 6;
    break;
  case "temmuz":
    monthNumber = 7;
    break;
  case "ağustos":
    monthNumber = 8;
    break;
  case "eylül":
    monthNumber = 9;
    break;
  case "ekim":
    monthNumber = 10;
    break;
  case "kasım":
    monthNumber = 11;
    break;
  case "aralık":
    monthNumber = 12;
    break;
  default:
    alert(`its not a valid month name`)
    break;
    }
console.log(monthNumber);