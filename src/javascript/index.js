//  corousels

// ---->> Recent books people have searched
$("#owl-carousel-fav-book").owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

// ---->> Recent Reviews
$("#owl-carousel-review-book").owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 6,
    },
  },
});

// ///// ----- >>> hide and show search result

$(".search-box").hide();

$("nav input").focus(function () {
  $(".search-box").fadeToggle("slow");
});
$("nav input").blur(function () {
  $(".search-box").fadeToggle("slow");
});

// //--->>> details page show hide summary

$(document).ready(function () {
  const summary_length = $(".summary").text().length;
  const summary = $(".summary").text();

  // slide and hide summry
  const summary_after_show = summaryslice(0, 400);
  $(".summary").text(summary_after_show);

  $(".read-more").click(function () {
    // toggle summry length
    if (!(summary_length == $(".summary").text().length)) {
      $(".summary").text(summary);
    } else {
      const summary_after_show = summary.slice(0, 400);
      $(".summary").text(summary_after_show);
    }

    if ($(this).text() == "Read more") {
      $(this).text("Read less");
    } else {
      $(this).text("Read more");
    }
  });

  console.log(summary_length);
});


// togle mobile menu box

$(".menu-mob").hide();
$(".menu-mob-icon").click(function(){
  $(".menu-mob").toggle();
});