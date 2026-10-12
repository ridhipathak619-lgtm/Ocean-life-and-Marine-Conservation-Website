
const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;

    var message = "Registration Successful";

    document.getElementById("result").innerHTML =
        message + "<br>" +
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "Email: " + email;
});
