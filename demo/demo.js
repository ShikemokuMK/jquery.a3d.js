
$(function(){

    var normal_config = 
        {
            duration:"2s",
            easing:"ease"
        };
        
    var slow_config = {
            duration:"4s",
            easing:"ease"
            
        }; 

   var slow_config2 = {
            duration:"10s",
            easing:"ease"
            
        }; 

   $("#up").click(function(){
        
        $(".helicopter").a3d(
            
            {
                 frames:{
                        "100%":
                        {
                            trans:{y:"=-100px"}
                 
                        },
                        
                },
                config : normal_config
                ,
                
               complete:function(){}
               }
        
        );
        
   });
   
   $("#down").click(function(){
            $(".helicopter").a3d(
            
            {
                 frames:{
                        
                        "100%":
                        {
                            trans:{"y":"=+100px"}
                        }
                        
                },
                config : normal_config
                ,
                
               complete:function(){}
               }
        
        );
    });
    
    $("#forward").click(function(){
            $(".helicopter").a3d(
            
            {
                 frames:{
                        
                        "60%":
                        {
                            trans:{"x":"=+90px","rotate":"20deg"}
                        },
                        "100%":
                        {
                            trans:{"x":"=+10px","rotate":"0deg"}
                        }
                        
                },
                config : normal_config
                ,
                
               complete:function(){}
               }
        
        );
    });
    
    $("#back").click(function(){
            $(".helicopter").a3d(
            
            {
                 frames:{
                        
                        "60%":
                        {
                            trans:{"x":"=-90px","rotate":"-20deg"}
                        },
                        "100%":
                        {
                            trans:{"x":"=-10px","rotate":"0deg"}
                        }
                        
                },
                config : normal_config
                ,
                
               complete:function(){}
               }
        
        );
    });
    
            
   $("#acro").click(function(){
            $(".helicopter").a3d(
            {
                 frames:{
                        "100%":
                        {
                            trans:{"rotate":"180deg"}
                        }
                },
                config : normal_config
                ,
               complete:function(){}
               }
        );
            
   });

  $("#acrostop").click(function(){
            $(".helicopter").a3d(
            {
                 frames:{
                        "100%":
                        {
                            trans:{"rotate":"0deg"}
                        }
                },
                config : normal_config
                ,
               complete:function(){}
            }
           );
          
   });
   
   $("#fuwa").click(function(){
            $(".helicopter").a3d(
            {
                 frames:{
                        
                        
                        "100%":{
                            trans:{"y":"=-50px"},
                            ext:function(){
                                
                            }
                            
                        }
                        
                },
                config : {
                    duration:"1s",
                    easing:"ease",
                    count:"infinite",
                    direction:"alternate"
                }
                ,
               complete:function(){
                 console.log($(this));
               },
               start:function(){
                   console.log($(this));
               },
               iteration:function(){
                 console.log($(this));
               }
             }
        );
            
   });
   
   
   $("#kf").click(function(){
   
      $(".helicopter").a3d(
               {
                 frames:{
                        "0%":
                        {
                            trans:{"rotate":"0deg"},
                            ext:function(){$("#keyframe_percentage").html("0%")}
                        },
                        "15%":
                        {
                            trans:{"rotateY":"180deg","y":"-100px","x":"-100px"}
                            ,ext:function(){$("#keyframe_percentage").html("15%")}
                        },
                        "35%":
                        {
                            trans:{"rotate":"360deg","y":"-200px","x":"-200px","scale":"0.3"}
                            ,ext:function(){$("#keyframe_percentage").html("35%")}
                        },
                        "75%":
                        {
                            trans:{"rotate":"360deg","y":"-300px","x":"-100px","scale":"2"}
                            ,ext:function(){$("#keyframe_percentage").html("75%") ;}
                        },
                        "100%":
                        {
                            trans:{"rotateY":"0deg","y":"0px","x":"0px","scale":"1"}
                            ,ext:function(){$("#keyframe_percentage").html("100%");}
                        }
                        
                },
                config : slow_config2
                ,
               complete:function(){
                   
               }
               }
                
            );
      
   });
   
   $("#missile").click(function(){
   
       //機体の現在位置を取得、そこからミサイルを発射
       var pos_array = $(".helicopter").a3dInfo();
       
       var point = pos_array[0]["point"];
       
       var j_missile = $("<img style='position:absolute' src='./images/rocket.png' />");
       
       j_missile.css("left",$(".helicopter").offset().left);
       j_missile.css("top",$(".helicopter").offset().top);
       
       $("#main").append(j_missile);
       
       j_missile.a3d(
                {
                  frames:{
                  
                       "0%":{
                                trans:{},
                                styles:{"opacity":"0"}
                                
                        },
                       "20%":{
                                trans:{x:"=-30",y:"=+30","rotate":"36deg"},
                                styles:{"opacity":"1"}
                                
                        },
                       "30%":{
                                trans:{x:"=-20",y:"=+20","rotate":"46deg"}
                        },
                         
                       "100%":{
                                trans:{x:"*950"}
                        },

                   }
                   ,
                   config:{
                        duration:"4s",
                        state:"running",
                        easing:"ease"
                       
                   }
                }
                
      );
   
   });
   
   $("#init").click(function(){
   
      $(".helicopter").a3d(
                {
                  frames:{
                  
                  "100%":{
                            trans:{x:0,y:0,z:0}
                        }
                   }
                   ,
                   config:{
                        duration:"4s",
                        state:"running",
                        easing:"ease"
                       
                   }
                }
                
      );
      
      
   });
   
   
   $("#chain").click(function(){
        var a3d_acro =            
        {
                 frames:{
                        "100%":
                        {
                            trans:{"rotate":"180deg"}
                        }
                },
                config : normal_config
                ,
               complete:function(){}
        };
        
        var a3d_forward = 
        {
                 frames:{
                        
                        "60%":
                        {
                            trans:{"x":"=+90px","rotate":"20deg"}
                        },
                        "100%":
                        {
                            trans:{"x":"=+10px","rotate":"0deg"}
                        }
                        
                },
                config : normal_config
                ,
                
               complete:function(){}
          };
          
          var a3d_back = 
          {
                 frames:{
                        
                        "60%":
                        {
                            trans:{"x":"=-90px","rotate":"-20deg"}
                        },
                        "100%":
                        {
                            trans:{"x":"=-10px","rotate":"0deg"}
                        }
                        
                },
                config : normal_config
                ,
               complete:function(){}
         };          
          
          
          $(".helicopter").a3dChain([a3d_acro,a3d_forward,a3d_back]);

   
   });
   
});


