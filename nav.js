const home=document.getElementById("homes");
const serve=document.getElementById("services");
const about=document.getElementById("abou");
const con=document.getElementById("contact");
const h=document.getElementById("ho");
const serv=document.getElementById("ser");
const abou=document.getElementById("ab");
const co=document.getElementById("c");
const j=document.getElementById("j");
home.addEventListener("click",()=>{
    h.style.display="block";
    serv.style.display="none";
    abou.style.display="none";
    co.style.display="none";
    j.style.display="none";
})
serve.addEventListener("click",()=>{
    h.style.display="none";
    serv.style.display="block";
    abou.style.display="none";
    co.style.display="none";
     j.style.display="none";
})
about.addEventListener("click",()=>{
    h.style.display="none";
    serv.style.display="none";
    abou.style.display="block";
    co.style.display="none";
     j.style.display="none";
})
con.addEventListener("click",()=>{
    h.style.display="none";
    serv.style.display="none";
    abou.style.display="none";
    co.style.display="block";
     j.style.display="none";
})
