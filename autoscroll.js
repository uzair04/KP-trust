$(function() {
  var tickerLength = $(".announcement-cnt ul li").length;
  var tickerHeight = $(".announcement-cnt ul li").outerHeight();
  $(".announcement-cnt ul li:last-child").prependTo(".announcement-cnt ul");
  $(".announcement-cnt ul").css("marginTop", -tickerHeight);
  function moveTop() {
    $(".announcement-cnt ul").animate(
      {
        top: -tickerHeight
      },
      600,
      function() {
        $(".announcement-cnt ul li:first-child").appendTo(
          ".announcement-cnt ul"
        );
        $(".announcement-cnt ul").css("top", "");
      }
    );
  }
  setInterval(function() {
    moveTop();
  }, 3000);
});
