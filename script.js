const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const searchBtn = document.querySelector(".search-box");
const modeSwitch = document.querySelector(".toggle-switch");
const modeText = document.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerHTML = "Light Mode";
  } else {
    modeText.innerHTML = "Dark Mode";
  }
});




// Add smooth scrolling to all links
$("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});

// Add class "active" to navigation menu items on click
$('.links li').on('click', function() {
  $('.links li.active').removeClass('active');
  $(this).addClass('active');
});

// Add class "active" to navigation menu items on scroll
$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  // Assign active class to nav links while scolling
  $('.section').each(function(i) {
    if ($(this).position().top <= scrollDistance) {
      $('.links li.active').removeClass('active');
      $('.links li').eq(i).addClass('active');
    }
  });
}).scroll();

