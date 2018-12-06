$(function() {
   
    function monParallax() {
        
        
    
        var positionScroll = $(window).scrollTop();
        
        //console.log(positionScroll);
        
        $("#slide-home").css("backgroundPosition", "50% " + -(positionScroll / 6) + "px");
    
    }
    
    $(window).on('scroll', function() {
        
        monParallax();
        
    })
    
    
        
});