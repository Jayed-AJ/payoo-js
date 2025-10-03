document.getElementById("cash-out").style.display="none";
let cashOut= document.getElementById("cash-out-btn");
cashOut.addEventListener("click",
    function () {
        document.getElementById("cash-out").style.display="block";
        document.getElementById("add-money").style.display="none";
        document.getElementById("cash-head").innerText="Cash Out";
    }
)

let addingMoney= document.getElementById("add-money-btn");
addingMoney.addEventListener("click",
    function () {
        document.getElementById("cash-out").style.display="none";
        document.getElementById("add-money").style.display="block";
        document.getElementById("cash-head").innerText="Add Money";
    }
)

let cashoutBtn= document.getElementById("cash-btn").addEventListener("click", 
    function (event) {
        event.preventDefault();
        let agent= document.getElementById("agent").value;
        console.log(agent,typeof agent);
        let account=document.getElementById("account").value;
        console.log(account, typeof account);
        if (account === agent) {
            console.log("match")
        }
        else {
            console.log("not match")
        }

        // if ( newNUM > 10) {
        //     console.log("Account number done");
        // }
        // else {
        //     alert("Account number should be over 10 charecters");
        // }
    }
)