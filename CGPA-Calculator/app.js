function gradePointCalculate(creditHour, grade) {
  let gradePoint;
  let cgpa;
  if (grade == "A+") {
    cgpa = 4;
    gradePoint = cgpa * creditHour;
  } else if (grade == "A") {
    cgpa = 3.75;
    gradePoint = cgpa * creditHour;
  } else if (grade == "A-") {
    cgpa = 3.5;
    gradePoint = cgpa * creditHour;
  } else if (grade == "B+") {
    cgpa = 3.25;
    gradePoint = cgpa * creditHour;
  } else if (grade == "B") {
    cgpa = 3.0;
    gradePoint = cgpa * creditHour;
  } else if (grade == "B-") {
    cgpa = 2.75;
    gradePoint = cgpa * creditHour;
  } else if (grade == "C+") {
    cgpa = 2.5;
    gradePoint = cgpa * creditHour;
  } else if (grade == "C") {
    cgpa = 2;
    gradePoint = cgpa * creditHour;
  } else if (grade == "C-") {
    cgpa = 1.5;
    gradePoint = cgpa * creditHour;
  } else {
    cgpa = 0;
    gradePoint = cgpa === 0 ? "Not Applicable" : cgpa * creditHour;
  }
  return { gradePoint, grade, creditHour, cgpa };
}
function gpaCalculate() {
  let courses = [];
  let length = Number(prompt("Enter number of courses: "));
  let totalCreditHours = 0;
  let totalGradePoints = 0;
  for (let i = 0; i < length; i++) {
    let courseName = prompt("Enter course name: ");
    let creditHour = Number(prompt("Enter credit hour : "));
    let grade = prompt("Enter course grade: ");

    let courseDetails = gradePointCalculate(creditHour, grade);
    courses.push({ courseName, ...courseDetails });

    totalCreditHours += courseDetails.creditHour;
    totalGradePoints += courseDetails.gradePoint;
  }
  let GPA = totalGradePoints / totalCreditHours;
  return { courses, GPA };
}
console.log(gpaCalculate());
