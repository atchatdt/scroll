$(document).ready(function() {
  $(".main-menu:nth-child(1) a").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate(
      { scrollTop: $(".chapter1").offset().top },
      1500,
      "easeOutCubic"
    );
  });

  $(".main-menu:nth-child(2) a").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate(
      { scrollTop: $(".chapter2").offset().top },
      2000,
      "easeOutCubic"
    );
  });

  $(".main-menu:nth-child(3) a").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate(
      { scrollTop: $(".chapter3").offset().top },
      2500,
      "easeOutCubic"
    );
  });

  $(".main-menu:nth-child(4) a").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate(
      { scrollTop: $(".chapter4").offset().top },
      3000,
      "easeOutCubic"
    );
  });
  $(".main-menu:nth-child(5) a").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate(
      { scrollTop: $(".chapter5").offset().top },
      3500,
      "easeOutCubic"
    );
  });

  $("#back-to-top").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 5000, "easeOutCubic");
  });
});

document.addEventListener(
  "DOMContentLoaded",
  function() {
    let chapter1 = document.getElementById("chapter1");
    let chapter2 = document.getElementById("chapter2");
    let chapter3 = document.getElementById("chapter3");
    let chapter4 = document.getElementById("chapter4");
    let chapter5 = document.getElementById("chapter5");
    let footer = document.getElementById("footer");
    let location = document.getElementById("location");
    let backToTop = document.getElementById("back-to-top");
    location.style.width = "0%";

    window.addEventListener("scroll", function(e) {
      let scrollWithTop = window.pageYOffset;

      // Hiển thị back to top
      if (scrollWithTop >= chapter2.offsetTop - 100) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }

      //   Cập nhật lại độ dài của progress
      location.style.width = `${(scrollWithTop / (chapter5.offsetTop + 100)) *
        100}%`;
    });
  },
  false
);
