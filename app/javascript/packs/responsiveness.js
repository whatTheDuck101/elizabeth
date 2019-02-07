function mobileViewUpdate() {
  var viewportWidth = $(window).width();
  if (viewportWidth < 1025) {
    $(".magic")
      .addClass("interactive-two")
      .removeClass("magic");
  }
}

mobileViewUpdate();
// $(window).load(mobileViewUpdate);
// $(window).resize(mobileViewUpdate);
