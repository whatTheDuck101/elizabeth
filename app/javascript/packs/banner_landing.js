$(document).ready(function() {
  const $magic = $(".magic"),
    magicWHalf = $magic.width() / 2;
  $(document).on("mousemove", function test(e) {
    $magic.css({ left: e.pageX - magicWHalf, top: e.pageY - magicWHalf });
  });
});
