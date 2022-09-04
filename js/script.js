$(document).ready(function() {
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true,
  });
});

// $(document).on("click", "nav a", function(e) {
//   e.preventDefault();
//   var id  = $(this).attr('href');
//   var top = $(id).offset().top; // получаем координаты блока
//   $('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
// });

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('.body').toggleClass('lock');
  });
  $('.header__link').click(function(event) {
    $('.header__burger,.header__menu').removeClass('active');
  });
});
