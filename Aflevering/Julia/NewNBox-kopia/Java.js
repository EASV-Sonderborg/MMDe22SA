function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.now();
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        return {
          'total': t,
          'minutes': minutes,
          'seconds': seconds
        };
      }
      
      function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
      
        function updateClock() {
          var t = getTimeRemaining(endtime);
      

          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
      
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      }
      // count down timer:
      var deadline = new Date(Date.now() + 2 * 60 * 1000);
      initializeClock('clockdiv', deadline);




      /* RATING STAR */
$('.radio').append("<i class='active fa fa-star star-rating' aria-hidden='true'></i>");


// /* MOUSEOVER*/
$('.star-rating').hover(function() {
    hoverStar($(this));
}, function(){
    notHoverStar($(this));
});


// /* CLICK */
$('.star-rating').click(function() {
    $(this).parent().parent().find('.star-rating').css('color', '#D8D8D8');
    colorClickedStar($(this));
    
    if($(this).hasClass("start")){
        $('.star-rating').click(function() {
            colorUnclickedStar($(this));
        });
    } else{
        $('.star-rating').click(function() {
            colorClickedStar($(this));
        });
    }
});



function colorClickedStar(element) { $(element).addClass("start").closest('.radio').prevAll().find('.star-rating').addClass('start');
}
function colorUnclickedStar (element) {
$(element).closest('.radio').nextAll().find('.star-rating').removeClass('start');
}

function hoverStar (element) {
$(element).addClass('startHover').closest('.radio').prevAll().find('.star-rating').addClass('startHover');
}

function notHoverStar (element) {
$(element).removeClass('startHover').closest('.radio').prevAll().find('.star-rating').removeClass('startHover');
}







      