let fullName  = {
    firstName: 'Karthik',
    lastName: 'Benki',
}

let printFullName = function (state,city) {
    console.log(`${this.firstName} ${this.lastName} from ${state}, ${city}`);
}

printFullName.call(fullName,"Karnataka","Chitradurga");

let name2 = {
    firstName: 'Manoj',
    lastName: 'Benki',
}

//borrowing taking a function from other object
printFullName.call(name2,"Karnataka","Bangalore");


const name3 = {
    firstName: 'Mouna',
    lastName: 'Yashvanth',
}

console.log("After apply method");
//usage of apply method
printFullName.apply(name3,["Karnataka","Bhalayal"])


//bind method

console.log("after bind method");
let printMyName = printFullName.bind(name3,"Karnataka","Chitradurga")

printMyName();
