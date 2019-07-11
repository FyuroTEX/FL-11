// console.log((123 /100) % 10);
function reverseNumber(num) {
    let point = 10;
    let rezult = '';
    console.log();
    for (let i = 0; i < (num+='').length; i++) {
        rezult += Math.floor((num / Math.pow(point,i)) % 10);
        console.log(rezult);
}
    return rezult;

}
console.log(reverseNumber(1000));
