let cardNumber = prompt("Введите номер вашей карты:");

let nextHalfOfNumber = cardNumber.slice(-4)

initialOfNumber=cardNumber.slice(0,-4);

stars="*";

starsOfHalfNumber=stars.repeat(initialOfNumber.length);

result=starsOfHalfNumber+nextHalfOfNumber;

alert("Номер вашей карты: "+result);