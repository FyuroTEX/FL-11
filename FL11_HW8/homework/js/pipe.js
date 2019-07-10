function addOne(x) {
    return x + 1;
}

function pipe(x, ...callback) {
    console.log(callback);
    console.log(callback.length);

    
     for (let i = 0; i < callback.length; i++) {
      return callback[i](x);
       
    }
    
    x += x;  
}
console.log(pipe(1, addOne, addOne, addOne, addOne));