"use strict"; // here we go again
function getTime() {
  const now = new Date();
  const dataString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();

  return dataString + " " + timeString;
}
getTime();

// create el
const h4 = document.createElement("h4");
h4.textContent = getTime();

// dedam i html
document.body.append(h4);
