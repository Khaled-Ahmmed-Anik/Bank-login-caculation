document.getElementById('deposite-button').addEventListener('click',function(){
    const inputField=document.getElementById('deposite-input')
    const depositeAmount=inputField.value
    inputField.value=''


    const depositeTotalFeild = document.getElementById('deposite-total')

    const currentAmount=depositeTotalFeild.innerText

    const total= parseFloat(depositeAmount)+parseFloat(currentAmount)

    depositeTotalFeild.innerText=total

    // update balance
    const balanceField= document.getElementById('balance-total')
    
    const totalBalance=total + parseFloat(balanceField.innerText)
    balanceField.innerText=totalBalance 
})


//withdrow
document.getElementById('withdraw-button').addEventListener('click',function(){
    const inputField=document.getElementById('widthdraw-input')
    const widthdrawAmount=inputField.value
    inputField.value=''


    const widthdrawTotalFeild = document.getElementById('widthdraw-total')

    const currentAmount=widthdrawTotalFeild.innerText

    const total= parseFloat(widthdrawAmount)+parseFloat(currentAmount)

    widthdrawTotalFeild.innerText=total

    // update balance
    const balanceField= document.getElementById('balance-total')
    
    const totalBalance= parseFloat(balanceField.innerText)-parseFloat(widthdrawAmount) 
    balanceField.innerText=totalBalance 
})