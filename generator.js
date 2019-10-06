


 var numberOfCharacters = prompt("Password Lenght")

 var numbers = confirm("Numeric characters")
 var lowerCase = confirm("Lowercase characters")

 var upperCase = confirm("Uppercase Characters")

function generate_password(){            
var userinput = document.getElementById("password") .value
var validlenght = false 
console.log(userinput)
if (userinput.lenght>8 && userinput.lenght<125)
{

    console.log("validlenght")
}


function generate(){

    
    let complexity = document.getElementById("slider").value;
    

    let values = "ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"
    }
    
    
    let password = "";
    
    
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.lenght - 1)));
    
    }
    
    
    
    
    document.getElementById("display").value = password;
    
