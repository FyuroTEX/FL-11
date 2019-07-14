function getNumbers(str) {
    let arr = [];
    arr += str.replace(/(\D)/gi, '');
    return arr.split('');
}
console.log(getNumbers('строка'));
console.log(getNumbers('n1um3ber95'));

function findTypes(...item) {
    let types = {};
    item.forEach( i => {
        if (types.hasOwnProperty(typeof i)) {
            types[typeof i] += 1;
        } else {
            types[typeof i] = 1;
        }

    });
    return types;
}
console.log(findTypes(null, 5, 'hello', 45, 'brom'));
                  