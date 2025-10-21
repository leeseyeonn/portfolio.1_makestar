const eventSwiper = new Swiper("#event_add", {
  slidesPerView: "auto",
  spaceBetween: 60,
  centeredSlides: true,
  slideToClickedSlide: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
