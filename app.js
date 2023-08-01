const billAmount = document.querySelector("#bill-amt");
const cashGiven =  document.querySelector("#cash-given");
const btnCheck = document.querySelector("#btn-check");
const errMessage = document.querySelector("#error-msg");
//notesCount is the array of class elements of the table data which is to be filled finally
const notesCount = document.querySelectorAll(".no-of-notes");

const denominations = [2000,500,100,20,10,5,1];

const validateAmount = ()=>{
    hideError();
    if(billAmount.value < 0 ){
        showError("Invalid Bill amount");
    }
    else if(billAmount.value > cashGiven.value){
        const difference = billAmount.value - cashGiven.value;
        showError("This is not sufficient. You still have to pay Rs." + difference);
    }
    else{
        var amountToBeReturned = cashGiven.value - billAmount.value;
        for(let i =0; i< denominations.length; i++){
            var noOfNotes = Math.trunc(
                amountToBeReturned/denominations[i]
            );
            amountToBeReturned %= denominations[i];
            notesCount[i].innerText = noOfNotes;  
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