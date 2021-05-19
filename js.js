/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//KONTAKT//

$('.input').on("focus blur", function() {
  if ($(this).val().length > 0 || $('.input').is(':focus')) {
    $(this).siblings().addClass('active');
    $(this).parent().addClass('active');

  } else {
    $(this).siblings().removeClass('active').addClass('not');
    $(this).parent().removeClass('active').addClass('not');
  }

  if ($(this).val().length < 2 && $('.input').is(':focus') != true && $(this).is(':invalid') || $(this).is(':invalid') && $('.input').is(':focus') != true) {
    $(this).parent().addClass('invalid');
    $(this).siblings().addClass('invalid');
  } else {
    $(this).parent().removeClass('invalid');
    $(this).siblings().removeClass('invalid');
  }

  if ($(this).val().length > 0 && $(this).is(':valid') && $('.input').is(':focus') != true) {
    $(this).parent().addClass('valid');
    $(this).siblings().addClass('valid');
  } else {
    $(this).parent().removeClass('valid');
    $(this).siblings().removeClass('valid');
  }

});

$('#d').change(enableBtn);
$('.input').blur(enableBtn);

function enableBtn() {
  if ($('#d').is(':checked') == false || $('.input').parent('.input-wrap').hasClass('invalid') == true || $('.input').val().length < 2) {
    $("#confirm").prop("disabled", true);
  } else {
    $("#confirm").prop("disabled", false);
  }
}
enableBtn();

$('#confirm').click(function() {
  $('form').submit(function(event) {
    $('.card').addClass('end');
    $('.ending').addClass('showed');
    event.preventDefault();
  });
});


//TAB NAV//


function openTab(evt, tabName) {
  var activeTab, i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    if (tabcontent[i].style.display !== "none") {
      activeTab = tabcontent[i].id;
    }
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  if (activeTab !== tabName) {
    document.getElementById(tabName).style.display = "inline-flex";
    evt.currentTarget.className += " active";
  }
}


//TAB NAV SLIDER//

$(function(){
  $('.tab').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
})


