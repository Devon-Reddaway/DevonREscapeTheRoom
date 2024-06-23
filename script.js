var visibilityToggle = false;

function changeVisibility() {
  if (visibilityToggle == true) {
    win.setAttribute("visible", "true");
    visibilityToggle = false;
  } else {
    win.setAttribute("visible", "false");
    visibilityToggle = true;
  }
}
