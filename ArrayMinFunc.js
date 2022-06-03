function test(f) {
    console.log([1, 2, 3, 4, 5], '=> 期待される値:', 1,'結果:', f([1, 2, 3, 4, 5]))
    console.log([3, 10, -5], '=> 期待される値:', -5, '結果:', f([3, 10, -5]))
    console.log([1], '=> 期待される値:', 1, '結果:', f([1]))
}

const f = (x) => {
    let min = 10000;
    for(let i = 0; i < x.length; i++)
    {
        if(min > x[i])
        {
            min = x[i];
        }
    }
    return min;
}
test(f);