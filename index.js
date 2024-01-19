var swiper = new Swiper(".enjoy-swiper", {
  spaceBetween: 20,
  slidesPerView: 1,
  watchSlidesProgress: true,
  freeMode: true,
  responsive: {
    767.98: {
      slidesPerView: 2,
    },
    991.98: {
      slidesPerView: 3,
    },
    1199.98: {
      slidesPerView: 4,
    },
  },
});

var swiper2 = new Swiper(".feedback-swiper", {
  slidesPerView: 1,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".feedback-btn-next",
    prevEl: ".feedback-btn-prev",
  },
});

// ! to update the swiper on resizing the window
window.addEventListener("resize", () => {
  swiper.update();
  swiper2.update();
});
