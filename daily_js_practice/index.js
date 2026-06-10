function checkNum() {
    let num = parseInt(document.getElementById("numbox").value);
    let selection = document.getElementById("numberCatagory").value;
    let Result = document.getElementsByClassName("result")[0];

    if (selection == "Even_OR_Odd") {

        if (num % 2 == 0) {
            Result.innerHTML = "This is an Even Number.";
        } else {
            Result.innerHTML = "This is an Odd Number.";
        }

    } 
    else if (selection == "Armstrong") {

        let len = num.toString().length;
        let sum = 0;
        let number = num;

        while (num != 0) {
            let digit = num % 10;
            sum = sum + Math.pow(digit, len);
            num = Math.floor(num / 10);
        }

        if (number == sum) {
            Result.innerHTML = "This is an Armstrong Number.";
        } else {
            Result.innerHTML = "This is not an Armstrong Number.";
        }

    } 
    else if (selection == "Prime") {

        if (num <= 1) {
            Result.innerHTML = "This is not a Prime Number.";
        } else {
            let isPrime = true;

            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                Result.innerHTML = "This is a Prime Number.";
            } else {
                Result.innerHTML = "This is not a Prime Number.";
            }
        }

    } 
    else if (selection == "factorial") {

        let fact = 1;

        if (num < 0) {
            Result.innerHTML = "Factorial is not defined for negative numbers.";
        }
        else if (num == 0 || num == 1) {
            Result.innerHTML = `The Factorial of ${num} is 1`;
        }
        else {
            for (let i = num; i >= 1; i--) {
                fact = fact * i;
            }

            Result.innerHTML = `The Factorial of ${num} is ${fact}`;
        }

    }
}