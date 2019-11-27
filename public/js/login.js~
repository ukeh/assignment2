function validateLogin(form){
   // alert("success");
var email=form.inputEmail.value;
var pass=form.inputPassword.value;
var email_re=/\S+@\S+\.\S/;

if(email_re.test(email)==false){
    alert("Please enter a valid email");
    return false;
    }

else if(pass.length<6){
    alert("Check your password");
    return false;
}

}