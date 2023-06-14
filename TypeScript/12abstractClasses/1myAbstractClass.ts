abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter: string
    ){}

    // getSepia():void //Function implementation is missing or not immediately following the declaration.
    abstract getSepia():void 

    getReelTime():number{
        return 8;
    }
}

class Instagram extends TakePhoto{
    //Constructors for derived classes must contain a 'super' call.
    constructor(
        public cameraMode:string,
        public filter: string,
        public otherFunctionNumber:number
    ){
        super(cameraMode,filter)
    }
    getSepia(): void {
        console.log("this is sepia");
        
    }
}

// const ns:TakePhoto = new TakePhoto("test","Test") //Cannot create an instance of an abstract class.

const ns = new Instagram("test","Test",5)
ns.getReelTime()

