export default async function handler(req,res){
if(req.method!=='POST'){
return res.status(405).json({message:'Method not allowed'});
}

const {name,phone,message}=req.body;

if(!name||!phone||!message){
return res.status(400).json({success:false});
}

const token=process.env.TELEGRAM_TOKEN;
const chatId=process.env.TELEGRAM_CHAT_ID;

const text=`📩 PESAN BARU\n\n👤 Nama: ${name}\n📱 WA: ${phone}\n💬 Pesan: ${message}`;

try{
const telegram=await fetch(`https://api.telegram.org/bot${token}/sendMessage`,{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({chat_id:chatId,text:text})
});

const data=await telegram.json();

if(data.ok){
return res.status(200).json({success:true});
}else{
return res.status(500).json({success:false});
}
}catch{
return res.status(500).json({success:false});
}
}
