
document.getElementById("send")?.addEventListener("click",async()=>{

const name=document.getElementById("name").value
const phone=document.getElementById("phone").value
const message=document.getElementById("message").value

await fetch("/api/send",{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({name,phone,message})
})

alert("Pesan terkirim ke owner")
})
