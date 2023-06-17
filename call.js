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

//usage of apply method
printFullName.apply(name3,["Karnataka","Bhalayal"])

