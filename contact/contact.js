function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "29adityanarayan2000@gmail.com",
    Password: "Aditya@123",
    To: "29adityanarayan2000@gmail.com",
    From: document.getElementById("email").value,
    Subject: "A person wants to contact",
    Body: document.getElementById("message").value
  }).then(
    message => alert(message)
  );
}