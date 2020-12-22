// Create an object Person with properties firstName, lastName and a method displayName that
// returns the fullName of the person. Use both object literal and object constructor.

let Person2={
    firstName:"abc",
    lastName:"ABC",

getFullName:function(){

 return `My fullname is ${this.firstName} ${this.lastName}`;
}
}
console.log("Object Literal")
console.log(Person2.getFullName());
console.log(Person2);

//Constructor notation

function Person1(){
    this.firstName="saru";
    this.lastName="mdr"
  
}

Person1.prototype.getFullName=function(){
    return ` ${this.firstName} ${this.lastName}`
}



let person=new Person1();
console.log("Constructor notation")
console.log(person.getFullName());
console.log(person);