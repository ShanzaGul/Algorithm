function cool(str){
  var a = str.split(" ");
  var newArray = [];
  for(let i = 0 ; i < a.length ; i++)
  {
    let part1 = a[i].charAt(0).toUpperCase();
    let part2 = a[i].slice(1,a[i].length);
    newArray[i] = part1.concat(part2);
  }
 return newArray.join(" ");
}
