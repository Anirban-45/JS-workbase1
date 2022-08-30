let grade = 65

switch (true) {
    case grade >= 80:
        console.log("you scored A");
        break;
    case grade >= 70:
        console.log("You scored B");
        break;
    case grade >= 60:
        console.log("You scored C");
        break;
    case grade >= 40:
        console.log("You scored D");
        break;
    case grade < 40:
        console.log("You scored F");
        break;
    default:
        console.log("That's not a grade");
}
