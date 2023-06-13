interface TakePhoto{
    cameraMode:string;
    filter:string;
    burst:number;
}

interface shorts{
    createShorts()
}

class Instagram implements TakePhoto{
    
    public burst: number;
    constructor(
        public cameraMode:string,
        public filter:string,
        public extrafuntionalities:string
    ){}
}


class Youtube implements TakePhoto,shorts{
    
    public burst: number;
    constructor(
        public cameraMode:string,
        public filter:string,
    ){}
    createShorts() {}
}


let interfaceObject:TakePhoto =new Youtube("photo","colorfull");