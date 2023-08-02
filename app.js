const billAmount = document.querySelector("#bill-amt");
const cashGiven =  document.querySelector("#cash-given");
const btnCheck = document.querySelector("#btn-check");
const errMessage = document.querySelector("#error-msg");
//notesCount is the array of class elements of the table data which is to be filled finally
const notesCount = document.querySelectorAll(".no-of-notes");

const denominations = [2000,500,100,20,10,5,1];

const validateAmount = ()=>{
    // Initialising with empty values 
    for(let i =0; i< denominations.length; i++){
        notesCount[i].innerText = "";
    }

    hideError();

    var bill = parseInt(billAmount.value);
    var cash = parseInt(cashGiven.value);

    if(bill < 0 || cash < 0 || isNaN(bill) || isNaN(cash)){
        showError("Invalid Bill amount");
    }
    else if(bill > cash){
        const difference = bill - cash;
        showError("This is not sufficient. You still have to pay Rs." + difference);
    }
    else{
        var amountToBeReturned = cash - bill;
        for(let i =0; i< denominations.length; i++){
            var noOfNotes = Math.trunc(amountToBeReturned/denominations[i]);
            amountToBeReturned %= denominations[i];
            if(noOfNotes > 0){
                notesCount[i].innerText = noOfNotes;
            }  
        }
    }
}

const hideError = ()=>{
    errMessage.style.display = "none";
}

function showError(msg){
    errMessage.style.display = "block";
    errMessage.innerText = msg;
}

btnCheck.addEventListener("click", validateAmount);