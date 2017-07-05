$(document).ready(function() {
  $("button#unicorn").click(function() {
    $("ul#user").prepend("<li>Unicorn</li>");
    $("ul#webpage").prepend("<li>Dragon</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
    });
  });

  $("button#dragon").click(function() {
    $("ul#user").prepend("<li>Dragon</li>");
    $("ul#webpage").prepend("<li>Unicorn</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
    });
  });
});
