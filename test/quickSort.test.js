const quickSort = require('../sorting/quickSort.js');
var arr = [1,2,3,4,5,6,7,8];

if(arr.join('') == quickSort([7,2,4,8,3,5,6,1]).join('')){
    console.log('YAY', quickSort(arr))
}else{
    console.log('SORRY!')
}