//accessModifier public private protected
class course{
    private _courseCount:number=1;
    public _insitutionName:string;
    protected _rating:number;
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

class content extends course{
    // this._rating=30 //Unexpected token. A constructor, method, accessor, or property was expected.
    changeCourseRating():void{
        this._rating=30
    }
}

const typescriptseries:content =new content("typescriptName","ownerNavjot");
typescriptseries.courseCount=20
// typescriptseries._courseCount=20 //Property '_courseCount' is private and only accessible within class 'course'.
typescriptseries._insitutionName="Udemy"
// typescriptseries._rating; //Property '_rating' is protected and only accessible within class 'course' and its subclasses.


