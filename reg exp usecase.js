document.getElementById("form").addEventListener("submit", function(event){
event.preventDefault();

const emailInput = document.getElementById("email").value;
const pwd = document.getElementById("password").value;
const msg = document.getElementById("message");

const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// this regular expression is used to validate email entered is valid or not


const pwdRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/;

if (emailRegx.test(emailInput) && pwdRegx.test(pwd)){
    msg.style.color ="green"
    msg.textContent = "valid email and password"
}

else{
    msg.style.color = "red";
    if (!emailRegx.test(emailInput)){
        msg.textContent="Invalid email";
    }
    if (!pwdRegx.test(pwd)){
        msg.textContent += "Password must contain 1 uppercase Letter, 1 lowercase letter, 1 number and 1 special character";
    } 
}
});