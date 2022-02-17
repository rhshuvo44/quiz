//prime number
const number = 6;
if (number == 1) {
    console.log("1 is neither prime nor composite number.");
}else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
        var result=`${number} is a not prime number`;
            break;
        }else{
            var result=`${number} is a prime number`;
        }
    }
    console.log(result);
}else {
    console.log("The number is not a prime number.");
}
///first question ta chilo first 15 odd number addition
var sum = 0;
for (let i = 1; i <= 15; i++) {
if (i%2!=0) {
    sum=sum+i;
}    
}
console.log(sum);
//second question ta chilo first 20 even number multiplication
var sum = 1;
for (let i = 1; i <= 20; i++) {
if (i%2==0) {
    sum=sum*i;
}    
}
console.log(sum);
//third # - 
var first = "# ";
var second = "# - ";
for (let i = 1; i < 10; i++) {
    if (i % 2!=0) {
        first = first * i;
    }else{
        second = second * i;
    } 
}
console.log(second);
