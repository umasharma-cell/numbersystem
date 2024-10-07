const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  
  let primeArray = [];

for(let i = 0 ; i< numbers.length ; i++){
    let count =0;
    for(let j = 1 ; j <= numbers[i] ; j++){
        if(numbers[i] % j == 0){
            count++;
        }
    }

    if(count == 2){
        primeArray.push(numbers[i]);
        console.log(numbers[i] ,"is a prime number ");
    }else{
        console.log(numbers[i], "its not a prime number ")
    }
    
}

console.log("this the new array containing all the prime numbers inside it : ",primeArray);

let new_array = primeArray.sort((a,b)=> a - b);

let minimum = new_array.slice(0,1);
let maximum = new_array.slice(-1);

let sum = 0;
for(let i = 0 ; i < new_array.length ; i++){
    sum = sum + new_array[i];
}

console.log(minimum , "is the minimum number ");
console.log(maximum , "is the maximum number");
console.log(sum , "it is the sum of all the array elements present inside the array");
