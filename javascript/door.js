let doorNumb = (a,b,c)=>{
    if (c<= 0 || (a*b<c)) 
        return "invalid Number";
    if (c%b==0) {
        return [Math.ceil(c/b), b]
    }else{
        return [Math.ceil(c/b), c % b]
    }
}
console.log(doorNumb(5,4,10))

// z
// let orts = (x,y,z,room)=>{
//     if (room<=0 || x*y*z < room) {
//      return "Fake Room";   
//     }
//     if (room%) {
        
//     }
// }


// for (let i = 0; i < 21; i++) {
//     console.log(doorNumb(5,4,i))
    
// }


let floor=5;
let door= 4;
let building=3;
let roomNumb=32;

for (let i = 0; i < building; i++) {
    for (let j = 0; j < floor; j++) {
        for (let h = 0; h < door; h++) {
            
            
        }
        
    }    
}