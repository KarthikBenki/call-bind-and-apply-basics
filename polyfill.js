//javascript bind method

let myName = {
    firstName:"Jhon",
    lastName:"Doe"
}

let printMyName = function(state,city){
    console.log(this.firstName + " " + this.lastName + " from "+ state+" , "+city);
}

let printFullNameBind = printMyName.bind(myName,"Karnataka");

printFullNameBind("Bangalore");

//lets create our own bind method

Function.prototype._bind = function (...args) {
    let obj = this;
    let params = args.slice(1)
    return function(...args2){
        obj.apply(args[0],[...params,...args2])//changed to apply bacause params is an array
    }
}

//lets test our bind method

let printFullName_Bind = printMyName._bind(myName,"Karnataka");

printFullName_Bind("Bangalore");
