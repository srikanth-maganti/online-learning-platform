


let user=document.querySelector("#user");
let pass=document.querySelector("#pass");

user.addEventListener("change",()=>{
    let x=user.value;
    if(x.length<8)
    {
        alert("username should be 8 characters");
    }
    else(user.value!="" && pass.value!="")
    {
        let button=document.querySelector(".btn");
        button.classList.add("new");
    }
    
});
pass.addEventListener("change",()=>{
    let x=user.value;
    if(x.length<8)
    {
        alert("username should be 8 characters");
    }
    else(user.value!="" &&  pass.value!="")
    {   console.log("hello");
        let buttons=document.querySelectorAll(".btn");
        for(button of buttons)
        {
            button.classList.add("new");
        }
       
    }
});


let form =document.querySelector("form");
form.addEventListener("submit",()=>{
    alert("form submitted successfully");
});
   
   


