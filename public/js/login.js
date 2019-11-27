function validateForm(){
    //alert("yoyo");
   
    var email=document.getElementById("inputemail").value;
    
    var pass1=document.getElementById("inputpassword").value;
    
    var email_re=/\S+@\S+\.\S/;
  


   
    if(email_re.test(email)==false){
    alert("Please enter a valid email");
    return false;
    }
    else if(pass1==''){
        alert("Please enter password");
        return false;
    }
   else{ return true;
}
}
