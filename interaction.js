$(document).ready(function () {
  $(".carousel").slick({
    dots: true, // Tampilkan dots navigation
    infinite: true, // Infinite loop
    speed: 500, // Kecepatan animasi
    slidesToShow: 1, // Jumlah slide yang ditampilkan
    slidesToScroll: 1, // Jumlah slide yang di-scroll
    autoplay: true, // Autoplay aktif
    autoplaySpeed: 3000, // Kecepatan autoplay
    pauseOnHover: true, // Pause saat hover
    arrows: true, // Tampilkan arrow navigation
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

const btnElement = document.getElementById("btn");
btnElement.addEventListener("click", function () {
  alert("Hello World");
});
