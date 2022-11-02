let userage = 18;
var isSubscribed

isSubscribed = false;

if (userage >= 21 && (isSubscribed == true)){
    console.log("User is old enough and subcribed");
    } else if ((userage >=21) &&(isSubscribed == false)) {
        console.log("The user is old enough, but not subscribed");
    } else if ((userage <=21) && (isSubscribed == true)) {
        console.log("The use is to young, but is subscribed.");
    } else if ((userage <=21) && (isSubscribed == false)){
        console.log("The user is to young, and not subscribed");
    } else {
        console.log("User has not submitted enough information")
    }
    