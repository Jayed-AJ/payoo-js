let loginBtn= document.getElementById("login-btn");
 loginBtn.addEventListener("click",function(event){
    event.preventDefault();
    let accountNumber=document.getElementById("loginAccount").value;
    console.log(accountNumber);
    // console.log(accountNumber.length);
    let pin= document.getElementById("pin").value;
    // console.log(pin.length);
    if (accountNumber.length > 10) {
        if (pin === "0912" ) {
            window.location.href="./main.html"
        }
        else {
            alert("worng pin number")
        }
    }
    else{
        alert("accout number must be over 10 charecter")
    }

})
console.log("script-1")