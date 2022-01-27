
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
if(typeof(matrix) == 'undefined'){
    result.push([]);
}else{
    matrix.map(function(key, index) {
        if((index + 1) % 2 == 0){
            result.push(key.reverse());
        }else{
            result.push(key);
         }
    });
}
  return result.flat();
}
