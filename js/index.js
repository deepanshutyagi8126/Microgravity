// Parties Home Page Slider

$(document).ready(function () {
    $("#Parties").owlCarousel({
        margin: 20,
        center:true,
        smartSpeed: 1000,
        autoplay: 5000,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2, 
            },
            1000: {
                items: 4,
            },
        },
    });
}); 
// Custom Map
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 28.5355,
            lng: 77.391,
        },
        zoom: 12,
        styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#212121"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#212121"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#181818"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1b1b1b"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#2c2c2c"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#8a8a8a"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#373737"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#3c3c3c"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#4e4e4e"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#3d3d3d"
                        }
                    ]
                }
            ],
    });
}
// Search Bar
$(document).ready(function(){
    $("#Search").click(function(){
        $(this).hide();
        $(".navbar-nav").hide();
        $(".SearchBar").show();
    });
    $(".SearchBar button").click(function(){ 
        $("#Search").show();
        $(".navbar-nav").show();
        $(".SearchBar").hide();
    });
});
// On Scroll Header Fixed
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("header").addClass("Fixed");
    } else {
        $("header").removeClass("Fixed");
    }
});
jQuery("#productSlider").owlCarousel({
    loop:false,
    margin:20,
    responsiveClass:true,
    dots : false,
    nav:false,
    autoplay: false,
    autoplaySpeed: 3000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 6
      },
  
      1024: {
        items: 10
      },
  
      1366: {
        items: 10
      }
    }
  });
  jQuery("#similarOwl").owlCarousel({
    loop:true,
    margin:40,
    responsiveClass:true,
    dots : false,
    nav:true,
    navText: ["<img src='images/leftarrow.svg'>","<img src='images/rightarrow.svg'>"],
    autoplay: false,
    autoplaySpeed: 3000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
  });
   jQuery("#similarOwl3").owlCarousel({
    loop:true,
    margin:40,
    responsiveClass:true,
    dots : false,
    nav:true,
    navText: ["<img src='images/leftarrow.svg'>","<img src='images/rightarrow.svg'>"],
    autoplay: false,
    autoplaySpeed: 3000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
  });
  jQuery("#recommend").owlCarousel({
    loop:true,
    margin:40,
    responsiveClass:true,
    dots : false,
    nav:true,
    navText: ["<img src='images/leftarrow.svg'>","<img src='images/rightarrow.svg'>"],
    autoplay: false,
    autoplaySpeed: 3000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
  });
  // counter code start
	$(document).ready(function() {
    $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });
  // counter code end
  var btn = $('#scroll');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
$(document).on('click','.Icon.Icon2',function(){
    $(this).children('.fa').removeClass('fa-eye-slash').addClass('fa-eye');
    $(this).parents('.form-group').find('input').attr('type','text');
    $(this).addClass('active');
});
$(document).on('click','.Icon.Icon2.active',function(){
    $(this).children('.fa').removeClass('fa-eye').addClass('fa-eye-slash');
    $(this).parents('.form-group').find('input').attr('type','password');
    $(this).removeClass('active');
});

$(document).on('click','.others',function(){
       $('.othersfield').slideDown();
});
$(document).on('click','.other',function(){
    $('.othersfield').slideUp();
});
$(document).on('mouseover','.zoomingRight li span',function(){
    $('.zoomingRight li').removeClass('active');
    $(this).parents('li').addClass('active');
  var x =  $(this).children('img').attr('src');
 $('.block__pic').attr('src',x).fadeIn();
});
// new js code start 08-09-21
$(document).on('click','.clicktab li a' ,function(){
	var id =$(this).data('id');
	$(".experiencees").removeClass('active');
	$(".experienceDetail"+ id).addClass('active');
});
$(document).on('click','.short',function(){
  $(this).parents('.filtersIn').find('.filterDetails').slideDown();
});
$(document).on('click','.short2',function(){
  $(this).parents('.filtersIn').find('.filterDetails').slideDown();
});
document.addEventListener("mousedown", function (event) {
  if (event.target.closest(".filterDetails ,.short"))
      return;
  $('.filterDetails').slideUp();
});
document.addEventListener("mousedown", function (event) {
  if (event.target.closest(".filterDetails ,.short2"))
      return;
  $('.filterDetails').slideUp();
});
$(document).on('click','.ChampionBox.ChampionBox6',function(){
  $('.ChampionBox.ChampionBox6').removeClass('active');
  $(this).addClass('active');
});

$(document).on('click', '.radio label', function () {
    $('.enterCvv').hide();
    $(this).siblings('.enterCvv').slideToggle();
});
$(document).on('click', '.radioadd label', function () {
    $('.creditInput.creditInput2').slideDown(1000);
});
$(document).on('click', '.radio label', function () {
    $('.creditInput').hide();
    $(this).siblings('.creditInput').slideToggle();
});
jQuery("#EpicSlider").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav:true,
    navText: ["<img src='images/left-arrow.svg'>","<img src='images/right-arrow.svg'>"],
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 1
      },
  
      1366: {
        items: 1
      }
    }
  });
  jQuery("#EpicSlider5").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav:true,
    navText: ["<img src='images/left-arrow.svg'>","<img src='images/right-arrow.svg'>"],
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 1
      },
  
      1366: {
        items: 1
      }
    }
  });
  jQuery("#EpicSlider4").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav:true,
    navText: ["<img src='images/left-arrow.svg'>","<img src='images/right-arrow.svg'>"],
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 1
      },
  
      1366: {
        items: 1
      }
    }
  });
  jQuery("#EpicSlider6").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav:true,
    navText: ["<img src='images/left-arrow.svg'>","<img src='images/right-arrow.svg'>"],
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 1
      },
  
      1366: {
        items: 1
      }
    }
  });
  jQuery("#EpicSlider7").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav:true,
    navText: ["<img src='images/left-arrow.svg'>","<img src='images/right-arrow.svg'>"],
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 1
      },
  
      1366: {
        items: 1
      }
    }
  });
  jQuery("#EpicSlider8").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav:true,
    navText: ["<img src='images/left-arrow.svg'>","<img src='images/right-arrow.svg'>"],
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 1
      },
  
      1366: {
        items: 1
      }
    }
  });
  jQuery(".ecommerce").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    dots:true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav:false,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 1
      },
  
      1366: {
        items: 1
      }
    }
  });
  
  $(document).on('click','.gameShow',function(){
    $('.trendingTabs.trendingTabs34').addClass('active');
  });
  $(document).on('click','.alled',function(){
    $('.trendingTabs.trendingTabs34').removeClass('active');
  });

  $(document).on('click','.copyCoupen',function(){
    $('.copyCoded').fadeIn();
    $('.copyCoded').delay(1000).fadeOut();
  });

  $(document).on('focus','.SearchBar',function(){
    $('.searchBox').slideDown();
  });
  document.addEventListener("mousedown", function (event) {
    if (event.target.closest(".SearchBar,.searchBox"))
        return;
    $('.searchBox').hide();
});