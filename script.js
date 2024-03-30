const title = document.getElementById("title");
const container = document.getElementById("container");
const image = document.getElementById("image");
const result = document.getElementById("result");
const choice = document.getElementById("choice");
const Yes_Btn = document.getElementById("Yes_Btn");
const No_Btn = document.getElementById("No_Btn");

Yes_Btn.addEventListener("click", () => {
  title.textContent = "Anda Berbohong!";
  image.src = "assets/teknisi.png";
  container.style.backgroundColor = "#E12E2E";
  result.textContent = "Anda adalah seorang Teknisi";
  choice.style.display = "none";
});

No_Btn.addEventListener("click", () => {
  title.textContent = "Anda Benar!";
  image.src = "assets/mahasiswa.png";
  container.style.backgroundColor = "#6FD240";
  result.textContent = "Anda adalah seorang Mahasiswa";
  choice.style.display = "none";
});
