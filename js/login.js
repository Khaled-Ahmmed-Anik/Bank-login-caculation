document.getElementById('login-submit').addEventListener('click',function(){
    const emailFeild= document.getElementById('user-email')
    const userEmail=emailFeild.value  
    
    const passwordFeild= document.getElementById('user-password')
    const userPassword=passwordFeild.value 



    if(userEmail=='bap' && userPassword=='pola'){
        window.location.href='banking.html'
    }



})