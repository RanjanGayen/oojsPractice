var person = {
	firstName:"Ranjan",
	lastName:"Gayen",
	sayHi:function(){
		return "Hi there!";
	}
}
document.write(person.sayHi() + " " + person.firstName + " " + person.lastName);


/***/


var createPerson = function(firstName, lastName){
	return{
		firstName: firstName,
		lastName: lastName,
		sayHi: function(){
			return "Hi! there";
		}
	}
}
var ranjan = createPerson("Ranjan", "Gayen");
var raja = createPerson("Raja", "Roy");
document.write(ranjan.sayHi() + " " + ranjan.firstName + " " + ranjan.lastName);
document.write(raja.sayHi() + " " + raja.firstName + " " + raja.lastName);
