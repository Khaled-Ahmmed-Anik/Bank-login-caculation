function getInputValue(id){
    const inputField=document.getElementById(id)
    const inputedAmount=inputField.value
    inputField.value=''
    return parseFloat(inputedAmount)
}

function previousAmount(id){
    const field = document.getElementById(id)
    const fieldText=field.innerText
    return parseFloat(fieldText)
}

function setValue(id, amount){
    const field = document.getElementById(id)
    field.innerText=amount
}

//deposite
document.getElementById('deposite-button').addEventListener('click',function(){
    const inputedValue=getInputValue('deposite-input')
    if(inputedValue>0){
        const currentDepositeAmount= inputedValue + previousAmount('deposite-total')
        setValue('deposite-total',currentDepositeAmount)
    // update balance
        const currentBalance=previousAmount('balance-total')+ inputedValue;
        setValue('balance-total',currentBalance)
    }
})


//withdrow
document.getElementById('withdraw-button').addEventListener('click',function(){
    const inputedValue=getInputValue('withdraw-input')
    if(inputedValue>0 && previousAmount('balance-total')>=inputedValue){
        const currentWithdrawAmount= inputedValue + previousAmount('withdraw-total')
        setValue('withdraw-total',currentWithdrawAmount)
    // update balance
        const currentBalance=previousAmount('balance-total')- inputedValue;
        setValue('balance-total',currentBalance)
    }
})