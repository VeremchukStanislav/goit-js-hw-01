//Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
//Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.Обязательно используй switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.
//Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.
//Ниже приведен список стран и стоимость доставки.
//Китай - 100 кредитов
//Чили - 250 кредитов
//Австралия - 170 кредитов
//Индия - 80 кредитов
//Ямайка - 120 кредитов
const orderPieces = 0;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice = orderPieces * pricePerDroid; // Write code on this line
let balanceCredit = credits - totalPrice; // Write code on this line
let message;

if (orderPieces === null) {
  message = "Отменено пользователем!";
} else if (totalPrice < credits) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
}
if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
}
// Write code under this line
console.log(message);
