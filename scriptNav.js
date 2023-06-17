//classList- show/gets all classes
// contains-checks classList for specific class
//add-add class
//remove-remove class
// toggle- toggle class

const navToggle = document.querySelector(".BADIR");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //   console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));

  // Using classList, contains, add, remove. It's a long way
  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }

  // Easy way

  links.classList.toggle("show-links");
});


