$(document).on('ready', function() {
  $(".lazy").slick({
    infinite: true,
    autoplay:true,
    // the magic
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true,
        }
      }, 
      {
      breakpoint: 400,
      settings: {
         slidesToShow: 1,
          infinite: true,
          fade: true,
      }
      }]
  });
});


function show1(){
  $('#hide1').toggle();
}

function show2(){
  $('#hide2').toggle();
}

function show3(){
  $('#hide3').toggle();
}

function show4(){
  $('#hide4').toggle();
}

function show5(){
  $('#hide5').toggle();
}