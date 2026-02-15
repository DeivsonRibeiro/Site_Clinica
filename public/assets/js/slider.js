document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.slider-img');
  const btn = document.getElementById('changeImgBtn');
  let currentIndex = 0;
  let interval;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function startLoop() {
    interval = setInterval(nextImage, 5000); // Change every 5 seconds
  }

  function stopLoop() {
    clearInterval(interval);
  }

  if (btn) {
    btn.addEventListener('click', () => {
      stopLoop();
      nextImage();
      startLoop();
    });
  }

  // Initialize
  if (images.length > 0) {
    startLoop();
  }
});
