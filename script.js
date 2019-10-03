function password1(){
    var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
    var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    var numbers = "1234567890";
    var elses = "[]|.$#@!%^&*()_-=+/?<>,{}";
    var allTogether = "qwer[]|.$#@!%^&*(tyuiopafgFGHJKLZXhjklzxcvbASDCVBNM1234567890)_-=+/?<>,{}";
    var generated = "";
    var question = prompt("How many characters would you like?");
    var askLowerCase = confirm("Press OK if You would like just lowercase");
    



   
 
function together(){
        for(var i = 0, n = question; i < question; i++){
            generated += allTogether.charAt(Math.floor(Math.random() * n));  
            document.getElementById("password").innerHTML = generated;
            
            
        }
        
    }

function upperCase1(){
        var askUpperCase = confirm("Press OK if You would like just uppercase");
    
        if (askUpperCase){
            for(var i = 0, n = question; i < question; i++){
                generated += upperCase.charAt(Math.floor(Math.random() * n)); 
                document.getElementById("password").innerHTML = generated; 
                
                }
                
            }
            else  {
                
                number();
            }
     }
    
function chracter(){
        var askCharacters = confirm("Press OK if You would like just chracters");
        if(askCharacters){
            for(var i = 0, n = question; i < question; i++){
                generated += elses.charAt(Math.floor(Math.random() * n));  
                document.getElementById("password").innerHTML = generated;
                
                
            }
            
        }
        else{
            together();
        }
    }
function number(){
        var askNumbers = confirm("Press OK if You would like just numbers");
        if(askNumbers){
            for(var i = 0, n = question; i < question; i++){
                generated += numbers.charAt(Math.floor(Math.random() * n));  
                document.getElementById("password").innerHTML = generated;
                
                
            }
            
        }
        else{
            
            chracter();
        }
    }
    

     
  if (askLowerCase){
        for(var i = 0, n = question; i < question; i++){
            generated += lowerCase.charAt(Math.floor(Math.random() * n));  
            document.getElementById("password").innerHTML = generated;     
                         
        }

    }
   
     else  {
        
        upperCase1();
     }

  
    }

    function copy1(){
       
        var copy = document.getElementById("password");
        copy.select();
        document.execCommand("copy");
    }
        
