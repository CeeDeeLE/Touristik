// responsive Nav-Bar

// https://www.w3schools.com/howto/howto_js_dropdown.asp
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function BuergerNav() {
  document.getElementById("drop-item").classList.toggle("responsive");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".nav-icon")) {
    let dropdowns = document.getElementsByClassName("drop-item");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      // console.log(i);
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("responsive")) {
        openDropdown.classList.remove("responsive");
      }
    }
  }
};
