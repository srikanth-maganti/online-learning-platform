
let user=document.querySelector("#user");
let pass=document.querySelector("#pass");
let confirmpass=document.querySelector("#confirmpass");
let mobile=document.querySelector("#mobile");

user.addEventListener("change",()=>{
    
    if(user.value!="" && pass.value!="" && confirmpass.value!="" && mobile.value!="")
    {
        let button=document.querySelector(".btn");
        button.classList.add("new");
    }
    
});
pass.addEventListener("change",()=>{
    
    if(user.value!="" &&  pass.value!="" &&confirmpass.value!="" && mobile.value!="")
    {   
        let buttons=document.querySelectorAll(".btn");
        for(button of buttons)
        {
            button.classList.add("new");
        }
       
    }
});

confirmpass.addEventListener("change",()=>{
    
    if(user.value!="" &&  pass.value!="" &&confirmpass.value!="" && mobile.value!="")
    {   
        let buttons=document.querySelectorAll(".btn");
        for(button of buttons)
        {
            button.classList.add("new");
        }
       
    }
});

mobile.addEventListener("change",()=>{
    

    if(user.value!="" &&  pass.value!="" &&confirmpass.value!="" && mobile.value!="")
    {   
        let buttons=document.querySelectorAll(".btn");
        for(button of buttons)
        {
            button.classList.add("new");
        }
       
    }
})


let form =document.querySelector("form");
form.addEventListener("submit",()=>{
    let x=user.value;
    let y=mobile.value;
    if(x.length<8)
    {
        alert("username should be 8 char");
    }
    else if( pass.value!=confirmpass.value)
    {
       alert("password not matched");
    }
    else if(y.length!=10){
        alert("mobile should be ten digits");
    }
    else
    { alert("form submitted successfully");}
   
});
   