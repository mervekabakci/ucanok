var wWidth = $(window).width();
$(window).on('load', function () {
  if ($('.preloader').length) {
    $('.preloader').remove();
  }
});

document.addEventListener('scroll', function() {
  var header = document.getElementById('header');

  if (window.scrollY > 0) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});
//Animasyonlar icin aos init kullaniliyor
AOS.init({
  offset: 50,
  easing: 'ease',
  once: true,
});


$(".navMenuButton").on("click", function () {
  $(this).toggleClass("active");
  $("header").toggleClass("active");
  $("body").toggleClass("overflow-hidden")
})
console.log(wWidth)
if (wWidth <= 992) {
  $("header .subMenu").slideUp();

  $("header nav .menuItem").on("click", function () {
    $(this).toggleClass("active");
    if ($(this).children(".subMenu")) {
      $(this).children(".subMenu").slideToggle();
    }
  })
}


/**Tab Js 
 * 
 * 
 * 
*/
$(".tabContent").children(".tabsContent").parent().addClass("submain");

$(".tabsTitle > .tabButton").click(function () {
  var $elemnt = $(this),
    $indis = $(this).index(),
    $tab = $elemnt.siblings(),
    $content = $tab.parent().siblings().children();

  $tab.removeClass("active");
  $elemnt.addClass("active");

  $content.removeClass("active");
  $content.eq($indis).addClass("active");
});
/**Tab js end
 * 
 * 
 */
var homeCarousel = new Swiper('.homeCarousel', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-paginationCarousel',
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    // when window width is >= 992px
    992: {
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }
});

var calismaSlider = new Swiper(".calismaSlider", {
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centerMode: true,
  loop: true,
  spaceBetween: 55,
  navigation: {
    nextEl: '.swiper-calisma-next',
    prevEl: '.swiper-calisma-prev',
  },
  breakpoints: {
    // when window width is >= 
    481: {
      slidesPerView: 1.5,
      centerMode: false,
    },
    670: {
      slidesPerView: 2,
      centerMode: false,
    },
    992: {
      slidesPerView: 2.36,
      centerMode: false,
    },
    1280: {
      slidesPerView: 2.76,
      centerMode: false,
    }
  }
});