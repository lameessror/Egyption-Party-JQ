/// <reference types="../@types/jquery" />

$(".openSideBar").on("click" , function(){
    $(".openSideBar").css("left" , "250px")
    $("#leftSideMenue").css("left" , "0")
    
})

$(".closeBtn").on("click" ,function(){
    $("#leftSideMenue").css("left" , "-250px")
    $(".openSideBar").css("left" , "30px")
} )




$("#Duration h3").on("click" , function(){
    $(this).next().slideToggle();
    $(".durationText").not($(this).next()).slideUp();
})



$("textarea").on("keyup" , function(){
    let elementLength = $("textarea").val().length;
    $("#num").text( 100 - elementLength <= 0 ? "your available character finished" : 100 - elementLength)
    
})


window.onload = function() {
   
    countDown("10 febrauary 2024 9:56:00");
  }

  function countDown(x) {
  
        let futureDate = new Date(x);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDown(x); }, 1000);
  }

// let sectionOffset = $("#Duration").offset().top;

$("a").on("click" , function(e){
    let aHref = e.target.getAttribute("href")
    let sectionOffset = $(aHref).offset().top;
    $("html").animate({scrollTop: sectionOffset} , 2000)
})