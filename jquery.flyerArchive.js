(function($) {

  $.fn.flyerArchive = function(options) {
    var origin_element = this;
    var settings = $.extend({
      startOffset: this.offset(),
      foldTime: 500,
      foldHeight: "16px",
      foldWidth: "16px",
      foldRadius: "4px",
      flyTime: 500,
      flyTarget: $("body"),
      backgroundColor: origin_element.css("backgroundColor"),
    }, options);

    // init flyer element
    var flyer = $("<div>").css({
      "box-sizing": "border-box",
      "position": "absolute",
      "z-index": "9999"
    }).css({
      "top": settings.startOffset.top,
      "left": settings.startOffset.left,
      "height": origin_element.outerHeight(),
      "width": origin_element.outerWidth(),
      "border-radius": settings.foldRadius,
      "background-color": settings.backgroundColor
    }).appendTo($("body"));

    var fold_offset = {
      top: flyer.offset().top + Math.floor(flyer.height() / 2),
      left: flyer.offset().left + Math.floor(flyer.width() / 2)
    };

    var target_offset = settings.flyTarget.offset();
    target_offset.top += Math.floor((settings.flyTarget.outerHeight() - parseInt(settings.foldHeight)) / 2);
    target_offset.left += Math.floor((settings.flyTarget.outerWidth() - parseInt(settings.foldWidth)) / 2);

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
