
async function downloadTikTok(){

const url=document.getElementById("ttlink").value

const res=await fetch("/api/tiktok?url="+encodeURIComponent(url))
const data=await res.json()

if(data.status){

document.getElementById("result").innerHTML=
`<video controls width="100%">
<source src="${data.result.video[0]}">
</video>
<a class="btn" href="${data.result.video[0]}" download>Unduh Video</a>`

}else{
alert("Terjadi kesalahan")
}

}
