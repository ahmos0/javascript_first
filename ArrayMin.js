const a = [2, 8, 0, -1, 7];
let min = 100000;

for(let i = 0; i < a.length; i++)
{
    if(min > a[i])
    {
        min = a[i];
    }
}
console.log(min);