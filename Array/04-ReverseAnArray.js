function reverseAnArray(arr){
    let start = 0;
    let end = arr.length-1;
    let temp;

    for(let i =0; i<arr.length/2;i++) {
        temp = arr[i]
        arr[i] = arr[end-i]; 
        arr[end-i] = temp
    }
    console.log(arr);

}

reverseAnArray([1,2,3,4,5,9])