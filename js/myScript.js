$('#project-slider').slick({
    prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
    nextArrow: '<i class="fas fa-chevron-right next_arr"></i>',
    infinite: true,
    arrows:false,
    dots:true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 1024,
      arrows: true,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false,
      }
    },
    {
      breakpoint: 800,
      arrows: false,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      infinite: true,
      arrows: false,
      dots: false,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  // Hero section
  $('#hero-section').slick({
    dots:true,
    arrows: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });