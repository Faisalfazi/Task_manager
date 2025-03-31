cont=document.querySelector(".cont")
hd=document.querySelector(".hidden");
sn=document.querySelector(".show");
bb=document.querySelector(".box");
function box()
{ 
    sn.style.visibility="hidden"
    hd.style.visibility="visible"
    bb.style.visibility="visible"
}
function cancel()
{
    sn.style.visibility="hidden"
    hd.style.visibility="hidden"
    bb.style.visibility="hidden"
    document.getElementById("name").value=""
    document.getElementById("desc").value=""
    document.getElementById("dt").value=""
}
document.getElementById("name").addEventListener("change",(event)=>{
    event.target.style.border="0"
})
document.getElementById("desc").addEventListener("change",(event)=>{
    event.target.style.border="0"
})
document.getElementById("dt").addEventListener("change",(event)=>{
    event.target.style.border="0"
})
function add()
{
    if(document.getElementById("name").value!="" && document.getElementById("desc").value!="" && document.getElementById("dt").value!="" )
    {
        name=document.getElementById("name").value
        desc=document.getElementById("desc").value
        dt=document.getElementById("dt").value
        ar=dt.split("T")
       bx=document.createElement("div")
        bx.className="cd"
        bx.innerHTML=`<button class="db" onclick="show(this)")><div class="d1"><h1>${name}</h1></div>`+`<p class="desc" style="display:none;">${desc}</p>`+`<div class="d2"><b class="bo1">${ar[0]}</b><b class="bo2" style="text-align:center">${ar[1]}</b></div>`+
        `<div class="d3"><b id="st">Pending</b></div></button><div class="bt1"><button onclick="del(this)">Delete</button></div>`
        cont.appendChild(bx)
        cancel()
    }
    else{
       if(document.getElementById("name").value=="")
       {
        document.getElementById("name").style.border="2px solid red"
       }
       if(document.getElementById("desc").value=="")
        {
         document.getElementById("desc").style.border="2px solid red"
        }
        if(document.getElementById("dt").value=="")
        {
             document.getElementById("dt").style.border="2px solid red"
        }
    }
}
cur=""
function show(e)
{
    cur=e
    d11=e.querySelector(".d1").querySelector("h1").textContent
    d22=e.querySelector("p").textContent
    sn.style.visibility="visible"
    hd.style.visibility="visible"
    bb.style.visibility="hidden"
    console.log(d22)
    sn.querySelector(".r1").querySelector("#name").value=d11;
    sn.querySelector(".r2").querySelector("#desc").value=d22;
}
function update()
{
    cur.querySelector(".d1").querySelector("h1").textContent=sn.querySelector(".r1").querySelector("#name").value;
    cur.querySelector("p").textContent=sn.querySelector(".r2").querySelector("#desc").value;
   if(sn.querySelector('input[name="rd"]:checked').value=="Completed")
   {
    cur.querySelector("#st").textContent="Completed"
    cur.querySelector("#st").style.color="rgb(68, 226, 147)"
   }
   else
   {
    cur.querySelector("#st").textContent="Pending"
    cur.querySelector("#st").style.color="white"
   }
    sn.style.visibility="hidden"
    hd.style.visibility="hidden"
    bb.style.visibility="hidden"
}
function del(e)
{
    e.parentElement.parentElement.remove()
}