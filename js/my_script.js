$(document).ready(
    function() {
    $("h1").addClass("underline");
    $("ul").addClass("border"); 
});

$( "p" ).first().click(function() {
    $( this ).fadeTo( "slow", 0.33 );
});

$("#start-button").click(function(){ 
    $('h1').addClass('color-red');
}); 

$("#start-button").hover(function(){ 
      $('#start-button').addClass('bg-lightblue');
}); 

$('#start-button').mouseenter(function(){ 
      $('question').fadeTo(1000,0.5);
}); 

$('#start-button').mouseleave(function(){ 
      $('question').fadeTo(1000,1);
});
$('#start-button').mouseleave(function(){ 
    $('question').fadeTo(1000,1);
});
