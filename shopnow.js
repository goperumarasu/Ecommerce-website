var orderbtn = document.querySelector(".order-btn");
var orderoverlay=document.querySelector(".order-overlay");
var orderpopup=document.querySelector(".order-popup");

function order(){
    orderoverlay.style.display="block";
    orderpopup.style.display="block";
    
}
function closeorder()
{
    orderpopup.style.display="none";
    orderoverlay.style.display="none";
}