$(document).ready(function() {
  $("button#unicorn").click(function() {
    $("ul#user").prepend("<li>Unicorn</li>");
    $("ul#webpage").prepend("<li>Dragon</li>");
  });

  $("button#dragon").click(function() {
    $("ul#user").prepend("<li>Dragon</li>");
    $("ul#webpage").prepend("<li>Unicorn</li>");
  });
});
