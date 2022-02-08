//3.1 flattening(list)

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]



//3.2 loop(value,test,update,body)
// Your code here.
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

//3.3 everyLoop(array, test)
//3.4 everySome(array, test)
(function everyLoop(array, test) 
{
  // Your code here.
}

(function everySome(array, test) 
{
// Your code here.
}

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true