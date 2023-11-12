const password_first=document.querySelector("#password_first")
const password_secon=document.querySelector("#password_second")
const button=document.querySelector("button")
const error=document.querySelector("#error")



function validate(){
    if(password_first.value=="" || password_secon.value=="")
    {
        password_first.style.border="1px solid red"
        password_secon.style.border="1px solid red"
        error.innerHTML="*Please enter password"
        return false
    }
    else if(password_first.value!=password_secon.value){
        password_first.style.border="1px solid red"
        password_secon.style.border="1px solid red"
        error.innerHTML="*Passwords do not match"
        return false
    }
    
}