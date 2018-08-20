//JavaScript Document

window.addEventListener("load", init)

function init()
{
   document.getElementById("sub").addEventListener("click", myfunction);
        
    var header1 = document.getElementById("head0");
    var header2 = document.getElementById("head1");
    var header3 = document.getElementById("head2");
    var header4 = document.getElementById("head3");
    var header5 = document.getElementById("head4");
    
    /*var info = 
    {
        fName:"".value,
        lName:"".value,
        email:"".value, 
        emailConfirm:"".value,
        phone:"".value
    } */
    
    
    
    var fName = document.getElementById("first");
    var lName = document.getElementById("last");
    var email = document.getElementById("email"); 
    var emailConfirm = document.getElementById("email-confirm");
    var phone = document.getElementById("phone");  
    
    var regval = false;
    
    function myfunction()
    {   
        //------------------------------------------------------------------------- First Name
        
        
        if (fName.value === "")
        {    
           header1.style.color="red";
           
           var fName_error = document.getElementById("fn-error").innerHTML ="*";
        }
        else 
        {    
            var fNameT ="true";
            header1.style.color = "black";
            var fName_error = document.getElementById("fn-error").innerHTML ="";
            
            var reg = /^[_A-z0-9\-]*((-|\s)*[_A-z0-9])*$/;
                     
            if (reg.test(fName.value) === false)
            {
                header1.style.color="red";
           
                var fName_error = document.getElementById("fn-error").innerHTML ="*";
                
                alert("First Name should not include soecial char")
            }
           
        }
        
        //------------------------------------------------------------------------- Last Name
        
        if (lName.value === "")
        {
            header2.style.color="red";
            
            var lName_error = document.getElementById("ln-error").innerHTML ="*";
        }
        else 
         {   
            var lNameT ="true";
            header2.style.color="black";
            var lName_error = document.getElementById("ln-error").innerHTML ="";
             
            var reg1 = /^[_A-z0-9\-]*((-|\s)*[_A-z0-9])*$/;
             
            if (reg1.test(lName.value)== false)
            {
                header2.style.color="red";
            
                var lName_error = document.getElementById("ln-error").innerHTML ="*";
                
                alert("Invalid Last Name Please Try Again")
            }
            
         }
        //------------------------------------------------------------------------- Email
        
        if (email.value === "")
        {
            header3.style.color="red";
            
            var email_error = document.getElementById("email-error").innerHTML ="*";
        }
        else 
        {
            header3.style.color="black";
            var email_error = document.getElementById("email-error").innerHTML ="";
            
            var reg2 = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
            
            if (reg2.test(email.value)== false)
            {
                header3.style.color="red";
            
                var email_error = document.getElementById("email-error").innerHTML ="*";
                
                alert("Invalid Email Please Try Again")
            }
        }
        
        //------------------------------------------------------------------------- Email Confirm
        
        if (emailConfirm.value === "")
        {
            header4.style.color="red";
            
             var emailConfirm_error = document.getElementById("email-confirm-error").innerHTML ="*";
        }
        else 
        {
            header4.style.color="black";
            var emailConfirm_error = document.getElementById("email-confirm-error").innerHTML ="";
        }
        
        //------------------------------------------------------------------------- Phone 
        
        if (phone.value === "")
        {
            header5.style.color="red";
            
            var phone_error = document.getElementById("phone-error").innerHTML ="*";
        }
        else
        {
            var phoneT ="true";
            header5.style.color="black";
            var phone_error = document.getElementById("phone-error").innerHTML ="";
            
            var reg3 = /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/;
            
            if (reg3.test(phone.value)== false)
            {
                header5.style.color="red";
            
                var phone_error = document.getElementById("phone-error").innerHTML ="*";
                
                alert("Invalid phone# Please Try Again")
            }
        }
        
        //-------------------------------------------------------------------------
        
        if (info.email === info.emailConfirm && fNameT === "true")
        {
            if (lNameT === "true" && phoneT === "true")
            {
            
                document.getElementById("confirmation").style.display ="block";
           
                document.getElementById("p1").innerHTML=fName.value;
                document.getElementById("p2").innerHTML=lName.value;
                document.getElementById("p3").innerHTML=email.value;
                document.getElementById("p4").innerHTML=phone.value; 
                
                document.querySelector("form").style.display = "none";
            }
        } 
        
        
    } // function end myfunction
    
} // function end init