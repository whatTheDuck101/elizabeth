function mobileViewUpdate() {
  var viewportWidth = $(window).width();
  if (viewportWidth < 1025) {
    $(".magic")
      .addClass("interactive-two")
      .removeClass("magic");
    $(".project-background").removeClass("project-background");
  } else {
  }
}

mobileViewUpdate();
