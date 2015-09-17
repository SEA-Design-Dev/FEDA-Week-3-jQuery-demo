// Our "tag" links
$('[data-show-tag]').click(function(event) {
  event.preventDefault();

  var tag = $(event.currentTarget).data('show-tag');

  console.log(tag);
});

