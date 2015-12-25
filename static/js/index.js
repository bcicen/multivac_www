/**
 * Main JS file for Casper behaviours
 */

function update_tron(div_id) {
  var divs= $('#tron-box div'),
  now = divs.filter(':visible'),
  next = '#' + div_id,
  speed = 1000;

  if (now[0].id !== div_id) {
    //  now.fadeOut(speed);
    now.hide();
    $(next).fadeIn(speed);
  }
}

/* globals jQuery, document */
(function ($, undefined) {
  "use strict";

  var $document = $(document);

  $document.ready(function () {

    var $postContent = $(".post-content");
    $postContent.fitVids();

    $(".scroll-down, .title-scroll").arctic_scroll();

    $(".menu-button[href='#'], .nav-cover, .nav-close").on("click", function(e){
      e.preventDefault();
      $("#side-menu").toggleClass("hidden");
      $("body").toggleClass("nav-opened nav-closed");
    });

    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });

});

// Arctic Scroll by Paul Adam Davis
// https://github.com/PaulAdamDavis/Arctic-Scroll
$.fn.arctic_scroll = function (options) {

  var defaults = {
    elem: $(this),
    speed: 500
  },

  allOptions = $.extend(defaults, options);

  allOptions.elem.click(function (event) {
    event.preventDefault();
    var $this = $(this),
    $htmlBody = $('html, body'),
    offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
    position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
    toMove;

    if (offset) {
      toMove = parseInt(offset);
      $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
    } else if (position) {
      toMove = parseInt(position);
      $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
    } else {
      $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
    }
  });

};

new WOW().init();

})(jQuery);
