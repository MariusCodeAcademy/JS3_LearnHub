"use strict"; // here we go again
function getTime() {
  const now = new Date();
  const dataString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();

  return dataString + " " + timeString;
}

// create el
const h4 = document.createElement("h4");
h4.id = "time";

// dedam i html
document.body.append(h4);

function clock() {
  setInterval(() => (h4.textContent = getTime()), 1000);
}
clock();
