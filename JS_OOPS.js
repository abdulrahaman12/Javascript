// Class 

// 1.Class Declaration
//  class Employee {
//     constructor(id,names,salary){
//         this.id = id;
//         this.name = names;
//         this.salary = salary;
//     }     
//     input(){
//         document.write(this.id+""+this.name+""+this.salary);
//     }
// }
// let emp2 = new Employee(12,'sheikh',50.000);
// emp2.input();

//2. Class Expression 

// var emp = class {
//     constructor(id,names,salary){
//         this.id = id;
//         this.name = names;
//         this.salary = salary;
//     }   
//     input(){
//         document.write(this.id+""+this.name+""+this.salary);
//     }
// }
// var empe = new emp(11,'abdul',30.000);
// empe.input();

// var emp = class {
//     constructor(id,names,salary){
//         this.id = id;
//         this.name = names;
//         this.salary = salary;
//     }   
//     input(){
//         document.write(this.id+""+this.name+""+this.salary);
//     }
// }
// var empi = new emp(11,'abdul',30.000);
// empi.input();

// Objects 

// 1.Object Literal 

// emp = {
//     id : 12,
//     age : 21,
//     salary: 50000
// }

// document.write(emp.id,emp.age,emp.salary);

// 2.Creating an instance of Object

// let emp = new Object();

// emp.id = 12,
// emp.age = 21,
// emp.sal = 70000

// document.write(emp.id+""+emp.age+""+emp.sal);

// 3. Constructor Object 

// class Employee{
//     constructor(car,model,years){
//         this.car = car,
//         this.model = model,
//         this.years = years
//     }
//     input(){
//         console.log(this.car+" "+this.model+" "+this.years);
//     }
// }
// let mep = new Employee('Hyundai',2017,15);
// mep.input();

// Static Method 

// class Television{

//     static display(){
//         return `Method is invoked`;
//     }
//     static display(){
//         return `Method is invoked again`;
//     }
// }
// document.write(Television.display());


// Encapsulation
// class Television{
//     constructor(){

//         var place;
//         var popularity;
//     }
//     getplace(){
//        return this.place;
//     }
//     setplace(place){
//         this.place = place;
    
// }
// }
// var emp = new Television();
// emp.setplace('Created');
// document.write(emp.getplace());

// Inheritance

class Television{
    constructor(){
    this.company = 'CAPGEMINI';
}
}
class umbrella extends Television{
    constructor(names,model){
    super();
    this.names = names;
    this.model = model;
    }
    
}
var v = new umbrella('TOP',2016);
document.write(v.company+" "+v.names+" "+v.model);