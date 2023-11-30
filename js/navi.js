// responsive Nav-Bar
function BuergerNav() {
  var x = document.getElementById("topnav");
  let logo;
  if (x.className === "topnav") {
    x.className += " responsive";
    logo = document.getElementById("logo").style.display = "none";
  } else {
    x.className = "topnav";
    logo = document.getElementById("logo").style.display = "flex";
  }
}
