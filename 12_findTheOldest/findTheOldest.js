const findTheOldest = function(people) {
    let maxAge = -Infinity;
    let personIndex;
    for (const i in people) {
        let person = people[i];
        console.log(person);
        let age;
        if (!person.hasOwnProperty("yearOfDeath")) {
            age = (new Date().getFullYear()) - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        if (age > maxAge) {
            personIndex = i;
            maxAge = age;
        }
    }
    return people[personIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
