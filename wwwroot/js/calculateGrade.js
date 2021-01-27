//Cameron Keetch
//Assignment1


//This portion of the code is used to calculate the grade after the user inputs it on the main page.


$("#submit").click(function () {

    if 
    //Brings in the values from the HTML page and adds the weight. 
    var assignmentScore = $("#assignments").val() * .5;
    var groupProjectScore = $("#groupProject").val() * .1;
    var quizzesScore = $("#quizzes").val() * .1;
    var examsScore = $("#exams").val() * .2;
    var intexScore = $("#INTEX").val() * .1;

    //adds the scores together to find final percentage
    var finalGrade = assignmentScore + groupProjectScore + quizzesScore + examsScore + intexScore;

    //assigns a letter grade based on finalGrade percentage.
    if (finalGrade >= 94) {
        var letterGrade = 'A';
    }
    else if (finalGrade >= 90) {
       letterGrade = 'A-'
    }
    else if (finalGrade >= 87) {
       letterGrade = 'B+'
    }
    else if (finalGrade >= 83) {
       letterGrade = 'B'
    }
    else if (finalGrade >= 80) {
       letterGrade = 'B-'
    }
    else if (finalGrade >= 77) {
       letterGrade = 'C+'
    }
    else if (finalGrade >= 73) {
       letterGrade = 'C'
    }
    else if (finalGrade >= 70) {
       letterGrade = 'C-'
    }
    else if (finalGrade >= 67) {
       letterGrade = 'D+'
    }
    else if (finalGrade >= 63) {
       letterGrade = 'D'
    }
    else if (finalGrade >= 60) {
       letterGrade = 'D-'
    }
    else {
       letterGrade = 'E'
    }


    //alerts the final percentage
    alert('Final Percentage: ' + finalGrade + '%' + '\n' + 'Letter Grade: ' + letterGrade);

});