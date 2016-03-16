'use strict'

console.log("Algorithm is working!");

$(window).load(function(){
    
    $(function(){
     
        var box1 = $("#box1"); 
        var box2 = $("#box2");
        var box3 = $("#box3");
        var box4 = $("#box4");
        var left_button = $('#left_button'); 
        var right_button = $('#right_button'); 
        var box_container = [box1, box2, box3, box4]; 
        var button_container = [left_button, right_button]; 
        var box_hover = [false,false,false,false]; 
        var button_hover = [false,false];
        var box_click = [false,false,false,false]; 
        var url_container = ['url("/img/inv/thumb/01.jpg")', 'url("/img/inv/thumb/02.jpg")', 'url("/img/inv/thumb/03.jpg")', 'url("/img/inv/thumb/04.jpg")', 'url("/img/inv/thumb/05.jpg")', 'url("/img/inv/thumb/06.jpg")', 'url("/img/inv/thumb/07.jpg")', 'url("/img/inv/thumb/08.jpg")'];
        var current_screen = 1; 
        var number_of_screens = 2; 
        const boxes_per_screen = 4; 
        const pic_fade = 600; 
        var boxes_selected = []; 

        for (let i=0; i<number_of_screens*boxes_per_screen; i++){

            boxes_selected[i] = false; 

        }


        box1.hover(function(){
       
        	pic_hover_handler(0); 
       
        }); 

        box1.click(function(){
       
          pic_click_handler(0); 
       
        }); 

        box2.hover(function(){
       
        	pic_hover_handler(1); 
       
        }); 

        box2.click(function(){
       
          pic_click_handler(1); 
       
        }); 

        box3.hover(function(){
       
        	pic_hover_handler(2); 
       
        }); 

        box3.click(function(){
       
          pic_click_handler(2); 
       
        }); 

        box4.hover(function(){
       
        	pic_hover_handler(3); 
       
        }); 

        box4.click(function(){
       
          pic_click_handler(3); 
       
        }); 

        left_button.hover(function(){
       
          console.log("left_button hover!");
          button_hover_handler(0);    
       
        }); 

        left_button.click(function(){
       
          console.log("left_button clicked!"); 
          prev_screen(); 

       
        }); 

        right_button.hover(function(){
       
          button_hover_handler(1);

       
        }); 
        
        right_button.click(function(){
       
          console.log("right_button clicked!");   
          next_screen(); 
       
        });
        
  		for(let i=0; i<4; i++){

  			box_container[i].css({background: url_container[i]}); 

  		};

    	var pic_hover_handler = function(box_number){
	       
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

      var button_hover_handler = function(button_number){

          if(button_hover[button_number]==false){

              button_container[button_number].css({

                  opacity: '0.8'

              });

              button_hover[button_number]=true; 

          } else if(button_hover[button_number]==true){

             button_container[button_number].css({

                  opacity: '1'

              });

              button_hover[button_number]=false; 
          }
      }

      var pic_click_handler = function(box_number){

         
         if(boxes_selected[(current_screen-1)*4+box_number]==false){

            box_container[box_number].css({

                borderColor: 'rgba(255,255,0,1)'

            });

           
            boxes_selected[(current_screen-1)*4+box_number] = true; 


         } else if (boxes_selected[(current_screen-1)*4+box_number] == true){

            box_container[box_number].css({

                borderColor: 'rgba(255,255,0,0)'

            });

            boxes_selected[(current_screen-1)*4+box_number] = false;

          }     
   
       }

       var next_screen = function(){
         
          if(current_screen<number_of_screens){
            current_screen++;

            for(let i=0; i<4; i++){

                box_container[i].fadeOut(pic_fade, function(){

                box_container[i].css({

                  background: url_container[(current_screen-1)*4+i], 
                  borderColor: 'rgba(255,255,0,0)'               

                }); 

                if(boxes_selected[(current_screen-1)*4+i] == true){

                  box_container[i].css({

                    borderColor: 'rgba(255,255,0,1)'               

                  }); 

                }

              }); 

              box_container[i].fadeIn(pic_fade);

            }

          } else if(current_screen=number_of_screens){

            // Algorithm Output
            algorithm_end(); 
          }
          
          console.log(boxes_selected);
       }

       var prev_screen = function(){
         
          if(current_screen>1){

            current_screen--;

            for(let i=0; i<4; i++){
              box_container[i].fadeOut(pic_fade, function(){

                box_container[i].css({

                    background: url_container[(current_screen-1)*4+i], 
                    borderColor: 'rgba(255,255,0,0)'                   

                })

                if(boxes_selected[(current_screen-1)*4+i] == true){

                    box_container[i].css({

                    borderColor: 'rgba(255,255,0,1)'               

                  }); 

                }

              }); 

              box_container[i].fadeIn(pic_fade);

            }

          }

          console.log(boxes_selected);
        
       }

     
     // This function is called once the user has reached the last screen and clicks the next button 
     var algorithm_end = function (){


     }

    });


});