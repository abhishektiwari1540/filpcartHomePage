// for preatic parpose


// Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var el = document.getElementById('menu');

function slideight() {
  el.style.transform = 'translate3d(-374px, 0px, 0px) ';
  el.style.transition = 'transform 0ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;';
  el.style.width = '1627px';
}

function slidleft() {
  el.style.transform = 'translate3d(34px, 0px, 0px)';
  el.style.transition = 'transform (0.165, 0.84, 0.44, 1) 0s;';
}
$(document).ready(function(){
  $('.my-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left-arrow (1).png"></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right-arrow (2).png"></button>',
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 359,
    settings: {
      slidesToShow: 1,
    }
  },
  {
    breakpoint: 579,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 770,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 990,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 1199,
    settings: {
      slidesToShow: 5,
    }
  },
  {
    breakpoint: 1300,
    settings: {
      slidesToShow: 6,
    }
  },
  {
    breakpoint: 2500,
    settings: {
      slidesToShow: 6,
    }
  }
  
]
  });
}); 

$(document).ready(function(){
  $('.my-slider_sec').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left-arrow (1).png"></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right-arrow (2).png"></button>',
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 359,
    settings: {
      slidesToShow: 1,
    }
  },
  {
    breakpoint: 579,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 770,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 990,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 1199,
    settings: {
      slidesToShow: 5,
    }
  },
  {
    breakpoint: 1300,
    settings: {
      slidesToShow: 6,
    }
  },
  {
    breakpoint: 2500,
    settings: {
      slidesToShow: 6,
    }
  }
  
]
  });
}); 

$(document).ready(function(){
  $('.my-slider_sec_tri').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-preva" aria-label="Previous" type="button"><img src="img/left-arrow (1).png"></button>',
    nextArrow: '<button class="slick-nexta" aria-label="Next" type="button"><img src="img/right-arrow (2).png"></button>',
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 359,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 579,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 770,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 990,
    settings: {
      slidesToShow: 5,
    }
  },
  {
    breakpoint: 1199,
    settings: {
      slidesToShow: 6,
    }
  },
  {
    breakpoint: 1300,
    settings: {
      slidesToShow: 7,
    }
  },
  {
    breakpoint: 2500,
    settings: {
      slidesToShow: 7,
    }
  }
  
]
  });
}); 


$(document).ready(function(){
  $('.my-slider_brands').slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    rows: 2,
    arrows: true,
    prevArrow: '<button class="slick-preva" aria-label="Previous" type="button"><img src="img/left-arrow (1).png"></button>',
    nextArrow: '<button class="slick-nexta" aria-label="Next" type="button"><img src="img/right-arrow (2).png"></button>',
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 5,
    }
  },
  {
    breakpoint: 359,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 579,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 770,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 990,
    settings: {
      slidesToShow: 5,
    }
  },
  {
    breakpoint: 1199,
    settings: {
      slidesToShow: 5,
    }
  },
  {
    breakpoint: 1300,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 2500,
    settings: {
      slidesToShow: 3,
    }
  }
  
]
  });
}); 



