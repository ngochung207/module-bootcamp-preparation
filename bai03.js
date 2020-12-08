// Viết hàm isFibonacci() nhận vào một số nguyên ,
// trả về true nếu số đó là số nằm trong dãy Fibonacci
// và false nếu không nằm trong dãy Fibonacci.

function fibonacci(number){
    if(number < 1) {
        return 1;
    } else {
        return fibonacci(number-1) + fibonacci(number -2)
    }
}
function showFibonacci(number) {
    let arr = [1];
    for (let i = 1; i <= number; i++) {
        arr.push(fibonacci(i));
    }
    return arr;
}

function isFibonacci(number){
    let arr = showFibonacci(number);
    let check = arr.includes(number);
    return check ? true: false;
}






