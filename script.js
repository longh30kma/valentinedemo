const yes = document.getElementById("yes");
const no = document.getElementById("no");
let clickCount = 0; //count how many times the user pressed no
const container = document.getElementById("container");
const after = document.getElementById("after-container");
function changeSize() {
  clickCount++;
  yes.style.fontSize = `${40 + clickCount}px`;
  yes.style.height = `${50 + clickCount * 2}px`;
  yes.style.padding = `0 ${20 + clickCount}px`;
  no.style.fontSize = `${40 - clickCount}px`;
  no.style.height = `${50 - clickCount * 2}px`;
  no.style.padding = `0 ${20 - clickCount}px`;
}

function YES() {
  container.style.display = "none";
  after.style.display = "block";
}
