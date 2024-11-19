const dateofBirth = "12/12/1980";

// Arrow function to get student name
const getStudentName = () => {
    return "write your name here";
};

// Arrow function to get campus name
const getCampusName = () => {
    return "UEL Campus";
};

// Exporting functions and variable outside the module
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;

// Function with parameters to return grade based on marks
exports.Studentgrade = (marks) => {
    if (marks > 50 && marks < 70) {
        return "B grade";
    } else {
        return "A grade";  // Fixed the missing parenthesis here
    }
};

