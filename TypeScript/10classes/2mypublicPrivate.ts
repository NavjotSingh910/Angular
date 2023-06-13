//by default public
class Person{
    public email:string
    private name:string
    // #name:string // in javascript world
    private readonly city:string="jaipur"
    constructor(email:string,name:string){
        this.email=email
        this.name=name
    }

}
const jitesh=new Person("navjot@ok.com","navjot")
// jitesh.name="Navjot Singh"
// navjot.city //not accessble because of private


// more advance people like code like that 

class User{
   
    constructor(
        public email:string,
        public name:string
        ){   
    }

}

const navjot=new User("navjot@ok.com","navjot")



export{

}