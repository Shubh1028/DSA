/*Input:-

[1,2,3,4,5]

Output:-

1

12

123

1234

12345

2

23

234

2345

3

34

345

4

45

5 */

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