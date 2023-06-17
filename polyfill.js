//javascript bind method

let myName = {
    firstName:"Jhon",
    lastName:"Doe"
}

let printMyName = function(){
    console.log(this.firstName + " " + this.lastName);
}

let printFullNameBind = printMyName.bind(myName);

printFullNameBind();

//lets create our own bind method

Function.prototype._bind = function (...args) {
    let obj = this;
    return function(){
        obj.call(args[0])
    }
}

//lets test our bind method

let printFullName_Bind = printMyName._bind(myName);

printFullName_Bind();
