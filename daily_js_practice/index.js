// this script work for dark and light theme.

    let bgcolor = document.getElementsByClassName("Theme")[0];
    function theme() {
        let img = document.getElementById("mainimg");
        let text = document.getElementsByClassName("bgco")[0];

        if (img.src.includes("moon.jpg")) {
            img.src = "image/sun.jpg";
            text.innerHTML = "This is the dark Background theme";
            text.style.color = "white";
            bgcolor.style.background = "grey";
            
        } else {
            img.src = "image/moon.jpg";
            text.style.color = "black";
            text.innerHTML = "This is the light Background theme";
            bgcolor.style.background = "white";
        }
    }

    // this script is finding the number catagory 
    
    
    function checkNum(){
        let num = document.getElementById("numbox").value;
        let selection = document.getElementById("numberCatagory").value;
        let Result = document.getElementsByClassName("result")[0];
        let digit = 0;
        if(selection == "Even_OR_Odd"){
            if((num%2)==0){
                Result.innerHTML = "This is an even Number.";
            }
            else{
                Result.innerHTML = "This is a odd Number.";
            }
        }
        else {
            if (selection == "Armstrong") {
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
            else{
                let i;
                if(selection == "Prime" ){
                    for(i = 2; i<=num; i++){
                        if(num%i == 0){
                            break;
                        }
                    }

                }
                if(i==num){
                    Result.innerHTML = "This is Prime Number.";
                }else{
                    Result.innerHTML = "This is not a prime Number.";
                }
            }
        
        }
    }