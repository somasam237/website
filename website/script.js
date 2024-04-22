const searchIcon = document.querySelector(".search-icon")
const searchForm = document.querySelector(".search-from")
/*searchIcon.addEventListener( "click",() => 
    {  if(searchIcon.computedStyleMap.)
        searchForm.classList.add("active"); 
});*/

searchForm.style.right ="-250px";
searchIcon.onclick = function(){
    if(searchForm.style.right=="-250px"){
        searchForm.style.right="0";
    }
    else{
        searchForm.style.right = "-250px";
    }
}

const cartIcon = document.querySelector(".cart-icon")
const cartItemsContainer = document.querySelector(".cart-items-container")
 cartIcon.onclick = function(){
    if(cartItemsContainer.style.right=="-100%"){
        cartItemsContainer.style.right="0";
    }
    else{
        cartItemsContainer.style.right="-100%";
    }
 }
 
 /*
cartIcon.addEventListener( "click",() => 
    {cartItemsContainer.classList.add("active");
    
})
cartIcon.addEventListener( "unclick",() => 
{ cartItemsContainer.classList.remove("active");  });

const bar= document.getElementById('bar');
const nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}*/
/*for the resppnsive part, i need that when the user click on the menu icon, 
it showcase the navbar*/
const menuIcon = document.getElementById("imgMenu");
const navbar= document.querySelector(".navbar");
const contenu= document.querySelector(".contains");
menuIcon.onclick= function(){
    if(navbar.style.display=="none"){
        navbar.style.display="grid";
    }
    else{
        navbar.style.display="none";
    }
   
}
contenu.onclick= function(){
    if ( navbar.style.display=="grid"){
        navbar.style.display="none";
    }
}

  /*for the carousel on the home page*/

  function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("thumb");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
  }

 