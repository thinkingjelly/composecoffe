$(document).ready(function(){
    $('.slider').slick({
      dots:false,
      arrows:false,
      infinite:false,
      speed:300,
      slidesToShow:2,
      slidesToScroll:1,
    })
    //햄버거메뉴
    $('.menuPop').hide();
    
    $('.panel').click(function(){
        $('.menuPop').show();
    });
    
    $('.closeBtn').click(function(){
        $('.menuPop').hide();
    });
});