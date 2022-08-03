function primeNumbers(n) {
    const array = [];

    let num = 2;
    let count = 0;
    while(count < n) {
        let flag = true;
        for(let i = 2; i<num; i++) {
            if(num%i == 0) {
                flag = false;
                break;
            } 
        }
        if(flag) {
            count +=1;
            array.push(num);
        }
        num = num+1;
    }
    return array;
}

console.log(primeNumbers(10));