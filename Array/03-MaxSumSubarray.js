/*Input:-

[5,2,-4,-5, 3,-1,2,3,1]

Output:-

8

Reason :- 3,-1,2,3,1 is the maximum subarray possible.  */

function printingSubArray(arr) {
    let maxSum=arr[0];
    for(let i =0; i<arr.length; i++){
        for(let j = i; j<arr.length; j++) {
            let arrNew = [];
            let sum = 0;
            for(let k = i; k<=j; k++) {
                arrNew.push(arr[k]);
                sum += arr[k];
            }
            if(sum>maxSum){
                maxSum = sum;
            }
        }
    }
    console.log(maxSum);

}

printingSubArray([5,2,-4,-5, 3,-1,2,3,1])