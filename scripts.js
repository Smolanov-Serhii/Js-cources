let num = 266219;
let digits = [];
let multiple = 1;
while (num > 0) {
    digits.push(num % 10);
    num = parseInt(num / 10);
}
digits.reverse().forEach(function(item, index, array) {
    multiple = multiple * item;
    console.log(item);
});
console.log('Произведение цифр = ' + multiple);
multiple = multiple**3;
console.log('Куб произведение цифр = ' + multiple);
console.log('Первые 2 цифры полученного числа = ' + String(multiple).slice(0,2));

