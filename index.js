let input = document.querySelector(".input");
let keys = document.querySelectorAll(".key");
let equalto = document.querySelector(".equal");
let deleteAll = document.querySelector(".ac");
let deleteOne = document.querySelector(".del");

keys.forEach(button=>{
    button.addEventListener("click",()=>{
        input.value += button.value;
        
    });
});

equalto.addEventListener("click",()=>{
    input.value = eval(input.value);
})

deleteAll.addEventListener("click",()=>{
    input.value="";
});

deleteOne.addEventListener("click",()=>{
    input.value=input.value.slice(0,-1);
});