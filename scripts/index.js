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

const newItems = new Swiper('#new_items_wrap',{
  slidesPerView: "5",
  spaceBetween: 10,
  navigation: {
    nextEl: "#new_items_wrap .swiper-button-next",
    prevEl: "#new_items_wrap .swiper-button-prev",
  },
  scrollbar: {
    el: "#new_items_wrap .swiper-scrollbar",
  },
})
