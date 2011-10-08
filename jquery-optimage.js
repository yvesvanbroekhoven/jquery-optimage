/*
 * jQuery optimage
 * A plugin to load a bigger image if the viewport (or parent) is big enough.
 * following the filosophy that you only load the smallest, and load more if it's necessary
 *
 * Author: Yves Van Broekhoven
 * Created at: 2011-10-08
 */
 
(function($){
  
  var clb
  ;
  
  var _loadImage
  ,   _imageLoaded
  ;
  
  
  /*
   * Load image
   */
  _loadImage = function(size){
    var src     = $(this).attr("src")
    ,   new_src = src.replace(/small|medium|large/, size);
    
    /* Only if the src is different */
    if (src != new_src) {
      
      $(this)
        .load(_imageLoaded)
        .attr("src", new_src);
    }
    
  };
  
  
  /* 
   * Callback 
   */
  _imageLoaded = function(){
    if ($.isFunction(clb)) {
      clb();
    }
  }
  
  
  /*
   * jQuery extend
   */
  $.fn.optimage = function(callback){
    
    clb = callback ? callback : null;
    
    this.each(function(){
      var $container      = $(this).parent()
      ,   container_width = $container.width();
      ;
      
      if (container_width > 800) {
        _loadImage.call(this, "large");
      } else if (container_width > 400) {
        _loadImage.call(this, "medium");
      }
      
    });
    
    return this;
  };
  
  
  /*
   * Default options
   */
  $.fn.optimage.defaults = {
    
  };
  
}(jQuery));