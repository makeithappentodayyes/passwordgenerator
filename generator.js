// var pattern_list="abcdefghijklmnopqrstuvwxyz123456789"
// var example=''
 
// function generate_password(plength){
// example=''
// for (i=0;i<plength;i++)
// example+=pattern_list.charAt(Math.floor(Math.random()*pattern_list.length))
// return example
// }
 
// function execute_To_Generate(enterlength){
// document.password_generate.output.value=generate_password(enterlength)



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
}

