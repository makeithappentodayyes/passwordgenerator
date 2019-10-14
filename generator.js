

 
 var yesSpecial = confirm("Would you like to use special characters?");
 var yesLower = confirm("Would you like to use lowercase characters");
 var yesUpper = confirm("Would you like to use uppercase letters?");
 var yesNumber = confirm("Would you like to use Numbers?");
 var passwordgen = "";
 var i =1

 function generatePassword(){
    var passwordlen = parseInt(prompt("How many characters would you like your pasword contain ?"))     ;
    if (passwordlen <8 || passwordlen > 128 || isNaN(passwordlen)=== true){
        alert("Invalid password - not number / <8 / >128")
        return;
    }


var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "]", "[", ";", ":", "<", ">", ",", ".", "?"]
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbersArr = ['1','2','3','4','5','6','7','8','9','0'];
var userdataarray = [];
var validLength =false;
var validSpecial = false;
var validLower = false;
var validNumber = false;
var validUpper  = false;

function checkForPassword() {
    console.log("Check pass");
    var userdata = document.querySelector("#userentry").value;
    for (var i = 0; i < userdata.length; i++) {
        userdataarray.push(userdata[i])
    }
    if (userdata.length >= 8 && userdata.length <= 255) {
        validLength = true;
        console.log("Valid Length")
    }
    for (var i = 0; i < specialCharacters.length; i++) {
        if (userdataarray.indexOf(specialCharacters[i]) > -1) {
            validSpecial = true;
            console.log("Valid Special Characters");
        }
    }
    for (var i = 0; i < lowerCase.length; i++) {
        if (userdataarray.indexOf(lowerCase[i]) > -1) {
            validLower = true;
            console.log("Valid lower case");
        }
    }
    for (var i = 0; i < upperCase.length; i++) {
        if (userdataarray.indexOf(upperCase[i]) > -1) {
            validUpper = true;
            console.log("Valid Upper case");
        }
    }  for (var i = 0; i <numbersArr.length; i++) {
        if (userdataarray.indexOf(numbersArr[i]) > -1) {
            validNumber = true;
            console.log("Valid Numbers");
        }
    }
    if (validLength && validLower && validUpper && validNumber && validSpecial){
        console.log("Valid Password entered");
        document.getElementById("output1").innerText = "VALID PASSWORD ENTERED"+userdata;
    }
    else {
        console.log("InValid Password entered");
        document.getElementById("output1").innerText = "INVALID PASSWORD ENTERED"+userdata;
      
    }
}


  

    while(i <= passwordlen){
        if(yesSpecial && i <= passwordlen) 
        {
            var rndnum = Math.floor(Math.random()*specialCharacters.length);
            passwordgen = passwordgen + specialCharacters[rndnum];
            i++;
        }
        if(yesLower  && i <= passwordlen)
        {
            var rndnum = Math.floor(Math.random()*lowerCase.length);
            passwordgen = passwordgen + lowerCase[rndnum];
            i++;
        }
        if(yesUpper  && i <= passwordlen)
        {
            var rndnum = Math.floor(Math.random()*upperCase.length);
            passwordgen = passwordgen + upperCase[rndnum];
            i++;
        }
        if(yesNumber  && i <= passwordlen)
        {
            var rndnum = Math.floor(Math.random()*numbersArr.length);
            passwordgen = passwordgen + numbersArr[rndnum];
            i++;
        }
        console.log(passwordgen)
    }
    document.getElementById("output2").innerText = passwordgen;
}