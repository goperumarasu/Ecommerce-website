var submitbtn = document.querySelector(".submit-btn");
var submitoverlay=document.querySelector(".submit-overlay");
var submitpopup=document.querySelector(".submit-popup");

function submitted(){
    submitoverlay.style.display="block";
    submitpopup.style.display="block";
    
}
function closesubmit()
{
    submitpopup.style.display="none";
    submitoverlay.style.display="none";
}