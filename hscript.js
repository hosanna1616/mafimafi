// mode mekeyeriyawu bezi new misera upto line 7//

const toggleSwitch = document.getElementById("mode-toggle");

toggleSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggleSwitch.checked);
});
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");
  const menu = document.getElementById("menu-icon");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
});