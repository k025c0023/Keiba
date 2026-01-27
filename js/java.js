document.addEventListener("DOMContentLoaded", () => {

  const images = [
    "images/spechial.jpg",
    "images/gurass2.jpg",
    "images/toukaiteio2.jpg"
  ];

  let index = 0;
  const imgTag = document.getElementById("img");

  // 次へ
  const nextSlide = () => {
    index = (index + 1) % images.length;
    imgTag.src = images[index];
  };

  // 戻る
  const prevSlide = () => {
    index = (index - 1 + images.length) % images.length;
    imgTag.src = images[index];
  };

  document.getElementById("next").addEventListener("click", nextSlide);
  document.getElementById("prev").addEventListener("click", prevSlide);

  // ★ 3秒ごとに自動で切り替え
  setInterval(nextSlide, 3000);

});