function getNumbers(str) {
    let arr = [];
    arr += str.replace(/(\D)/gi, '');
    return arr.split('');
}
console.log(getNumbers('строка'));
console.log(getNumbers('n1um3ber95'));
