const menubtn=document.getElementById("menu-icon-btn");
const offcanvas=document.querySelector(".off-canvas .wrapper");
const closebtn=document.getElementById("close")
menubtn.addEventListener("click",()=>{
    offcanvas.classList.add("active")

})
closebtn.addEventListener("click",()=>{
    offcanvas.classList.remove("active")
})
const vedio = document.getElementById("vedio-hero");
const playbtn = document.getElementById("playIcon");
const pausebtn = document.getElementById("pauseIcon");
const vedioBtn = document.getElementById("videoBtn");

vedioBtn.addEventListener("click", () => {
 if(vedio.paused){
    vedio.play();
    playbtn.style.display="none";
    pausebtn.style.display="inline-flex";
 }
 else{
    vedio.pause()
    pausebtn.style.display="none";
    playbtn.style.display="inline-flex";
 }
});
