function chunk(array, size) {
  let output = [];
  for (let i = 0; i < array.length; i += size) {
    console.log(i,size+i);
    output.push(array.slice(i, size + i));
  }
  return output;
}
