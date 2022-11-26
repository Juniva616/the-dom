$('p').click(function(){
    $('p').slideToggle('slow');
});

$('button').mouseenter(function(){
    $(this).removeClass('makeRed').addClass('makeBlue');
});