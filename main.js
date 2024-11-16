let userName = String(prompt("Введите ваше имя"));
alert("Привет," + userName);
let a = Number(prompt("Введите год вашего рождения"));
const b = 2024;
alert("Вам" + (b - a));
let с = Number(prompt("Укажите длину стороны квадрата в сантиметрах"));
alert("Периметр такого квадрата в сантиметрах =" + (с * 4));
let d = Number(prompt("Укажите радиус окружности в сантиметрах"));
alert("Площадь такой окружности в квадратных сантиметрах =" + Math.round((d * d * Math.PI) * 10) / 10);
let s = Number(prompt("Укажите расстояние между двумя городами в км"));
let t = Number(prompt("За сколько часов хотели бы в этот город добраться"));
alert("Ваша скорость передвижения =" + Math.round((s / t) * 10) / 10);
let m = Number(prompt("Укажите сумму в долларах"));
const u = 0.94;
alert("Сумма в евро =" + m * u);
let g = Number(prompt("Укажите размер флешкив Гб"));
alert("Колличество файлов размером 820Мб =" + Math.floor(g * 1024 / 820));
let k = Number(prompt("Сумма денег в кошельке в рублях"));
let h = Number(prompt("Стоимость одной шоколадки в рублях"));
alert('Колличество шоколадок = ' + Math.floor(k / h) + ' сдача в рублях = ' + Math.round((k - Math.floor(k / h) * h) * 10) / 10);
let l = Number(prompt("Введите трехзначное число"));
let result = 0;
while (l > 0) {
    result = result * 10 + l % 10;
    l = Math.floor(l / 10);
}
alert('Результат = ' + result);
let num = Number(prompt("Введите любое целое число"));
while (num % 2 === 0) {
    alert('Четное')
    break;
}
while (num % 2 !== 0) {
    alert('Нечетное')
    break;
};

