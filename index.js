var rect = {
    perimeter: (x, y) => (2*(x+y)),
    area: (x, y) => (x*y)
};

function solveRect(l, b) {
    console.log("Solving for rect with l = " + l + "; b = " + b)

    if (l <= 0 || b <= 0) {
        console.log("l, b should be > 0")
    } else {
        console.log("The area of the rect is " + rect.area(l, b))
        console.log("The area of the perimeter is " + rect.perimeter(l, b))
    }
}

solveRect(2, 5);
solveRect(3, 0);