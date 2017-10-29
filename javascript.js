$(document).ready(function() {
  $('.gallery').magnificPopup({
    type:'image',
    gallery: {
      enabled: true, // set to true to enable gallery

      preload: [0,2], // read about this option in next Lazy-loading section

      navigateByImgClick: true,

      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

      tPrev: 'Previous (Left arrow key)', // title for left button
      tNext: 'Next (Right arrow key)', // title for right button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
    },
    image: {
      markup: '<div class="mfp-figure">'+
      '<div class="mfp-close"></div>'+
      '<div class="mfp-img"></div>'+
      '<div class="mfp-bottom-bar">'+
      '<div class="mfp-title"></div>'+
      '<div class="mfp-counter"></div>'+
      '</div>'+
      '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

      cursor: 'null', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.

      titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
      // Or the function that should return the title. For example:
      // titleSrc: function(item) {
      //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      // }

      verticalFit: true, // Fits image in area vertically

      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
    }


  });
});

$(document).ready(function() {
  $('#search').hideseek({
    list:           '.list',
    nodata:         '',
    attribute:      'title',
    matches:        false,
    highlight:      false,
    ignore:         '',
    navigation:     false,
    ignore_accents: false,
    hidden_mode:    false,
    min_chars:      2
  });

});
