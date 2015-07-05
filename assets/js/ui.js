/**
yzg - 0.1.0
http://xinxianjupin.com
Copyright (c) 2015 hzb
License: MIT
*/


jQuery(document).ready(function() {  

		
  var mySwiper = $('#test').swiper({
    //Your options here:
    mode:'vertical',
    loop: false,
    pagination: '.pagination',
    grabCursor: true,
    paginationClickable: true
  });

  $('.arrow-prev').on('click', function(e){
    e.preventDefault()
    mySwiper.swipePrev()
  })

  $('.arrow-next').on('click', function(e){
    e.preventDefault()
    mySwiper.swipeNext()
  })

	
});


jQuery(document).ready(function() {  

  // banner
  var productDetailSwiper = $('.swiper-product-detail').swiper({
    mode:'horizontal',
    loop: true,
    pagination: '.pagination',
    grabCursor: true,
    paginationClickable: true

  });

  var mallbannerSwiper = $('.swiper-agent-mall-index-banner').swiper({
    mode:'horizontal',
    loop: true,
    pagination: '.pagination',
    grabCursor: true,
    cssWidthAndHeight: 'height',
    paginationClickable: true
  });
  
  //join-us

  var pdSwiper = $('#pd').swiper({
    mode:'vertical',
    loop: false,
    grabCursor: true,
    paginationClickable: true

  });
  $('#pd .arrow-next').on('click', function(e){
    e.preventDefault()
    pdSwiper.swipeNext()
  })



  // swiper-carousel
  var carouselSwiper = $('.swiper-carousel').swiper({
    mode:'horizontal',
    loop: true,
    pagination: '.pagination',
    grabCursor: true,
    cssWidthAndHeight: 'height',
    paginationClickable: true
  });



  // tab2

  // tab2-content
  var tabsContent2Swiper = new Swiper('.swiper-tabs-content-2',{
    speed:500,
    cssWidthAndHeight: 'height',
    onSlideChangeStart: function(){
      $(".swiper-tabs-nav-2 .active").removeClass('active')
      $(".swiper-tabs-nav-2 .box-link").eq(tabsContent2Swiper.activeIndex).addClass('active') 
      // container height
      var s_height =$(tabsContent2Swiper.activeSlide()).height();
      $(tabsContent2Swiper.container).height(s_height);
    }
  })
  // tab2
  $(".swiper-tabs-nav-2 .col-table-cell").on('touchstart mousedown',function(e){
    e.preventDefault()
    $(this).find('.box-link').removeClass('active')
    // $(".swiper-tabs-nav-2 a").removeClass('active')
    $(this).find('.box-link').addClass('active')
    tabsContent2Swiper.swipeTo( $(this).index() )
  })
  $(".swiper-tabs-nav-2 .box-link").click(function(e){
    e.preventDefault()
  })



  //swiper-tabs
  var tabsNav1Swiper = $('.swiper-tabs-nav').swiper({
    mode:"horizontal",
    visibilityFullFit: true,
    slidesPerView:'auto',
    onSlideClick: function(){
      tabsContent1Swiper.swipeTo( tabsNav1Swiper.clickedSlideIndex )
    }
  })
  var tabsContent1Swiper = $('.swiper-tabs-content').swiper({
    mode:"horizontal",
    cssWidthAndHeight:'height',
    onSlideChangeStart: function(){
      updateTabsNav1Position()
      // height:slide高度=container高度
      var s_height =$(tabsContent1Swiper.activeSlide()).height();
      $(tabsContent1Swiper.container).height(s_height);
    }
    
  })
 function updateTabsNav1Position(){
   $('.swiper-tabs-nav .active-nav').removeClass('active-nav')
   var activeNav = $('.swiper-tabs-nav .swiper-slide').eq(tabsContent1Swiper.activeIndex).addClass('active-nav')
   if (!activeNav.hasClass('swiper-slide-visible')) {
     if (activeNav.index()>tabsNav1Swiper.activeIndex) {
       var thumbsPerNav = Math.floor(tabsNav1Swiper.width/activeNav.width())-1
       tabsNav1Swiper.swipeTo(activeNav.index()-thumbsPerNav)
     }
     else {
       tabsNav1Swiper.swipeTo(activeNav.index())
     } 
   }
 }

});



jQuery(document).ready(function() {  
		
		// shoping car toggle checked
		$( ".checkcube" ).click(function() {
		  $( this ).toggleClass("checked");
		});

		$( ".fake-a" ).click(function(event) {
			event.stopPropagation();
		  	var url=$(this).data('href');
		  	if(url==""){
		  		//alert(1);
		  	}else{
		  		//alert(2);
		  		//alert(url);
		  		window.location.href=url;
		  	}
		  	event.preventDefault();
		});
		$('.modal>.row-table>.col-table-cell').click(function(event){
			if(event.target == this){      
				$(this).parents('.modal').modal('hide');   
			}


		})
		
});
