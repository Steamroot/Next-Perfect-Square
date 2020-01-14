let nextPerfectSquare = (num) => {
    let squareRoot = Math.sqrt(num);

    if ((num%squareRoot) != 0) {
        console.log("This is not a perfect square!");
    } else {
        console.log(Math.pow((squareRoot + 1), 2));
    }

}

nextPerfectSquare(1);