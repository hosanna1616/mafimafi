
let next = document.querySelector('.next');
let previous = document.querySelector('.previous');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});


previous.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  if (items.length > 0) {
    let lastItem = items[items.length - 1];
    lastItem.parentNode.removeChild(lastItem); // Remove the last item
    document.querySelector(".slide").insertBefore(lastItem, items[0]); // Insert it at the beginning
  }
});