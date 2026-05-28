// Scales the 1920×1080 .stage to fit the viewport.
(function () {
  function fit() {
    const stage = document.querySelector('.stage');
    if (!stage) return;
    const sw = 1920, sh = 1080;
    const vw = window.innerWidth, vh = window.innerHeight;
    const s = Math.min(vw / sw, vh / sh);
    stage.style.transform = `translate(-50%, -50%) scale(${s})`;
  }
  window.addEventListener('resize', fit);
  window.addEventListener('load', fit);
  fit();
})();
