const infosBtn = document.getElementById("infos-btn")
const infosPop = document.getElementById("infos-pop")

infosBtn.addEventListener("click", ()=>{
    infosPop.classList.toggle("hide")
})

const personalBtn = document.getElementById("personal-btn")
const personalPop = document.getElementById("personal-pop")

personalBtn.addEventListener("click",() =>{
    personalPop.classList.toggle("hide")
})

const loginBtn =  document.getElementById("login-btn")
var login = document.getElementById("login")
var password = document.getElementById("password")

function validate(){
    if(login.value != "" && password.value != ""){
        loginBtn.classList.add("ready")
    }else{
        loginBtn.classList.remove("ready")
    }
}

password.addEventListener("mousemove",() =>{
    validate()
})

const seeBtn = document.getElementById("see-password")
const seeIcon = document.getElementById("see")
const notseeIcon = document.getElementById("notsee")

seeBtn.addEventListener("click",() =>{
    seeIcon.classList.toggle("hide")
    notseeIcon.classList.toggle("hide")
    password.focus()
    toggleVisibility()
})

function toggleVisibility() {
    var password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
