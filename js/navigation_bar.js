$(window).load(function(){
    $(function(){
        window.alert("THIS IS A TEST"); 
        var nav = $(".floating_nav_background"); 
        var navHomeY = nav.offset().top; 
        var isVisible = false; 
        var $w = $(window); 
        window.alert("test");
        $w.scroll(function(){
            var scrollTop = $w.scrollTop(); 
            console.log(scrollTop); 
            var shouldBeVisible = scrollTop > navHomeY; 
            if (shouldBeVisible && !isVisible){

                nav.css({
                    visibility: 'visible';
                    
                }); 

                isVisible=true; 
            }
            else if (!shouldBeVisible && isVisible) {
               
                nav.css({
                    visibility: 'hidden'; 
                });
                isVisible = false; 

            }
        }); 

    });
});