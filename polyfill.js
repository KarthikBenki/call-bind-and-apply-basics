//javascript bind method

let myName = {
    firstName:"Jhon",
    lastName:"Doe"
}

let printMyName = function(state){
    console.log(this.firstName + " " + this.lastName + " from "+ state);
}

let printFullNameBind = printMyName.bind(myName,"Karnataka");

printFullNameBind();

//lets create our own bind method

Function.prototype._bind = function (...args) {
    let obj = this;
    let params = args.slice(1)
    return function(){
        obj.apply(args[0],params)//changed to apply bacause params is an array
    }
}

//lets test our bind method

let printFullName_Bind = printMyName._bind(myName,"Karnataka");

printFullName_Bind();
