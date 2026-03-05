
let cart=JSON.parse(localStorage.getItem("cart")||"[]")

function save(){
localStorage.setItem("cart",JSON.stringify(cart))
update()
}

function addItem(name,price,qty){
cart.push({name,price,qty})
save()
}

function update(){

let total=0
let count=0

cart.forEach(i=>{
total+=i.price*i.qty
count+=i.qty
})

const badge=document.getElementById("cartBadge")
if(badge) badge.innerText=count

const list=document.getElementById("cartList")
if(list){

list.innerHTML=""

cart.forEach((i,index)=>{

list.innerHTML+=`
<div>
${i.name} × ${i.qty} : Rp ${i.price*i.qty}
<button onclick="removeItem(${index})">x</button>
</div>`

})

document.getElementById("total").innerText=total
}

}

function removeItem(i){
cart.splice(i,1)
save()
}

function clearCart(){
cart=[]
save()
}

function checkout(){

let text="Pesanan:%0A"

cart.forEach(i=>{
text+=`${i.name} x${i.qty}%0A`
})

window.open("https://wa.me/?text="+text)

}

window.onload=update
