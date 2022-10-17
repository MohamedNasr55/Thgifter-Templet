
/* Start section item */


var imgList = document.querySelectorAll(".item img");
var imgArray = [];
var lightboxItem = document.getElementById("lightbox-item");
var lightboxContainer = document.getElementById("lightbox-container");
var currentSlideIndex = 0;
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");

for(var i=0 ; i <imgList.length ; i++)
{

    imgArray.push(imgList[i]);

    imgList[i].addEventListener("click" , function(e){
        
        currentSlideIndex =  imgArray.indexOf(e.target);//2
    
        var imgSrc = e.target.getAttribute("src"); 
        lightboxContainer.style.display = "flex";
        lightboxItem.style.backgroundImage = "url("+imgSrc+")";

    })
}




function nextSlide()
{
    currentSlideIndex++;//9
    if(currentSlideIndex == imgArray.length)//9
    {
        currentSlideIndex = 0;
    }
    var imgSrc = imgArray[currentSlideIndex].getAttribute("src");
    lightboxItem.style.backgroundImage= "url("+imgSrc+")";
}
function prevSlide()
{
    currentSlideIndex--;  
    if(currentSlideIndex < 0)
    {
        currentSlideIndex = imgArray.length -1;
    }
    var imgSrc = imgArray[currentSlideIndex].getAttribute("src");
    lightboxItem.style.backgroundImage= "url("+imgSrc+")";
}
function closeSlide()
{
    lightboxContainer.style.display = "none";
}
nextBtn.addEventListener("click" , nextSlide);
prevBtn.addEventListener("click" , prevSlide);
closeBtn.addEventListener("click" , closeSlide);
document.addEventListener("keydown" , function(e){

    if(e.keyCode == 39)//ArrowRight//37//27
    {
        nextSlide();
    }
    else if(e.keyCode  == 37)//ArrowLeft
    {
        prevSlide();
    }
    else if(e.keyCode == 27 )//Escape
    {
        closeSlide();
    }
})


lightboxContainer.addEventListener("click" , function(e){
  
    if(e.target == lightboxItem || e.target == nextBtn || e.target == prevBtn)
    {
        return false;
    }
    closeSlide();
})
/* End section item */

/* start section (navbar)*/

let scroll1 = $("#show").offset().top;
 $(window).scroll(function()
{
    let scroll2 =$(window).scrollTop();
    if( scroll2 > scroll1)
    {

        $("#butUp").fadeIn(3000),
        $("#navbar").css("backgroundColor","rgba(0, 0, 0,0.5)",
        $(".navbar-light .navbar-nav .nav-link").css("color","#FFF"));
       
   

    }else{
        $("#navbar").css("backgroundColor","rgb(255, 255, 255)"),
        $(".navbar-light .navbar-nav .nav-link").css("color"," rgba(182, 175, 174, 0.753)"),
        $("#butUp").fadeOut(1000);
       
    }
    });

/* section button up */
$("#butUp").click(function(){
    $("html,body").animate({scrollTop:'0'},2000)
})
/* section button up */

/* End section (navbar)*/

/* start section (slider-prodect)*/
let scrol22 = $(".slider-prodect").offset().top;
 $(window).scroll(function()
{
    let scrol33 =$(window).scrollTop();
    if( scrol33 > scrol22)
    {

        $(".slider-prodect").fadeIn(4000);
    
   

    }
});
/* End section (slider-prodect)*/
 
/* start section (Personal products)*/
let scrollSeal = $(".alls").offset().top;
 $(window).scroll(function()
{
    let wScroll =$(window).scrollTop();
    if( wScroll > scrollSeal)
    {

        $("#slid-gifter").fadeIn(4000);
    
   

    }
});
/* End section (Personal products)*/
 
 
 




