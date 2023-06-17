let fullName  = {
    firstName: 'Karthik',
    lastName: 'Benki',
}

let printFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
}

printFullName.call(fullName);

let name2 = {
    firstName: 'Manoj',
    lastName: 'Benki',
}

//borrowing taking a function from other object
printFullName.call(name2);

