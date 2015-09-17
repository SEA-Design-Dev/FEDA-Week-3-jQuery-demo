var selectTags = function(event) {
  event.preventDefault();

  var activeLink = document.querySelector('[data-show-tag].active')
  if(activeLink) {
    activeLink.classList.remove('active');
  }

  var currentLink = event.currentTarget;
  currentLink.classList.add('active');
  
  var tag = currentLink.getAttribute('data-show-tag');

  console.log(tag);
};


// Select all tag links...
var tagLinks = document.querySelectorAll('[data-show-tag]');

// ...and set click event listeners on each one.
for (var i = 0, len = tagLinks.length; i < len; i++) {
  tagLinks[i].addEventListener('click', selectTags);
}



// var selectTags = function(event) {
//   event.preventDefault();

//   // Remove .active from all active tag links
//   $('[data-show-tag].active').removeClass('active');

//   // Add .active to the current tag link, and return contents of its attribute
//   var tag = $(event.currentTarget).addClass('active').data('show-tag');

//   if(tag == 'all') {
//     $('[data-tags]').show();
//     return;
//   }

//   // Hide ALL the tagged content, we'll un-hide next
//   $('[data-tags]').hide();

//   // Show all tagged content that CONTAINS tag
//   $('[data-tags*="' + tag + '"]').show();
// };


// // Our "tag" links
// $('[data-show-tag]').click(selectTags);

