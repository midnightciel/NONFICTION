 (function(){

   // header js start ---------


   // header hover 이벤트
    const hover1El = document.querySelector('.header_header .gnb .hover_1');
    const hover2El = document.querySelector('.header_header .gnb .hover_2');
    const sub1El = document.querySelector('.header_header .sub_1')
    const sub2El = document.querySelector('.header_header .sub_2')

    // console.log(click1El);
    const overEvent = () => {
      sub1El.classList.add('sub_active');
    }
    hover1El.addEventListener('mouseover', overEvent);

    const outEvent = () => {
      sub1El.classList.remove('sub_active');
    }
    hover1El.addEventListener('mouseout', outEvent);

    const over2Event = () => {
      sub2El.classList.add('sub_active');
    }
    hover2El.addEventListener('mouseover', over2Event);

    const out2Event = () => {
      sub2El.classList.remove('sub_active');
    }
    hover2El.addEventListener('mouseout', out2Event);
 
    
    // header language hover 이벤트
    const languageEl = document.querySelector('.language');
    const language_downEl = document.querySelector('.language_down')

    const clickHandler = (e) => {
      e.preventDefault();
      language_downEl.classList.toggle('language_active');
    }
    languageEl.addEventListener('click', clickHandler);
    
    
    //1024px 햄버거 메뉴 클릭했을 때 이벤트

    if (matchMedia("screen and (max-width: 1024px)").matches) {
    
      // window.onresize = function(){
      //     document.location.reload();
      //   }

    const openEl = document.querySelector('.header_header .mo_menu');
    const pcHeaderEl = document.querySelector('.header_header');
    const moHeaderEl = document.querySelector('.mo_header');
    const closeEl = document.querySelector('.img_active');
    const gnbEl = document.querySelector('.gnb_active');

    const openHandler = () => {
      pcHeaderEl.style.visibility = 'hidden';
      moHeaderEl.style.visibility = 'visible';
      gnbEl.classList.add('gnb_active_left');
      // console.log(gnbEl)
    }

    openEl.addEventListener('click', openHandler);

    const closeHandler = () => {
      pcHeaderEl.style.visibility = 'visible';
      moHeaderEl.style.visibility = 'hidden';
      gnbEl.classList.remove('gnb_active_left');

    }
    

    closeEl.addEventListener('click', closeHandler);
  }else{
    // window.onresize = function(){
    //   document.location.reload();}

  }

    //1024px 햄버거 메뉴 클릭했을 때 (laguage 클릭) 이벤트
    const moLanguage = document.querySelector('.mo_language');
    const moLanguage_down = document.querySelector('.mo_language_down');

    const languageEvent = (e) => {
      e.preventDefault();
      moLanguage_down.classList.toggle('mo_language_down_active');
    }
    moLanguage.addEventListener('click', languageEvent);




    // 햄버거메뉴로 변경됐을 때, 이벤트



    //헤더 스크롤 했을 때 이벤트--------------
    $(window).on('scroll',function(){
      if($(window).scrollTop()){
          $('.header_header').addClass('header_fix');
          $('.header_header .gnb > li > a').addClass('text_active');
          $('.shoppingbag li > a').addClass('text_active');
          $('.header_header .shoppingbag .language .img').addClass('arrow_black');
          $('.header_header .logo').addClass('logo_black');
          $('.mo_menu .img').addClass('img_active');
          $('.mo_shopping .login_img').addClass('login_active');
          $('.mo_shopping .cart_img').addClass('cart_active');

      }else{
          $('.header_header').removeClass('header_fix');
          $('.header_header .gnb > li > a').removeClass('text_active');
          $('.shoppingbag li > a').removeClass('text_active');
          $('.header_header .shoppingbag .language .img').removeClass('arrow_black');
          $('.header_header .logo').removeClass('logo_black');
          $('.mo_menu .img').removeClass('img_active');
          $('.mo_shopping .login_img').removeClass('login_active');
          $('.mo_shopping .cart_img').removeClass('cart_active');
      }
    });

    // header js end ---------

    var bullet = ['슬라이드1', '슬라이드2', '슬라이드3'];
    var swiper = new Swiper('.swiper-container', {
      centeredSlides: true,    //센터모드
      autoplay: {     //자동슬라이드 (false-비활성화)
        delay: 3000, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
        },
      loop : true,   // 슬라이드 반복 여부
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<div class="' + className + '"><span>' + '</span></div>';
        }
      },
    });
    // section_1 슬라이드 이벤트 

   
  var swiper2El = new Swiper(".mySwiper", {
      spaceBetween: 30,    // 슬라이드 사이 여백
      slidesPerView : 'auto',
      // autoplay: {     //자동슬라이드 (false-비활성화)
      //   delay: 2500, // 시간 설정
      //   disableOnInteraction: false, // false-스와이프 후 자동 재생
      // },
      loop : true,
      loopAdditionalSlides : 1,
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // 화면의 넓이가 320px 이상일 때
     
      320: {
      slidesPerView: 1,
      spaceBetween: 20
      },
       // 화면의 넓이가 320px 이상일 때
     
       767: {
        slidesPerView: 2,
        spaceBetween: 20
        },
      // 화면의 넓이가 640px 이상일 때

      1024: {
      slidesPerView: 3,
      spaceBetween: 25
      }

  }
  });
  // section_2 end 

  $('.section_5 .sec5_con').mouseover(function(){
    $(this).find('p>a').addClass('on');
  }); 
  $('.section_5 .sec5_con').mouseout(function(){
    $(this).find('p>a').removeClass('on');
  });
    

      

  })();
