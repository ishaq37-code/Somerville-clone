const butons= document.querySelectorAll(".btn");

butons.forEach((btn,idx)=>{
    btn.addEventListener("click",()=>{
        const journalTab= document.querySelectorAll(".all-tab");

        butons.forEach(btn =>{
              btn.classList.remove("active")
        });
        btn.classList.add("active");

        journalTab.forEach(details=>{
            details.classList.remove("active")
        })
        journalTab[idx].classList.add("active")
    });
    

})

