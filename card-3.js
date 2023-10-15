const whiteRadio = document.getElementById("white");
const blackRadio = document.getElementById("black");
const whiteImage = document.getElementById("product-image-white");
const blackImage = document.getElementById("product-image-black");

whiteRadio.addEventListener("change", () => {
  whiteImage.style.display = "block";
  blackImage.style.display = "none";
});

blackRadio.addEventListener("change", () => {
  whiteImage.style.display = "none";
  blackImage.style.display = "block";
});

window.addEventListener("load", () => {
  whiteRadio.checked = true;
  whiteImage.style.display = "block";
  blackImage.style.display = "none";
});
