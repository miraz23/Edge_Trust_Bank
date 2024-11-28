document.getElementById("login-button").addEventListener("click", () => {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "admin@gmail.com" && password == "admin1234"){
        window.location.href = "dashboard.html";
    }
    else{ 
        alert("Incorrect email and password");
    }
  
    reset("email");
    reset("password");
});