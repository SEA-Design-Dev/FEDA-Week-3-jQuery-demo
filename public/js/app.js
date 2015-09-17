// Our "tag" links
$('[data-show-tag]').click(function(event) {
  event.preventDefault();

  // Remove .active from all active tag links
  $('[data-show-tag].active').removeClass('active');

  // Add .active to the current tag link, and return contents of its attribute
  var tag = $(event.currentTarget).addClass('active').data('show-tag');

  if(tag == 'all') {
    $('[data-tags]').show();
    return;
  }

  // Hide ALL the tagged content, we'll un-hide next
  $('[data-tags]').hide();

  // Show all tagged content that CONTAINS tag
  $('[data-tags*="' + tag + '"]').show();
});

