
var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        document.getElementById("demo ").innerHTML = today;

        function validateFirstName() {
            var fName = document.getElementById("firstName").value;
            var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;
            if (re1.test(fName)) { //
                document.getElementById("firstNamePrompt").style.color = "green";
                document.getElementById("firstNamePrompt").innerHTML = "<b>Correct</b>";
                return true;
            } else {
                document.getElementById("firstNamePrompt").style.color = "red";
                document.getElementById("firstNamePrompt").innerHTML = "Please enter a valid input";
                return false;
            }
        }

        function validateLastName() {
            var lName = document.getElementById("lastName").value;
            var re2 = /^[a-zA-Z\s\'\-]{2,25}$/;
            if (re2.test(lName)) {
                document.getElementById("lastNamePrompt").style.color = "green";
                document.getElementById("lastNamePrompt").innerHTML = "Correct";
                return true;
            } else {
                document.getElementById("lastNamePrompt").style.color = "red";
                document.getElementById("lastNamePrompt").innerHTML = "Please enter a valid input";
                return false;
            }
        }

        function validatePhone() {
            var phoneNumber = document.getElementById("phone").value;
            var re3 = /^\d{3}-\d{3}-\d{4}$/;
            if (re3.test(phoneNumber)) {
                document.getElementById("phonePrompt").style.color = "green";
                document.getElementById("phonePrompt").innerHTML = "<strong>Correct</strong>";
                return (true);
            } else {
                document.getElementById("phonePrompt").style.color = "red";
                document.getElementById("phonePrompt").innerHTML = "<strong>Please enter a valid input</strong>";
                return (false);
            }
        }

        function validateCard() {
            var cardNumber = document.getElementById("card").value;
            var re5 = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
            if (re5.test(cardNumber)) {
                document.getElementById("cardPrompt").style.color = "green";
                document.getElementById("cardPrompt").innerHTML = "<strong>Correct</strong>";
                return (true);
            } else {
                document.getElementById("cardPrompt").style.color = "red";
                document.getElementById("cardPrompt").innerHTML = "<strong>Please enter a valid input</strong>";
                return (false);
            }
        }


        function validateExp() {
            var expp = document.getElementById("exp").value;
            var re4 = /^\d{2}-\d{2}$/;
            if (re4.test(exp)) {
                document.getElementById("expPrompt").style.color = "green";
                document.getElementById("expPrompt").innerHTML = "<b>Correct</b>";
                return true;
            } else {
                document.getElementById("expPrompt").style.color = "green";
                document.getElementById("expPrompt").innerHTML = "<b>Correct</b>";
                return false;
            }
        }
