// responsive Nav-Bar
function BuergerNav() {
  var x = document.getElementById("topnav");
  let link;
  if (x.className === "topnav") {
    x.className += " responsive";
    link = document.getElementById("logo").style.display = "none";
  } else {
    x.className = "topnav";
    link = document.getElementById("logo").style.display = "flex";
  }
}
