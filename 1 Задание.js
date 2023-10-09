let value = prompt('Введите значение');
const numberValue = +value

if (typeof numberValue === 'Number' && !isNaN(numberValue)) {
    if (numberValue % 2 === 0) {
        console.log('Введенное число четное.');
    } else {
        console.log('Введенеое число нечетное.');
    }
} else {
    console.log('Упс, кажется вы ошиблись.')
}