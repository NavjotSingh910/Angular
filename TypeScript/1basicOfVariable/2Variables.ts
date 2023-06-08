let greetings:string='Navjot';//this is not a good practice because  typescript smart enough to read the value that we give 
console.log(greetings)



//primitive number
let userId:number=33344
let rollId=33.344//both are same both number inference value
//when we give value at a declaring time then defining (number or any thing) is not good practice because typescript smart enough to determine what type it store

//boolean
let isLoggedIn:boolean=false

//real use case of :type
let hero;//so here ts not know in future what value will we store in variable so it give type as ANY that is not good
// let hero:string;

function getHero(){
    return 'Thor';
    return true;
}

hero = getHero();//it take any type of value 







// for remove eror for now we use export
export{

}
