

$('.menu a').eq(3).on('click',function(){
    event.preventDefault();
    $('html').animate({
        scrollTop:$('.ftr').offset().top
    },800)
});