const cookieBox = document.querySelector(".consent-wrapper"),
  buttons = document.querySelectorAll(".button");

let classList = {};
//
const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};
//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);

// // malicious iframe im HTML-head neutralisieren
// document.body.innerText = "Loaded into a frame.";

// let parent = window.parent;
// let oldIframe = parent.document.getElementById("mountPoint");
// if (oldIframe != null) {
//   // Build a new iframe to replace the old one.
//   let newIframe = parent.document.createElement("iframe");
//   newIframe.setAttribute("src", "malicious_child.html");
//   newIframe.setAttribute("id", "maliciousFrame");
//   // Replace Old iFrame
//   oldIframe.replaceWith(newIframe);
// } else {
//   // When new frame is mounted you will see this alert
//   alert(
//     "This should not happen since the original iframe did not have 'allow-modals'."
//   );
// }
