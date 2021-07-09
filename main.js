var loginform=document.getElementById("loginform");
var signupform=document.getElementById("signupform");
var indicator=document.getElementById("indicator");

function Signup(){
    signupform.style.transform=" translateX(0px)";
    loginform.style.transform=" translateX(0px)";
    indicator.style.transform=" translateX(80px)";
}
function login(){
    signupform.style.transform=" translateX(-300px)";
    loginform.style.transform=" translateX(300px)";
    indicator.style.transform=" translateX(-80px)";
}

