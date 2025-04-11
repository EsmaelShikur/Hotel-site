$("#menu-list").on("click", function () {
  $(".lists").slideToggle();
  $(this).hide();
  $("#close-list").show();
});
$("#close-list").on("click", function () {
  $(".lists").slideToggle();
  $(this).hide();
  $("#menu-list").show();
});
