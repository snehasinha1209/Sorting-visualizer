let array = [];

function generateArray() {
  array = [];
  document.getElementById("array-container").innerHTML = "";

  for (let i = 0; i < 20; i++) {
    let value = Math.floor(Math.random() * 100) + 10;
    array.push(value);

    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 2}px`;
    document.getElementById("array-container").appendChild(bar);
  }
}
