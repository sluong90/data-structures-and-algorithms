const bubbleSort = require('../sorting/bubblesort.js');
// console.log(bubbleSort([2,1,7]));
var arr = [1,2,3,5]
if(arr.join('') == bubbleSort([5,1,3,2]).join('')){
    console.log('YAY', bubbleSort(arr))
}else{
    console.log('SORRY!')
}



    


