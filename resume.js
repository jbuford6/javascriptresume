var name = "Jamaris Buford";
var upperCase = name.toUpperCase();
var career = "Developer";
var description = "I am a developer and I'm getting better everyday";
var interests = "My Interests:";
var interests1 = "* Computers";
var interests2 = "* Sports";
var interests3 = "* Fitness";
var interests4 = "* Money";
var experience = "My Previous Experience:";
var skills = "My Skills:";



function displayPosition(companyName,jobTitle,description) {
    return "* " + companyName + jobTitle + description;
}

function displaySkill (jb, skill) {
    if (jb === true) {
        return "Check it: " + skill;
    } else if (jb === false)
        return "* " + skill;
}

    
    


console.log("Name: " + upperCase);
console.log("Career: " + career);
console.log("Description: " + description);
console.log(interests);
console.log(interests1);
console.log(interests2);
console.log(interests3);
console.log(interests4);
console.log(experience);
console.log(displayPosition("Vestavia Hills Highschool, ", "Football ", "- Cornerback on defense."));
console.log(displayPosition("Donohoo Auto, ", "Porter ", "- Parked and delivered cars."));
console.log(displayPosition("Western Supermarket, ", "Stocker ", "- Stocked items and kept inventory."));
console.log(skills);
console.log(displaySkill(true,"javascript"));
console.log(displaySkill(false,"swimming"));
console.log(displaySkill(false,"running"));
console.log(displaySkill(false,"lifting"));
console.log(displaySkill(false,"jumping"));
console.log(displaySkill(false,"eating"));
console.log(displaySkill(true,"HTML"));
console.log(displaySkill(true,"CSS"));




