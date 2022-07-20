$(function(){

    //스크롤
    $(window).scroll(function(){
        curr = $(window).scrollTop(); 

        if (curr > 0) {
            $(".header-area").addClass('white');
        } else {
            $('.header-area').removeClass('white');
        }
    })


    //메인비주얼
    var swiper = new Swiper(".sc-visual .swiper", {
            effect:'fade',
            pagination: {
              el: ".sc-visual .swiper-pagination",
            },
      });

    var swiper = new Swiper(".ad-top", {
            effect:'fade',          
      });

    
    //close
    $('.category').click(function(e){
        e.preventDefault();
        $(".side-menu").addClass('on');
        $('body').addClass('hidden')
    })
    $('.close,.dimmed').click(function(e){
        e.preventDefault();
        $(".side-menu").removeClass('on');
        $('body').removeClass('hidden')
    })


    //side-menu
    $('.btn-depth1').click(function(e){
        e.preventDefault();
        $(this).siblings('.sub-list').stop().slideToggle();
        $(this).toggleClass('up');
        
    })


    //gnb-area
    $('.nav-area .btn-row').click(function(){ 
        $('.nav-area .gnb-list, .nav-area .txt').toggleClass('hide');  
        $('.nav-area .bottom-gnb-box').stop().slideToggle();
        $(this).toggleClass('on');
      
    })


   //product
   var swiper = new Swiper(".product-wrap", {
    slidesPerView: 2.2,
    spaceBetween: 10,
    pagination: {
      el: ".lwffings-list",
      clickable: true,
    },
  });
   
})//끝