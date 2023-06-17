let fullName  = {
    firstName: 'John',
    lastName: 'Marshel',
}

let printFullName = function (state,city) {
    console.log(`${this.firstName} ${this.lastName} from ${state}, ${city}`);
}

printFullName.call(fullName,"Karnataka","Chitradurga");

let name2 = {
    firstName: 'Manoj',
    lastName: 'Marshel',
}

//borrowing taking a function from other object
printFullName.call(name2,"Karnataka","Bangalore");


const name3 = {
    firstName: 'Nova',
    lastName: 'Disozza',
}

console.log("After apply method");
//usage of apply method
printFullName.apply(name3,["Karnataka","Bhalayal"])


//bind method

console.log("after bind method");
let printMyName = printFullName.bind(name3,"Karnataka","Chitradurga")

printMyName();
