function love(){

document.getElementById("msg").innerHTML =
"Thank you Trishu ❤️ I promise main tumhe ignore nahi karunga 🤗";

}

function run(){

let x = Math.random()*window.innerWidth;
let y = Math.random()*window.innerHeight;

document.getElementById("no").style.left = x + "px";
document.getElementById("no").style.top = y + "px";

}

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";
heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{
heart.remove()
},5000)

},300)
