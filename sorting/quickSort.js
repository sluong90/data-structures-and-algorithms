
const quickSort = arr => {
    const pivot = arr[0];
    const left = [];
    const right = [];
   
    if(arr.length <=1){
        return arr;
    }
    
for(var i=1; i<arr.length; i++){
        if(arr[i] <= pivot)
            left.push(arr[i]);
        if(arr[i] > pivot)
            right.push(arr[i]);
        }
    
    return quickSort(left).concat(pivot, quickSort(right))
}

module.exports = quickSort;