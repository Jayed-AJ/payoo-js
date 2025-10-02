let loginBtn= document.getElementById("login-btn");
 loginBtn.addEventListener("click",function(event){
    event.preventDefault();
    let accountNumber=document.getElementById("account").value;
    // console.log(accountNumber.length);
    let pin= document.getElementById("pin").value;
    // console.log(pin.length);
    if (accountNumber.length > 10) {
        if (pin === "0912" ) {
            console.log("Correct PIN and account Number")
        }
        else {
            alert("worng pin number")
        }
    }
    else{
        alert("accout number must be over 10 charecter")
    }

})