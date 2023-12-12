document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.nav a');

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      links.forEach(function (otherLink) {
        otherLink.classList.remove('active');
      });

      link.classList.add('active');
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const categoryFlexItems = document.querySelectorAll('.category .flex');

  categoryFlexItems.forEach(function (flexItem) {
    flexItem.addEventListener('click', function () {
      toggleCategory(this);
    });
  });
});

function toggleCategory(flexItem) {
  const categoryDropdown = flexItem.nextElementSibling;
  const rectangle = flexItem.querySelector('.rectangle');
  const arrowIcon = flexItem.querySelector('.ml-auto');

  arrowIcon.src = categoryDropdown.style.display === 'none' ? "./images/arrow/arrow-below.svg" : "./images/arrow/arrow-top.svg";

  rectangle.classList.toggle('rectangle--checked');

  if (categoryDropdown.classList == 'category__dropdown') {
    categoryDropdown.style.display = categoryDropdown.style.display === 'none' || categoryDropdown.style.display === '' ? 'block' : 'none';

    const allDropdowns = document.querySelectorAll('.category__dropdown');
    allDropdowns.forEach(function (dropdown) {
      if (dropdown !== categoryDropdown) {
        dropdown.style.display = 'none';
      }
    });
  }

}

