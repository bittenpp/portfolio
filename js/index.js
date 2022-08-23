

if($('body').attr('name') == 'index'){
    $('.con').addClass('active');
    setTimeout(function(){
        let pg3 = $('.pg3').offset().top - $('header').height();
        $('.con').removeClass('active');

        $('.menu a').eq(0).on('click',function(){
            $('html').animate({
                scrollTop:pg3
            },1000)
        });
    
        if(location.hash == '#WORKS'){
            $('html').animate({
                scrollTop:pg3
            },800)
        }
    },800);

}


$('.menu a').eq(3).on('click',function(){
    event.preventDefault();
    let end = $('html').height() - $(window).height();
    console.log(end)
    $('html').animate({
        scrollTop:end
    },800)
});


$('.pg2 a').eq(0).on('click',function(){
    event.preventDefault();
    $('html').animate({
        scrollTop:$('.pg3').offset().top
    },800)
});


// $('.arw').on('click',function(){
//     event.preventDefault();
//     $('html').animate({
//         scrollTop:$('.pg1').offset().top 
//     },2500)
// });


$('.arw').on('click',function(){
    event.preventDefault();
    let stt = $('.pg1').offset().top - $(window).height();
    $('html').animate({
        scrollTop:stt
    },2000)
});

// $('.top a').on('click',function(){
//     event.preventDefault();
//     $('html').animate({
//         scrollTop:$('.pg1').offset().top 
//     },2000)
// });

$('.top a').on('click',function(){
    event.preventDefault();
    let stt = $('.pg1').offset().top - $(window).height();
    $('html').animate({
        scrollTop:stt
    },1000)
});


// $('.menu a').eq(0).on('click'.pageMove);
// function pageMove(){
//     let idx = $(this).index();

//     let indexTop = $('.pg3').offset().top;
//     $('html').animate({scrollTop:indexTop},600);
// }



let pgOffset = [
    $('.pg2').offset().top,
    $('.pg3').offset().top,
    $('.pg4').offset().top,
    $('.pg5').offset().top,
    $('.pg6').offset().top
];


$(window).on('scroll',function(){
    $('.con').each(function(i){
        if(pgOffset[i] - $(window).height() < $(window).scrollTop() ){
            $(this).addClass('active');
        }
    })
    

})

// ======================================
// scroll down시 페이지 이동 

// window.addEventListener("wheel",function(e){
//     e.preventDefault();
// }, {passive:false});

// var $html = $("html");
// var page = 1;
// var lastPage = $("html").length;
// $html.animate({scrollTop:0},10);

// $(window).on("wheel",function(e){

//     if($html.is(":animated"))return;
    
//     if(e.originalEvent.deltaY > 0){
//         if(page==lastPage) return;
//         page++;
//     }else if(e.originalEvent.deltaY < 0){
//         if(page==1) return;
//         page--;
//     }
//     var posTop = (page-1) * $(window).height();
//     $html.animate({scrollTop : posTop});
// });

// ==================================