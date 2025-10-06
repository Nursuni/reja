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
// //callback
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

/* A-TASK:

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.

*/

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

/* TASK B

Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
string tarkibidagi sonlar miqdorini qaytarsin

Masalan: countDigits("ad2a54y79wet0sfgb9")
Yuqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi */

// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "0" && str[i] <= "9") count++;
//   }
//   return count;
// }
// console.log(countDigits("ad2a54y79wet0sfgb9"));

/* TASK-C

Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
Hamda classning quyidagdek 3'ta metodi bo'lsin:
1) qoldiq 2) sotish 3) qabul
Har bir metod ishga tushgan vaqtda log qilinsin

MASALAN:
const shop = new Shop(4, 5, 2)
shop.qoldiq();
natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud! */

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

/* TASK D

Ikkita parametra ega function tuzing, va functioning
berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq
mos kelsa true qiymat qaytarsin

Masalan: checkContent("mitgroup", "gmtiprou");
Yuqoridagi misolda birinchi va ikkinchi parametr qiymatli bir xil
ya'ni bir xil harflar qatnashganligi uchun true qiymat qaytaradi. */

function checkContent(str1, str2) {
  if (str1.length !== str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(checkContent("mitgroup", "gmtiprou"));

/*E-TASK:

Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh" */

function getReverse(str) {
  return Array.from(str).reverse().join("");
}
console.log(getReverse("hello"));
console.log(getReverse("nora"));

/* Task F
Yagona string argumentga ega findDoublers nomli function tuzing
Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
true yokida false natija qaytarsin.

MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!
*/

function findDoublers(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(findDoublers("hello")); // true
console.log(findDoublers("world")); // false
console.log(findDoublers("nora")); // false
console.log(findDoublers("devex")); // false
