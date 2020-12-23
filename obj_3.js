// Create a function called makeTuple that would take an object as a parameter and outputs the
// result in an array with the pair of key and values of the object
// Eg. Input parameter { x: 1, y: 2 }, Expected output: [[x, 1], [y, 1]]



function makeTuple(obj){
    console.log(obj)
if(typeof obj === 'object' && !null){
    let arr=Object.entries(obj);
    console.log(arr);

}

else{
    console.log("not an object");
}

}
makeTuple(obj1={
    id:1,
    name:"abc"}) 


    makeTuple('obj')
