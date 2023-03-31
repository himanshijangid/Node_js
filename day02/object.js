// var personData = {
//     name : "ram",
//     age : 25,
//     place : "jaipur"
// }

// console.log(personData.name);
// console.log(personData.age);
// console.log(personData.place);

//....................

var personData = {
    name : "ram",
    age : 25,
    place : "jaipur",
    // greet : function (){
        greet(){
        console.log(`hiii my name is ${this.name} . i am ${this.age} years old and i live in ${this.place} `);
    }
}
personData.greet();




