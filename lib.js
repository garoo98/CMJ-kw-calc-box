function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    if (num <= 1)   return false;
    else if (num <= 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;
    for(let i = 5; i*i<=num; i+=6)
    {
        if(num % i === 0 || num % (i+2) === 0) return false;
    }

    return true;
}

function fact(num) { 
    if(num === 1) return 1;
    
    return num*fact(num-1);
}

module.exports = {
    avg,
    prime,
    fact
}