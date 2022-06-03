function test(f) {
    console.log(
      {x: 1, y: 2}, {x: 2, y: 2},
      '=> 期待する値:', Math.sqrt(1),
      '結果:',
      f({x: 1, y: 2}, {x: 2, y: 2})
    )
    console.log(
      {x: 1, y: 9}, {x: -4, y: 2},
      '=> 期待する値:', Math.sqrt(74),
      '結果:',
      f({x: 1, y: 9}, {x: -4, y: 2})
    )
    console.log(
      {x: 10, y: -4}, {x: -9, y: 0},
      '=> 期待する値:', Math.sqrt(377),
      '結果:',
      f({x: 10, y: -4}, {x: -9, y: 0})
    )
}

const f = (p1, p2) =>{
   
    let dis = Math.sqrt(Math.pow(p1.x - p2.x, 2.0) + Math.pow(p1.y - p2.y, 2.0));
    return dis;
}

test(f);