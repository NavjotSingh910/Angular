class course{
    private _courseCount:number=1;
    constructor(
        private courseName:string,
        public ownerName:string
        ) {}
    get courseCount():number{
        return this._courseCount;
    }

    get courseOwnerName():string{
        return `owner Name is ${this.ownerName}`;
    }

    // set courseCount(num:number):void{}  //we cannot give retrun type as a void in setter methoad  simplly leave this as it is 

    // Setters cannot return a value.
    // A 'set' accessor must have exactly one parameter
    set courseCount(num:number){
        this._courseCount=num;
    }

    //also we have private methoads 
    private deleteToken(){
        console.log("this token is deleted")
    }
    //also we have private methoads 
     test(){
        console.log("this is public function")
    }
}

const myCourse= new course("typeScript","Hitesh Sir")

myCourse.courseOwnerName
myCourse.courseCount=10
// myCourse.deleteToken()
myCourse.test()


export{}