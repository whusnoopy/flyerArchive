(function($) {

  $.fn.flyerArchive = function(options) {
    var settings = $.extend({
      startOffset: this.offset(),
      foldTime: 500,
      foldCSS: {
        height: "16px",
        width: "16px"
      },
      flyTime: 500,
      flyTarget: $("body"),
      backgroundColor: this.css("backgroundColor"),
    }, options);

    // init flyer element
    var flyer = this.clone();
    flyer.html("<div></div>").css({
      "box-sizing": "border-box",
      "position": "absolute",
      "z-index": "9999"
    }).css({
      "top": settings.startOffset.top,
      "left": settings.startOffset.left,
      "width": this.width(),
      "height": this.height(),
      "background-color": settings.backgroundColor
    }).appendTo($("body"));

    var fold_offset = {
      top: flyer.offset().top + Math.floor(flyer.height() / 2),
      left: flyer.offset().left + Math.floor(flyer.width() / 2)
    };

    var target_offset = settings.flyTarget.offset();

    flyer.animate($.extend({
      top: fold_offset.top,
      left: fold_offset.left
    }, settings.foldCSS), settings.foldTime).animate({
      top: target_offset.top,
      left: target_offset.left
    }, settings.flyTime, function() {
      this.parentNode.removeChild(this);
    });

    return this;
  };

})(jQuery);
