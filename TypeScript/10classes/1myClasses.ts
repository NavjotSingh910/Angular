class User{
    email:string
    name:string
    readonly city:string="jaipur"
    constructor(email:string,name:string){
        this.email=email
        this.name=name
    }

}

const navjot=new User("navjot@ok.com","navjot")
navjot.name="Navjot Singh"
// navjot.city="punjab"