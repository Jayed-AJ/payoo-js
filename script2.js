window.document.getElementById("btn-back").addEventListener("click",function () {
    window.location.href="./index.html";
})

let balance = document.getElementById("balance");
let balanceText=balance.innerText;
let balanceNum= parseFloat(balanceText);
let addMoney = document.getElementById("add-btn");
addMoney.addEventListener("click",function (event) {
    event.preventDefault();
    let account= document.getElementById("account").value;
    let ammount= document.getElementById("ammount").value;
    let ammountNum=parseInt(ammount);
    console.log(ammountNum);
    let pin =document.getElementById("pin").value;
    let pinNum=parseInt(pin);
    
    if (account.length >10 ) {
        if (ammountNum>= 100) {
            if (pinNum === 9120) {
                balanceNum+=ammountNum;
                balance.innerText=balanceNum;
                console.log(balanceNum,typeof balanceNum);
            }
            else {
                alert("worng PIN")
            }
        }
        else {
            alert("Not Enough Ammount to Add"); 
        }
    }
    else {
        alert("Account number is not Matching")
    }
    
})

console.log("hellow");
