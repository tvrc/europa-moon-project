(function($) {
    
    $.fn.scrollBackgrounds = function(speed, startX, startY) {

        $(this).each(function() {
            var $background = $(this);
            var $window = $(window);

            $window.scroll(function() {            
                var $yPos = ($window.scrollTop() - $background.offset().top) / speed;

                $yPos = startY + $yPos;
                var $coords = startX + ' ' + $yPos + 'px';

                $background.css({ backgroundPosition: $coords });
            });
        });
    }
    
    $.fn.highlightSelectable = function(activeColor, inactiveColor, navbarElement) {
            
        $(this).each(function() {
            var $window = $(window);
            var $currentRow = $(this);

            var $docMiddle = $window.scrollTop() + $window.height()/2;
            var $rowTop = $currentRow.offset().top;
            var $rowBottom = $rowTop + $currentRow.outerHeight();
            var $num = $(this).attr("id");


            if ($docMiddle > $rowTop && $docMiddle < $rowBottom) {
                $(navbarElement).eq($num - 1).css("background-color", activeColor);
            } else {
                $(navbarElement).eq($num - 1).css("background-color", "");
            }
        });     
    }
    
    $.fn.scrollToSection = function() {
        $navbarElement = $(this);
        
        $navbarElement.each(function() {
            
            $navbarElement.click(function(event) {
                event.preventDefault;
                $('html, body').animate({
                        scrollTop: $('.selectable-section').offset().top
                    }, 2000);
            });
        });
    }
    
})(jQuery);


function centerToParent(parent, child) {
    
    var $newX = $(parent).innerWidth()/2 - $(child).outerWidth()/2;
    var $newY = $(parent).innerHeight()/2 - $(child).outerHeight()/2;
    
    $(child).css({left: $newX});
    $(child).css({top: $newY});
    
}

$(document).ready(function() {
        
    $('.bg-parallax-1').scrollBackgrounds(1, '50%', 50);
    $('.bg-parallax-2').scrollBackgrounds(3, 0, 0);
    
    var $navbarElement = 'nav li a';
    var $activeColor = "#4C545D";
    var $inactiveColor = $($navbarElement).css("color");

    $(window).scroll(function() {
        $('.section-selectable').highlightSelectable($activeColor, $inactiveColor, $navbarElement);
    });
    
    centerToParent('.row.section-title', '.text-title');
});               