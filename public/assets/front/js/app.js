var wWidth = $(window).width();
$(window).on("load", function () {
  $("#preloader").fadeOut();
})

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

const homeCarousel = new Swiper('.homeCarousel', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
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