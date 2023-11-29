function histFakt() {
  var x = document.getElementById("hist-fakt");
  let anchorHF;
  if (x.className === "hist-fakt") {
    anchorHF = document.getElementById("hist-fakt").style.display = "flex";
  } else {
    anchorHF = document.getElementById("logo").style.display = "none";
  }
}
