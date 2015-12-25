(function($) {

  $.fn.flyerArchive = function(options) {
    var settings = $.extend({
      startOffset: this.offset(),
      foldTime: 500,
      foldHeight: "16px",
      foldWidth: "16px",
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
      "height": this.height(),
      "width": this.width(),
      "background-color": settings.backgroundColor
    }).appendTo($("body"));

    var fold_offset = {
      top: flyer.offset().top + Math.floor(flyer.height() / 2),
      left: flyer.offset().left + Math.floor(flyer.width() / 2)
    };

    var target_offset = settings.flyTarget.offset();
    target_offset.top += Math.floor((settings.flyTarget.height() - parseInt(settings.foldHeight)) / 2);
    target_offset.left += Math.floor((settings.flyTarget.width() - parseInt(settings.foldWidth)) / 2);

    flyer.animate({
      top: fold_offset.top,
      left: fold_offset.left,
      height: settings.foldHeight,
      width: settings.foldWidth
    }, settings.foldTime).animate({
      top: target_offset.top,
      left: target_offset.left
    }, settings.flyTime, function() {
      this.parentNode.removeChild(this);
    });

    return this;
  };

})(jQuery);
