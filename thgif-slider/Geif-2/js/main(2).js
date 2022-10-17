/*start for section 1 */
$(".bot-nav").click(function(){
    $(".side-nav").css({"display":"block"})
     
   
})
//
$(".bot-nav").click(function(){
    $(".bot-nav").css({"left":"28%"})
})
//
$("#closes").click(function(){
    $(".side-nav").css({"display":"none"})
})
//
$("#closes").click(function(){
    $(".bot-nav").css({"left":"10px"})
})

/* End for scetion 1 */


/* start for section 2 */

$("#one").click(function(){
 $("#one-p").slideToggle(700);})

$("#tow").click(function(){
 $("#tow-p").slideToggle(700);})

$("#three").click(function(){
 $("#three-p").slideToggle(700);})

$("#four").click(function(){
 $("#four-p").slideToggle(700);})
 
/* End  for section 2 */

/* Start counter section */

//start seacand
let calcolet = 0;

function calco(){
    calcolet ++;
    if(calcolet == 1000000){
        clearInterval(x);
    }

    document.getElementById("seacand").innerHTML = calcolet +"-S";
}

let x =setInterval(calco,10);

//start manets
let calcolet1 = 0;

function calco1(){
    calcolet1 ++;
    if(calcolet1 == 10000){
        clearInterval(x1);
    }

    document.getElementById("manets").innerHTML = calcolet1 +"-M";
}

let x1 =setInterval(calco1,1000);

//start huor
let calcolet2 = 0;

function calco2(){
    calcolet2 ++;
    if(calcolet2 == 10000){
        clearInterval(x2);
    }

    document.getElementById("huor").innerHTML = calcolet2 +"-H";
}

let x2 =setInterval(calco2,60000);

//start day
let calcolet3 = 0;

function calco3(){
    calcolet3 ++;
    if(calcolet3 == 10000){
        clearInterval(x3);
    }

    document.getElementById("day").innerHTML = calcolet3 +"-D";
}

let x3 =setInterval(calco3,1440000);

/* End counter section */

/* start section form */

let cont1 =100;

function contNwe()
{
   cont1--;
   
   
    document.getElementById("for-text").innerHTML = cont1;

  
}

let textAr = document.getElementById("cont-text");

     textAr.addEventListener("keyup",function(){
        contNwe();
        if(cont1===0)
        {
            document.getElementById("for-text").innerHTML ="your available character finished"
        }
     

    else{
          return;
        }
     });


/* End section form */