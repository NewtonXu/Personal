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
    $("#resume").addClass("hidden");
    $("#portfolioli").addClass("active");
    $("#aboutli").removeClass("active");
    $("#contactli").removeClass("active");
    $("#resumeli").removeClass("active");
    $('#portfolio').fadeIn(1);
  });
  
  $("#resumeLoad").on("click",function(){
    $("#jumbotron").addClass("hidden");
    $("#contactme").addClass("hidden");
    $("#portfolio").addClass("hidden");
    $("#about").addClass("hidden");
    $("#resume").removeClass("hidden");
    $("#portfolioli").removeClass("active");
    $("#resumeli").addClass("active");
    $("#contactli").removeClass("active");
    $("#aboutli").removeClass("active");
  });

  $("#aboutLoad").on("click",function(){
    $("#jumbotron").removeClass("hidden");
    $("#contactme").addClass("hidden");
    $("#portfolio").addClass("hidden");
    $("#about").removeClass("hidden");
    $("#resume").addClass("hidden");
    $("#portfolioli").removeClass("active");
    $("#aboutli").addClass("active");
    $("#contactli").removeClass("active");
    $("#resumeli").removeClass("active");
  });

  $("#contactLoad").on("click",function(){
    $("#jumbotron").addClass("hidden");
    $("#contactme").removeClass("hidden");
    $("#portfolio").addClass("hidden");
    $("#about").addClass("hidden");
    $("#resume").addClass("hidden");
    $("#portfolioli").removeClass("active");
    $("#aboutli").removeClass("active");
    $("#contactli").addClass("active");
    $("#resumeli").removeClass("active");
    
  });



});
