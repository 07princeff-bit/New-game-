function loginUser(){
let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user==="admin" && pass==="1234"){
window.location="dashboard.html";
return false;
}else{
alert("Wrong Login!");
return false;
}
}

function showSection(id){
document.querySelectorAll(".section").forEach(sec=>{
sec.style.display="none";
});
document.getElementById(id).style.display="block";
}

function toggleDark(){
document.body.classList.toggle("dark");
}

function logout(){
window.location="index.html";
}
