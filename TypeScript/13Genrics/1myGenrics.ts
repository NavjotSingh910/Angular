const score: Array<number>=[]
const names:Array<string>=[]

function identityOne(val: boolean | number):boolean|number{
    return 3
}

identityOne(true)

function identityTwo(val:any):any{
    return "3"
}

identityTwo(3)

//genrics solve problem for type controll
function identityThree<Type>(val:Type):Type{
    return val
}

identityThree(3)



function identityFour<H>(val:H):H{
    return val
}

identityFour("3")


// define your own typs

interface Bottle{
    brand:string,
    type:number
}

  
  const bottle: Bottle = {
    brand: "Example Brand",
    type: 5,
  };
  
  const result = identityFour<Bottle>(bottle);
  console.log(result);
  