// Initializing variable
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
function generatePassword(){
    var passwordlen = parseInt(prompt("How many characters would you like your pasword contain ?"))     ;
    if (passwordlen <8 || passwordlen > 128 || isNaN(passwordlen)=== true){
        alert("Invalid password - not number / <8 / >128")
        return;
    }
    var yesSpecial = confirm("Click Ok to have special characters");
    var yesLower = confirm("Click Ok to have Lowercase characters");
    var yesUpper = confirm("Click Ok to have Uppercase characters");
    var yesNumber = confirm("Click Ok to have Numberl characters");
    var passwordgen = "";
    var i =1

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
    document.getElementById("output2").value = passwordgen;
}

function copytoclipboard(){
   var passwordtext= document.getElementById("output2") ;
passwordtext.select()
    document.execCommand("copy")
    alert("password copied"+passwordtext)

}