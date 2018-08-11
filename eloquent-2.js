// Exercises
// 1. Looping a triangle
// My solution for 1 
for(var i='#'; i<'########'; i+='#'){
    console.log(i);
}
// 2. FizzBuzz
var test = ""
var x;
for(x = 0; x <100; x++){
    if( x%3 == 0 && x%5 ==0){
    test = "FizzBuzz";
    }else if(x%5 ==0){
    test = "Buzz";
    }else if (x%3 == 0){
    test = "Fizz";
    }
    else {
    test = x;
    }
    console.log(test);
    }
// 3. Chessboard
var test =""
var size =8;
var i;
var j;
for(i=0; i<size; i++){
for(j=0; j<size; j++){
  if((i+j) %2 === 0){
  test += " " + "# # # #" + "\n";
} else {
  test += "# # # #" + " " + "\n";
} 
}
console.log(test);
break;
}