function cool(n){

  return (n%3==0 && n%5==0) ? console.log("fizzbuzz")
         : (n%3==0) ? console.log("fizz")
         : (n%5==0) ? console.log("buzz")
         : n;
}
