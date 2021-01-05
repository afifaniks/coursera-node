const rectangle = require('./rectangle');
var rect = require('./rectangle')

function solveRect(l, b) {
    console.log("Solving for rect with l = " + l + "; b = " + b)

    rect(l, b, (err, rectangle) => {
            if (err) {
                console.log("ERROR: ", err.message);
            } else {
                console.log("The area of the rectangle of dimensions l = " + l + "; b = " + b + " is " + rectangle.area())
            }
        })

        console.log("AFTER rect()")
}

solveRect(2, 5);
solveRect(3, 0);