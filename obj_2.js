// Write a function with a single parameter that checks if the parameter is an empty
// object.(Assume the function will only get object as a parameter)

function checkObject(obj){
    if(Object.getOwnPropertyNames(obj).length === 0){
     console.log("empty")
      }

      else{
          console.log("not empty");
      }
}

checkObject(obj1={
    id:1,
    name:"abc"})  //not empty

checkObject(abc={});  //empty