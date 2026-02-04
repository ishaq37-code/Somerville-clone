const menubtn=document.getElementById("menu-icon-btn");
const offcanvas=document.querySelector(".off-canvas .wrapper");
const closebtn=document.getElementById("close")


const menuAnmi= gsap.timeline(

)
menuAnmi.pause()
menuAnmi.from(".off-canvas .wrapper nav ",{
   y:50,
   duration:0.3,
   opacity:0,
   stagger:1
});

menuAnmi.from(".contact-info",{
   y:70,
  
  
   opacity:0
});
menuAnmi.from(".canvas-button ",{
   y:70,
  
  
   opacity:0
});
let menuc= false;

menubtn.addEventListener("click",()=>{
 menuAnmi.restart();
  offcanvas.classList.add("active")
});
closebtn.addEventListener("click",()=>{
    offcanvas.classList.remove("active")
});
