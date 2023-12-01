document.addEventListener("DOMContentLoaded", function () {
    var angleDownIcons = document.querySelectorAll(".arrow-icon");
    angleDownIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            var paragraph = icon.closest('.card-below').querySelector(".expandable-content");

            paragraph.classList.toggle("expanded");

            icon.classList.toggle("arrow-icon");
        });
    });
});
