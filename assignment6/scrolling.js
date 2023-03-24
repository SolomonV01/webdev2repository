$(window).scroll(function() {
    var $window = $(window),
        $body = $('body'),
    
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        $body.addClass('section' + $(this).data('section'));
      }
    });    
    
  }).scroll();