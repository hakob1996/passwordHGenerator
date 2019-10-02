function password1(){
    
    var character = "qwertyuiopafghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890[]|.$#@!%^&*()_-=+/?<>,{}";
    var generated = "";

    for(var i = 0, n = character.length; i < 8; i++){
        generated += character.charAt(Math.floor(Math.random() * n));  
    }
   document.getElementById("password").innerHTML = generated;
}

function copy1(){
   password.style.fontSize="45px";
   var copy = document.getElementById("password");
   copy.select();
   document.execCommand("copy");
  
}