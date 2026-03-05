
const menuBtn=document.getElementById("menuBtn")
const sidebar=document.getElementById("sidebar")
const overlay=document.getElementById("sidebarOverlay")

menuBtn.onclick=()=>{
sidebar.style.left="0"
overlay.style.display="block"
}

overlay.onclick=()=>{
sidebar.style.left="-240px"
overlay.style.display="none"
}
