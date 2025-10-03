// 1. Faqat musbat sonlar
function musbatlar(arr) {
  return arr.filter(x => x > 0);
}

// 2. 18 yoshdan kattalar
function kattaYoshlar(users) {
  return users.filter(u => u.age >= 18);
}

// 3. Juft sonlar
function juftSonlar(arr) {
  return arr.filter(x => x % 2 === 0);
}

// 4. Bo‘sh stringlarni olib tashlash
function boshStringOchir(arr) {
  return arr.filter(str => str !== "");
}

// 5. Narxi 100 dan katta mahsulotlar
function qimmatMahsulotlar(products) {
  return products.filter(p => p.price > 100);
}

// 1. Har bir sonni kvadratga ko‘paytiring
function kvadrat(arr) {
  return arr.map(x => x * x);
}

// 2. Harflarni katta shaklga o‘tkazing
function kattaHarf(arr) {
  return arr.map(str => str.toUpperCase());
}

// 3. Faqat ismlarni qaytaring
function faqatIsmlar(users) {
  return users.map(u => u.name);
}

// 4. Har bir sonni 2 ga ko‘paytiring
function ikkiHissa(arr) {
  return arr.map(x => x * 2);
}

// 5. Narxlarni "so'm" qo‘shimchasi bilan qaytaring
function narxSom(arr) {
  return arr.map(n => n + " so'm");
}

// 1. Barcha elementlarni chiqaring
function chiqar(arr) {
  arr.forEach(x => console.log(x));
}

// 2. Har bir ismga “Salom” qo‘shib chiqaring
function salomBer(ismlar) {
  ismlar.forEach(name => console.log("Salom, " + name));
}

// 3. Sonlar yig‘indisini hisoblash
function yigindi(arr) {
  let sum = 0;
  arr.forEach(x => sum += x);
  return sum;
}

// 4. Har bir so‘zning uzunligi
function uzunlik(arr) {
  arr.forEach(word => console.log(word.length));
}

// 5. Mahsulotlarning nomlari
function mahsulotNomi(products) {
  products.forEach(p => console.log(p.name));
}

// 1. Sonlar yig‘indisi
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

// 2. Eng katta son
function max(arr) {
  return arr.reduce((a, b) => a > b ? a : b);
}

// 3. So‘zlarni jumlaga qo‘shish
function jumla(arr) {
  return arr.reduce((a, b) => a + " " + b);
}

// 4. Sonlarning ko‘paytmasi
function kopaytma(arr) {
  return arr.reduce((a, b) => a * b, 1);
}

// 5. Umumiy yosh
function umumiyYosh(users) {
  return users.reduce((sum, u) => sum + u.age, 0);
}

// ====================== FIND ======================
// 1. Birinchi juft son
function birinchiJuft(arr) {
  return arr.find(x => x % 2 === 0);
}

// 2. Birinchi 18+ odam
function birinchiKatta(users) {
  return users.find(u => u.age >= 18);
}

// 3. Birinchi manfiy son
function birinchiManfiy(arr) {
  return arr.find(x => x < 0);
}

// 4. "Vali" ismini topish
function topVali(arr) {
  return arr.find(name => name === "Vali");
}

// 5. Narxi 200 dan katta birinchi mahsulot
function qimmatMahsulot(products) {
  return products.find(p => p.price > 200);
}

// 1. Birinchi juft son indexi
function juftIndex(arr) {
  return arr.findIndex(x => x % 2 === 0);
}

// 2. 18 yoshdan katta odam indexi
function kattaIndex(users) {
  return users.findIndex(u => u.age >= 18);
}

// 3. Birinchi manfiy son indexi
function manfiyIndex(arr) {
  return arr.findIndex(x => x < 0);
}

// 4. "Hasan" indexi
function hasanIndex(arr) {
  return arr.findIndex(name => name === "Hasan");
}

// 5. Narxi 100 dan katta mahsulot indexi
function mahsulotIndex(products) {
  return products.findIndex(p => p.price > 100);
}

// 1. Juft son bormi?
function juftBormi(arr) {
  return arr.some(x => x % 2 === 0);
}

// 2. 18 yoshdan katta bormi?
function kattaBormi(users) {
  return users.some(u => u.age >= 18);
}

// 3. Manfiy son bormi?
function manfiyBormi(arr) {
  return arr.some(x => x < 0);
}

// 4. Bo‘sh string bormi?
function boshBormi(arr) {
  return arr.some(str => str === "");
}

// 5. Narxi 500 dan katta mahsulot bormi?
function qimmatBormi(products) {
  return products.some(p => p.price > 500);
}

// 1. Barcha sonlar musbatmi?
function musbatmi(arr) {
  return arr.every(x => x > 0);
}

// 2. Barcha foydalanuvchilar 18+mi?
function hammaKatta(users) {
  return users.every(u => u.age >= 18);
}

// 3. Barcha sonlar juftmi?
function hammaJuftmi(arr) {
  return arr.every(x => x % 2 === 0);
}

// 4. Barcha so‘zlar bo‘sh emasmi?
function boshEmasmi(arr) {
  return arr.every(str => str !== "");
}

// 5. Barcha mahsulotlar narxi 50+mi?
function narx50plus(products) {
  return products.every(p => p.price > 50);
}
