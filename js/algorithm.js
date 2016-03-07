'use strict'

console.log("Algorithm is working!");

$(window).load(function(){
    $(function(){
     
        var box1 = $("#box1"); 
        var box2 = $("#box2");
        var box3 = $("#box3");
        var box4 = $("#box4");

        box1.hover(function(){
       
        	hover_handler(0); 
       
        }); 

        box2.hover(function(){
       
        	hover_handler(1); 
       
        }); 

        box3.hover(function(){
       
        	hover_handler(2); 
       
        }); 

        box4.hover(function(){
       
        	hover_handler(3); 
       
        }); 


        // -----------CODE FOR BOX 1-----------//
        
        var box_container = [box1, box2, box3, box4]; 
        var box_hover = [false,false,false,false]; 
  		var url_container = ['url("/img/inv/thumb/01.jpg")', 'url("/img/inv/thumb/02.jpg")', 'url("/img/inv/thumb/03.jpg")', 'url("/img/inv/thumb/04.jpg")'];  

  		for(var i=0; i<4 ; i++){

  			box_container[i].css({background: url_container[i]}); 
  		};

    	var hover_handler = function(box_number){
	       
	       if(box_hover[box_number]==false){

	       		box_container[box_number].css({

	       				opacity: '0.8'  

       			});

	       		box_hover[box_number] = true; 

	       } else if (box_hover[box_number] == true){

	       		box_container[box_number].css({

	       				opacity: '1.0' 

       			});

	       		box_hover[box_number] = false;
       		}     
   
       }
    });
});