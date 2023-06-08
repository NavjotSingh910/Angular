const User={
    name:'Navjot',
    age:26,
    isActive:true
}

// define function parameter takes only objects with these key values
function createUser({name:string,isPaid:boolean}){

}
createUser({name:"navjot",isPaid:true})

// define function parameter return only object with these key values 
function createCourse():{ name:string, price: number }{
    return { name: "navjot", price: 205}
}


//loop whole in ts 

function createEmployee({name:string,isPaid:boolean}){

}
const employee={
    name:"navjot",
    isPaid:true,
    email:'navjot@gmail.com'
}
// createEmployee({name:"navjot",isPaid:true,email:'navjot@gmail.com'})//this is not work because we pass more parameters
createEmployee(employee) //this work and now we pass more then two values  thats a problem
 

export{}