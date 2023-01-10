  
  function $(selector){
        return document.querySelector(selector);
  }

  function is_email_address(email){
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           return regex.test(email);
      }
     
      function empty(string){
             if(string.length < 1 || string === "" || string === " ") return true;
             return false;
      }

 function validate_form(event, owner){
        /**
         * stop the form from loading a new
         * page by using the preventDefault function
         * on the event that is passed in to the
         * function
         */
        event.preventDefault();
        let emailErr = $('#emailErr');
        let pswErr = $('#pswErr');
        //we passed in the form object by passing this
        //into the validate_form function
        let form = owner;
        let email = owner["email"].value;
        let password = owner["password"].value;

        //validate the email
        if(empty(email)){
                emailErr.innerText = "*password cannot be empty";
         }
         else if(!is_email_address(email)){
                emailErr.innerText = "*the email address you entered is not a valid email address";
         }
         else {
                emailErr.innerText = "";
         }

         //validate the password
         if(empty(password)){
                pswErr.innerText = "*password cannot be empty";
         }
         else {
                pswErr.innerText = "";
         }


 }

 