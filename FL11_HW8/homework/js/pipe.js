function addOne(x) {
    return x + 1;
}
function pipe(x, ...callback) {
    let arg = x;
    for (let i = 0; i < callback.length; i++) {
        arg = callback[i](arg);

    }
    return arg;
}
console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));

