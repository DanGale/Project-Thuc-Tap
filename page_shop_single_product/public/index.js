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