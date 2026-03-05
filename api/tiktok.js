
export default async function handler(req,res){

const url=req.query.url
const apikey=process.env.TIKTOK_APIKEY

const r=await fetch(`https://api.botcahx.eu.org/api/dowloader/tiktok?url=${url}&apikey=${apikey}`)
const data=await r.json()

res.json(data)

}
