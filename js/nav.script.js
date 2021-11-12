$(document).ready(function () {
  var audio = new Audio("audio/mixkit-arcade-game-jump-coin-216.mp3");
  $(".menu_bar").click(function () {
    audio.play();
    $(".icon").toggleClass("close");
    $(".line").toggleClass("color");
    $("#main-menu").toggle(1000);
  });
});