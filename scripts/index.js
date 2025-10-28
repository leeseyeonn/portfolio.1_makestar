
/* 1행 광고 슬라이드 */
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


/* 2행 신상품 슬라이드 */
const newItems = new Swiper('#new_wrap #new_items_wrap',{
  slidesPerView: "5",
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: "#new_wrap .swiper_btn_grp .swiper-button-next",
    prevEl: "#new_wrap .swiper_btn_grp .swiper-button-prev",
  },
  scrollbar: {
    el: "#new_wrap .swiper-scrollbar",
  },
})

/* 3행 인기제품 슬라이드 */

const hotItems = new Swiper ('#hot_wrap #hot_items_wrap',{
  slidesPerView: 7,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: "#hot_wrap .swiper_btn_grp .swiper-button-next",
    prevEl: "#hot_wrap .swiper_btn_grp .swiper-button-prev",
  },
  scrollbar: {
    el: "#hot_wrap .swiper-scrollbar",
  },
})