function test(f) {
    console.log(1)
    f(1)
    console.log(8)
    f(8)
}

const f = (x) =>{
    for(let i = 0; i < x; i++)
    {
        console.log('Hello World!');
    }
}

test(f);