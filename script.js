//page loading
$body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
     ajaxStop: function() { $body.removeClass("loading"); }
});

//page switcher 

$(document).ready(function() {


  $("#portfolioLoad").on("click",function(){
    $("#jumbotron").addClass("hidden");
    $("#contactme").addClass("hidden");
    $("#portfolio").removeClass("hidden");
    $("#about").addClass("hidden");
    $("#portfolioli").addClass("active");
    $("#aboutli").removeClass("active");
    $("#contactli").removeClass("active");
    $('#portfolio').fadeIn(1);
  });

  $("#aboutLoad").on("click",function(){
    $("#jumbotron").removeClass("hidden");
    $("#contactme").addClass("hidden");
    $("#portfolio").addClass("hidden");
    $("#about").removeClass("hidden");
    console.log("hi");
    $("#portfolioli").removeClass("active");
    $("#aboutli").addClass("active");
    $("#contactli").removeClass("active");
  });

  $("#contactLoad").on("click",function(){
    $("#jumbotron").addClass("hidden");
    $("#contactme").removeClass("hidden");
    $("#portfolio").addClass("hidden");
    $("#about").addClass("hidden");
    console.log("hi");
    $("#portfolioli").removeClass("active");
    $("#aboutli").removeClass("active");
    $("#contactli").addClass("active");
  });



});
