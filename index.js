function mergeSort(arr) {
    let arr1;
    let arr2;
    let sortedArr = [];
    if (arr.length <= 1) {
        arr1 = arr;
        return arr;
    } else if (arr.length > 2) {
        if (arr.length % 2 == 0) { //even num
            arr1 = arr.slice(0, arr.length / 2);
        } else { //odd num 
            arr1 = arr.slice(0, Math.floor(arr.length / 2));

        }
        arr2 = arr.slice(arr1.length, arr.length);
        mergeSort(arr1); //left part
        mergeSort(arr2); // right part
    } else { // if arr length is 2
        arr = arr.sort((a, b) => a - b); //sort
        return arr;
    }
   
    sortedArr = [...arr1, ...arr2]; //
    sortedArr.sort((a, b) => a - b); //sort 
   
    return sortedArr;
}

// console.log(mergeSort([9, 4, 3, 1, 7, 2, 8, 12, 23, 42, 55, 14]));