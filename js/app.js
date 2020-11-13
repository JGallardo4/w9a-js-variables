// W9A

var age = 18;
var is_subscribed = true;
var result = "";

result += "The user is " +
    (age < 18 ? "younger than 18" : "18 and older") +
    " and " +
    (is_subscribed ? "is" : "not") +
    " subscribed";

console.log(result);

// W9B

var ages = [1, 18, 20, 25, 10, 17.5, 18.2];
var subscriptions = [true, true, false, true, false, true, false];

if (ages.length != subscriptions.length) {
    throw "The two arrays must have the same length!";
}

ages.forEach((age_at_i, index) => {
    var result = "";
    result += "The user is " +
        (age_at_i < 18 ? "younger than 18" : "18 and older") +
        " and " +
        (subscriptions[index] ? "is" : "not") +
        " subscribed";
    console.log(result);
});