    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value
    
      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message
    document.addEventListener("DOMContentLoaded", function (){


        var inputfield = document.getElementById('inputField');

        var form = document.getElementById("myForm");
        
        form.addEventListener("submit", function(event) {
          event.preventDefault();
          const inputValue = inputfield.value;
          let regex = /^[a-zA-Z0-9]*$/;
          if (!regex.test(inputValue)) {
            alert('Invalid format!');
          } else {
              alert("Form was successfully submitted");
            }
        });
    });
        