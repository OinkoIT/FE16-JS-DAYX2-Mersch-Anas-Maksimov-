/*ex 1 | Crystal Gazer
Write a function named crystalGazer() that takes four arguments: number of children, partner's name, geographic location, and job title. Once the user passes the four arguments the program should output the following message on screen:

You will be a job_title in location and married to partners_name with number_childrens.*/

function crystalGazer(numChildren, namePartner, location, job) {
    console.log("You will be a " + job +" in " + location + " and married to " + namePartner +" with " + numChildren + " kids.");
};

crystalGazer(5, "Jolene", "Iraq", "doctor");

/*ex 2 | Age Calculator
Write a function called ageCalculator() that takes two arguments birth year and current year. Calculate 2 possible ages based on those years (two, because we don't know the birth month).

You should get the following results:

You are either 29 or 28*/

function ageCalculator (birthYear, currentYear) {
    var age1 = currentYear - birthYear;
    var age2 = currentYear - birthYear - 1;
    console.log("You are either " + age1 + " or " + age2 + ".");
}

ageCalculator(1989, 2022);