const eventSwiper = new Swiper("#event_add", {
  slidesPerView: "1.2",
  spaceBetween: 60,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: "#event_add .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: "#event_add .add_btn .swiper-button-next",
    prevEl: "#event_add .add_btn .swiper-button-prev",
  },
});
