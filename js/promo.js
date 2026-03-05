
const promoBtn=document.getElementById("promoButton")
const promoOverlay=document.getElementById("promoOverlay")

promoBtn.onclick=()=>{
promoOverlay.style.display="flex"
}

promoOverlay.onclick=(e)=>{
if(e.target===promoOverlay){
promoOverlay.style.display="none"
}
}
