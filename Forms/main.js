function validateForm(){

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var regex_email = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,5})(.[a-z]{2,5}?)$/;
    
   
    
    if(name.value == ""){
        alert("Name must be filled out");
        name.focus();
        return false;
    }else if(!email.value.match(regex_email)){
        alert("Email is incorrect!");
        email.focus();
        return false;
    }

    return true;

}