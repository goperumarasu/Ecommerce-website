
var collection=document.querySelector(".collections-container");
var productlist=collection.querySelectorAll("div");
var search=document.querySelector(".search");

search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase();
    for(i=0;i< productlist.length;i++){
        var productname=productlist[i].querySelector("h2").textContent;
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[i].style.display="none";
        }
        else{
            productlist[i].style.display="block";
        }
    }
})
