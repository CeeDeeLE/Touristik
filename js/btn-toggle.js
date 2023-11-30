function histFakt() {
  var x = document.getElementById("hist-fakt");
  let anchorHF;
  let anchdisplay;
  let anchalign;
  if (x.className === "hist-fakt") {
    anchorHF = document.getElementById("hist-fakt");
    anchdisplay = anchorHF.style.display = "flex";
    anchalign = anchorHF.style.flexDirection = "column";
  } else {
    anchorHF = document.getElementById("logo").style.display = "none";
  }
}
