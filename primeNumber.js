
function primeNumbers(n) {
    const l = [2];
    i = 3;
    while (l.length != n) {
        if (i % 2 !==0) {
            l.push(i);
            i += 2;
        }  
    }
    return l;   
}

console.time()
console.log(primeNumbers(+process.argv[2]));
console.timeEnd();