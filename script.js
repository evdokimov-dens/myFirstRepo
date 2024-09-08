let title = "myFirstProject";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 560;
let rollback = 58;
let fullPrice = 5000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов: ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта: ${fullPrice} рублей`);
console.log(screens.toLowerCase().split());
console.log("Процент отката посреднику за работу: " + rollback + "% (" + fullPrice * (rollback / 100) + " рублей)");
