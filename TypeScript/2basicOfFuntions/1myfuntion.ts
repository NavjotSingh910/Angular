function addTwo(num:number){//solution is num:number
    //num.toUpperCase();//it allow this just because num type is any
    return num+2;
}
addTwo(2)
// addTwo("5")


//for strring
function getUpper(val:string){
    return val.toUpperCase;

}
getUpper("navjot");

//multiple parameters
function signup(name:string,password:string,isPaid:boolean)
{}
signup("Navjot","Password",true)


//arrow funtion
let loginUser = (name:string,password:string,isPaid:boolean=false) => {}
loginUser("Navjot","Password")

//strict function to retrun desired value type
let multipleWithTwo=(num:number):number=>{
    return (num*2);
}
multipleWithTwo(10)

//
// function getValue(myValue:number):number{
//     if (myValue<3){
//         return true
//     }
//     return "200 Ok"
// }

// getValue(3)

const getStirng=(s:string):string=>{
    return ""
}

const heros=["thor","ironMan"]
heros.map((hero):string=>{ //return type is string
    return `hero is ${hero}`
}) 


function consoleError(errmsg:string):void{
    console.log(errmsg);
    // return 1;
}
function handleError(errmsg:string):never{//it use for handle error mostly
    // console.log(errmsg);
    throw new Error(errmsg);
    // return 1;
}

export{

}