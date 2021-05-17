"use strict"; // here we go again
function getTime() {
  const now = new Date();
  const dataString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();

  return dataString + " " + timeString;
}
getTime();
