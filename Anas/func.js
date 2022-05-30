// Write a function named crystalGazer() that takes four arguments: number of children, partner's name, geographic location, and job title. Once the user passes the four arguments the program should output the following message on screen:

// You will be a job_title in location and married to partners_name with number_childrens.*/

function crystalGazer(nuofChildren, nameparnter, location, titlejob) {
    console.log("You will be a " + titlejob + " in " + location + " and married to " + nameparnter + " with " + nuofChildren + "kids.");
}
crystalGazer(3, "sozie", "holanda", "programmer");

// 2 | Age Calculator

function crystalGazer(birthYear, currentYear) {
    var age1 = currentYear - birthYear;
    var age2 = currentYear - birthYear - 1;
    console.log("you are either  " + age1 + "or" + age2 + ".");
}
crystalGazer(1990, 2022);