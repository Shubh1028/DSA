function printingSubArray(arr) {
    for(let i =0; i<arr.length; i++){
        for(let j = i; j<arr.length; j++) {
            let arrNew = []
            for(let k = i; k<=j; k++) {
                arrNew.push(arr[k]);
            }
            console.log(arrNew);
        }
    }

}

printingSubArray([1,2,3,4,5])