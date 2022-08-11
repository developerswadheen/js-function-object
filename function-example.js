/* function functionname(perameters) {
    function body
    return

}
var returnValues = functionname(parameters Value) */

function getTotal(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAverage = getTotal(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('my average so far:', myAverage);