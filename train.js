// console.log("Jack Ma's advice");
// const list = [
//   "yaxshi talaba boling", //0-20
//   "togri boshliq tanlang va koproq xato qiling", //20-30
//   "ozingizga ishlashingizni boshlang", //30-40
//   "siz kuchli bolgan narsanalarni qiling", //40-50
//   "yoshlarga investiciya qiling", //50-60
//   "endi dam oling, foydasi yoq", //60
// ];

// //a-yosh
// //caalback
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("iltimos yoshingizni kiriting", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(80, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });

// console.log("passed here 1");

//ASYNC function
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("iltimos yoshingizni kiriting");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
//   }
// }

//call via then/catch
// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// console.log("passed here 1");

//ASYNC await
// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

// function countLetter(letter, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetter("e", "engineer"));

const moment = require("moment");
// DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng emas!", null);
//   } else {
//     const c = a % b;
//     callback(null, c);
//   }
// }

// // CALL
// qoldiqliBolish(7, 5, (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     console.log("data:", data);
//     console.log("MANTIQLAR...");
//   }
// });

// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "0" && str[i] <= "9") count++;
//   }
//   return count;
// }
// console.log(countDigits("ad2a54y79wet0sfgb9"));

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   hozirgiVaqt() {
//     return moment().format("HH:mm");
//   }
//   //qoldiq
//   qoldiq() {
//     console.log(
//       `Hozir ${this.hozirgiVaqt()}da ${this.non}ta non, ${
//         this.lagmon
//       }ta lagmon va ${this.cola}ta cola mavjud`
//     );
//   }
//   //sotish
//   sotish(nomi, miqdor) {
//     if (nomi === "non" && this.non >= miqdor) {
//       this.non -= miqdor;
//       console.log(`${miqdor}ta non sotildi.`);
//     } else if (nomi === "lagmon" && this.lagmon >= miqdor) {
//       this.lagmon -= miqdor;
//       console.log(`${miqdor}ta lagmon sotildi.`);
//     } else if (nomi === "cola" && this.cola >= miqdor) {
//       this.cola -= miqdor;
//       console.log(`${miqdor}ta cola sotildi.`);
//     } else {
//       console.log(`Yetarli ${nomi} yo'q yoki nom noto‘g‘ri!`);
//     }
//   }
//   //qabul
//   qabul(nomi, miqdor) {
//     if (nomi === "non") this.non += miqdor;
//     else if (nomi === "lagmon") this.lagmon += miqdor;
//     else if (nomi === "cola") this.cola += miqdor;
//     else return console.log(`${nomi} degan mahsulot yo'q`);

//     console.log(`${miqdor}ta ${nomi} qabul qilindi.`);
//   }
// }

// const shop = new Shop(4, 5, 2);

// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// shop.qoldiq();

function checkContent(str1, str2) {
  if (str1.length !== str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(checkContent("mitgroup", "gmtiprou"));
