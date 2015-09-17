// Our "tag" links
$('[data-show-tag]').click(function(event) {
  event.preventDefault();

  var tag = $(event.currentTarget).data('show-tag');

  console.log(tag);

  if(tag == 'all') {
    $('[data-tags]').show();
    return;
  }

  // Hide ALL the tagged content, we'll un-hide next
  $('[data-tags]').hide();

  // Show all tagged content that CONTAINS tag
  $('[data-tags*="' + tag + '"]').show();
});

