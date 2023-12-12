function toggleOptionsCate() {
    var optionsCate = document.getElementById('dropdownOptionsCate');
    optionsCate.style.display = optionsCate.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('click', function (event) {
    var dropdownCate = document.getElementById('customDropdownCate');
    if (!dropdown.contains(event.target)) {
        var dropdownCate = document.getElementById('dropdownOptionsCate');
        dropdownCate.style.display = 'none';
    }
});

function toggleOptionsArchive() {
    var optionsArchive = document.getElementById('dropdownOptionsArchive');
    optionsArchive.style.display = optionsArchive.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('click', function (event) {
    var dropdownArchive = document.getElementById('customDropdownArchive');
    if (!dropdown.contains(event.target)) {
        var dropdownArchive = document.getElementById('dropdownOptionsArchive');
        dropdownArchive.style.display = 'none';
    }
});



document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.nav a');

    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        links.forEach(function(otherLink) {
          otherLink.classList.remove('active');
        });

        link.classList.add('active');
      });
    });
  });