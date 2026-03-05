
export default async function handler(req,res){

const {name,phone,message}=req.body

const token=process.env.TELEGRAM_TOKEN
const chat=process.env.TELEGRAM_CHAT_ID

await fetch(`https://api.telegram.org/bot${token}/sendMessage`,{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
chat_id:chat,
text:`Pesan Website

Nama: ${name}
WA: ${phone}
Pesan: ${message}`
})
})

res.json({success:true})

}
