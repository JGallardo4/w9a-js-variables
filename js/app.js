var age = 18;
var is_subscribed = true;
var result = "";

result += "The user is " +
    (age < 18 ? "younger than 18" : "18 and older") +
    " and " +
    (is_subscribed ? "is" : "not") +
    " subscribed";

console.log(result);