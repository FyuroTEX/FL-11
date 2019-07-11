function reverseNumber(num) {
    let point = 10;
    let rezult = '';
    if (num < 0) {
        rezult += '-';
        num *= -1;
    }
    for (let i = 0; i < (num + '').length; i++) {
        rezult += Math.floor((num / Math.pow(point, i)) % 10);
    }
    return Math.floor(rezult);
}
console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));