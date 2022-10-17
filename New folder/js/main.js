 var slideIndex = 1;
slideShow(slideIndex);

function nextSlide(n)
{
    slideShow(slideIndex += n);
}
function currentSlide(n)
{
    slideShow(slideIndex = n);
}
function slideShow(n)
{
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

if(n > slides.length) // such 3 
{
    slideIndex = 1;
}
if(n < 1) // such 0
{
    slideIndex = slides.length;
}

for(i=0 ; i<slides.length; i++){
    slides[i].style.display = "none";
}
for(i=0 ; i<dots.length; i++){
    dots[i].className = dots[i].className.replace("active" ," ") ;
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";

} ;

/* Start section item for mother day */


/* End section item for mother day */