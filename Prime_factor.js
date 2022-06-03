let a = 87;


const f = (x) =>{
    let array = [];
    let sub = [];
    for(let i = 2; i < Math.sqrt(x); i++)
    {
        let count = 0;
        while(x % i === 0)
        {
            x /= i;
            count++;
        }
        if(count !== 0)
        {
            sub = [i, count];
            array.push(sub);
        }
    }
    if(x !== 1)
    {
        sub = [x, 1];
        array.push(sub);
    }
    return array;
}

console.log(f(a));
