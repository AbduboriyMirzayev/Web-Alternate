$(".clients__slider").slick({
  slidesToShow: 4,
  infinity: true,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 625,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".we-work__list-item").click(function () {
  $("#modal").modal({
    fadeDuration: 250,
  });
});

$(".header__btn").click(() => {
  $(".header__list").toggleClass("header__list--active");
  $("body").toggleClass("body");
});

$(".we-wrok-res__accardion-body").hide();

$(".we-wrok-res__accardion-item").click(function () {
  if ($(this).hasClass("we-wrok-res__accardion-item--active")) {
    $(this)
      .removeClass("we-wrok-res__accardion-item--active")
      .find(".we-wrok-res__accardion-body")
      .slideUp();
  } else {
    $(
      ".we-wrok-res__accardion-item--active .we-wrok-res__accardion-body"
    ).slideUp();
    $(".we-wrok-res__accardion-item--active").removeClass(
      "we-wrok-res__accardion-item--active"
    );
    $(this)
      .addClass("we-wrok-res__accardion-item--active")
      .find(".we-wrok-res__accardion-body")
      .slideDown();
  }
  return false;
});
