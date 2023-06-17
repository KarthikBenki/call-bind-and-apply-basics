let fullName  = {
    firstName: 'Karthik',
    lastName: 'Benki',
    printFullName:function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

fullName.printFullName();

let name2 = {
    firstName: 'Manoj',
    lastName: 'Benki',
}

//borrowing taking a function from other object
fullName.printFullName.call(name2);

