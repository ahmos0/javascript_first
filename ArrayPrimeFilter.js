function test(f) {
    console.log([2, 3, 4, 5, 6, 7], "=> 期待される値:", [2, 3, 5, 7], ", 結果:", f([2, 3, 4, 5, 6, 7]))
    console.log([4, 8, 16, 32], "=> 期待される値:", [], ", 結果:", f([4, 8, 16, 32]))
    console.log([2, 11, 19, 23, 71], "=> 期待される値:", [2, 11, 19, 23, 71], ", 結果:", f([2, 11, 19, 23, 71]))
  
}

const f = (x) => {
    let array = [];
    let Primejudge = true;
    for(let i = 0; i < x.length; i++)
    {
        if(x[i] === 2)
        {
            array.push(x[i]);
            continue;
        }
        else if(x[i] % 2 === 0)
        {
            continue;
        }
        for(let j = 3; j < Math.sqrt(x[i]); j++)
        {
            if(x % j === 0)
            {
                flag = false;
                break;
            }
        }
        if(flag === true)
        {
            array.push(x[i]);
        }
    }
    return array;
}

test(f);