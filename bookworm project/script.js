  function checkPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords don't match");
    } else {
        alert("Welcome to our book store");
        // You can add code here to submit the form or perform other actions after successful password matching
    }
}