window.addEventListener("load", function (e) {
  // header navbar menu toggle
  $("header .activeBars").click(function () {
    $("header .activeMenuBars").slideToggle(1000);
  });
  // main owl carusel
  $("main .owl-carousel").owlCarousel({
    items: 4,
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    nav: false,
  });
  $(".from .owl-carousel").owlCarousel({
    items: 2,
    margin: 40,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    nav: true,
  });
  // headerLogin
  $("header .eyes").click(function () {
    var attr = $("header .pass input").attr("type");
    if (attr == "password") {
      $("header .pass input").attr("type", "text");
    } else {
      $("header .pass input").attr("type", "password");
    }
  });
  $(".headerLogin button").click(function (e) {
    e.preventDefault();
    if ($(".headerLogin  input").val() === "") {
      $(".errorMsg").show();
    } else {
      $(".errorMsg").hide();
    }
  });
  $(".headerLogin .close").click(function () {
    $(".headerLogin").fadeOut(500);
  });

  $("header nav .sigin").click(function () {
    $(".headerLogin").fadeIn(500);
    $(".headerLogin").css("display", "flex");
  });
});
