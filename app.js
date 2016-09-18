 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

            $("#forms").hide();
            $("#templates_part1").hide();
            $("#templates_part2").hide();
            $("#form4").hide();
            $("#form2").hide();
            $("#form3").hide();
            $("#form1").show();
            $("#result_container1").hide();
            $('body').css({"background-image":"url('./images/vec.jpg')" , "background-size":"cover"});
            $('#preview1 , #preview2, #preview3, #preview4' ).hide();
            //$("#result_container2").hide();
          
            

            
            // Navigation Button Control


            //Get Started
            $('#form, button#create_resume').on('click' , function () {
                $('#forms').fadeIn(200);
                $('li#details').addClass('active');
                $('li#dash').removeClass('active');
                $('li#temp').removeClass('active');
                $("#templates_part1").hide();
                $("#templates_part2").hide();
                $("#result_container1").hide();
                $('body').css({"background-image":"url('./images/vec2.jpg')" , "background-size":"cover"});
                $('#dash_container').hide();

            }); //end get started


            //Templates
            $('#show_templates').on('click' , function () {
                $("#templates_part1").fadeIn(200);
                $("#templates_part2").fadeIn(200);
                $('li#temp').addClass('active');
                $('li#details').removeClass('active');
                $('li#dash').removeClass('active');
                $("#forms").hide();
                $("#result_container1").hide();
                $('body').css({"background-image":"url('./images/vec2.jpg')" , "background-size":"cover"});
                $('#dash_container').hide();

            });//end Templates


            //Dashboard
            $('#dashboard').on('click' , function () {
                
                $('li#dash').addClass('active');
                $('li#details').removeClass('active');
                $('li#temp').removeClass('active');
                $("#forms").hide();
                $("#templates_part1").hide();
                $("#templates_part2").hide();
                $("#result_container1").hide();
                $('body').css({"background-image":"url('./images/vec.jpg')" , "background-size":"cover"});
                $('#dash_container').show();
            });//end Dashboard


            //end navigation button control


     
     /* Form Controls*/

     //Add_More Button Control
     
     $('#btn_work').on('click' , function(event){

        var len = $('#work').serializeArray().length;
        var div = len/3;
        // $('#w1').text(len);
        $('#w'+div).html(
              
                     '<div class="form-group">'+
                         '<h4>Job'+ (div+1) + ' :</h4>'+
                         '<label for="" >Job Profile</label>'+
                         '<input type="text" class="form-control" required="" placeholder="" name="job_profile">'+
                      '</div>'+
                      '<div class="form-group">'+
                         '<label for="skills">Skills Involved</label>'+
                         '<input type="text" class="form-control" required="" placeholder="" name="job_skills">'+
                      '</div>'+
                      '<div class="form-group">'+   
                         '<label for="company" >Company Name</label>'+
                         '<input type="text" class="form-control" required="" placeholder="" name="job_company">'+
                      '</div>'

            );
        
        if(len==12) {
            $('#btn_work').on('click' , function(){
                alert('We recommend you to mention only those Jobs where your role was more significant and showcases your leadership skills or helps you stand out among your peers.');
            });
        }
        event.preventDefault();

     }); 


     $('#btn_project').on('click' ,  function(event){

        var len = $('#projects').serializeArray().length;
        var div = len/2;
        // $('#w1').text(len);
        $('#p'+div).html(
              
                     '<div class="form-group">'+
                         '<h4>Project'+ (div+1) +'</h4>'+
                         '<label for="pro1_name" >Name of Project</label>'+
                         '<input type="text" class="form-control" required="" placeholder="" name="pro_name">'+
                     '</div>'+
                     '<div class="form-group">'+
                         '<label for="pro1_skills" >Skills Involved</label>'+
                         '<input type="text" class="form-control" required="" placeholder="" name="pro_skills">'+
                     '</div>'

            );
        
        if(len==10) {
            $('#btn_project').on('click' , function(){
                alert('We recommend you to mention only those Projects where your role was more significant and showcases your leadership skills or helps you stand out among your peers.');
            });
        }
        event.preventDefault();

     });


     $('#btn_achievement').on('click' , function(event){

        var len = $('#achievement').serializeArray().length;

        $('#a'+len).html('<input type="text" class="form-control" required="" placeholder="Achievement..." name="achievement"><br>');
        
        if(len==5) {
            $('#btn_achievement').on('click' , function(){
                alert('We recommend you to mention only those Achievements where your role was more significant and showcases your leadership skills or helps you stand out among your peers.');
            });
        }
        event.preventDefault();

     }); 

     $('#btn_curricular').on('click' , function(event){

        var len = $('#curricular').serializeArray().length;

        $('#c'+len).html('<input type="text" class="form-control" required="" placeholder="Acitvity and achievements..." name="curricular"><br>');
        
        if(len==5) {
            $('#btn_curricular').on('click' , function(){
                alert('We recommend you to mention only those Achievements where your role was more significant and showcases your leadership skills or helps you stand out among your peers.');
            });
        }
        event.preventDefault();

     }); 


     // end Add_More

     


     // Form Pagination

     $('#marker1 , button#pre_exp ').on('click' , function (event) {
         $('#marker1 span.glyphicon.glyphicon-map-marker').addClass('active_step');
         $('#marker2 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         $('#marker3 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         $('#marker4 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         $('#form1').show();
         $("#form2").hide();
         $("#form3").hide();
         $("#form4").hide();
         $("#result_container1").hide();
         // $('body').css({"background-image":"url('./images/vec2.jpg')" , "background-size":"cover"});
         $('#dash_container').hide();
         event.preventDefault();

     });

     
    
     $('#marker2 , button#pre_edu ' ).on('click' , function (event) {
         $('#marker2 span.glyphicon.glyphicon-map-marker').addClass('active_step');
         $('#marker1 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         $('#marker3 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         $('#marker4 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         
         $('#form2').show();
         $("#form1").hide();
         $("#form3").hide();
         $("#form4").hide();
         $("#result_container1").hide();
        
         $('#dash_container').hide();
         event.preventDefault();

     });

     $( "#next_primary" ).submit(function(event){
        $('#marker2 span.glyphicon.glyphicon-map-marker').addClass('active_step');
        $('#marker1 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
        $('#marker3 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
        $('#marker4 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
        
        $('#form2').show();
        $("#form1").hide();
        $("#form3").hide();
        $("#form4").hide();
        $("#result_container1").hide();
        
        $('#dash_container').hide();
        event.preventDefault();
     });

      // button#next_primary 

     $('#marker3 , button#pre_curricular ').on('click' , function (event) {
         $('#marker3 span.glyphicon.glyphicon-map-marker').addClass('active_step');
         $('#marker2 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         $('#marker1 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         $('#marker4 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         // $('body').css({"background-image":"url('./images/vec2.jpg')" , "background-size":"contain"});
         $('#form3').show();
         $("#form1").hide();
         $("#form2").hide();
         $("#form4").hide();
         $("#result_container1").hide();
         //$("#result_container2").hide();
         $('#dash_container').hide();
         event.preventDefault();

     });
     //button#next_exp

     $('#marker4 , button#next_edu').on('click' , function (event) {
         $('#marker4 span.glyphicon.glyphicon-map-marker').addClass('active_step');
         $('#marker2 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         $('#marker3 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         $('#marker1 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         // $('body').css({"background-image":"url('./images/vec2.jpg')" , "background-size":"cover"});
         $('#form4').show();
         $("#form1").hide();
         $("#form2").hide();
         $("#form3").hide();
         $("#result_container1").hide();
         //$("#result_container2").hide();
         $('#dash_container').hide();
         event.preventDefault();

     });
     //end of form pagination


     //Media Query
     
     if (window.matchMedia("(max-width: 767px)").matches) {
       /* the viewport is at most 767 pixels wide */
       $('#form_x , #form_xii').removeClass('form-inline');
     } else {
       /* the viewport is more than 767 pixels wide */
       $('#form_x , #form_xii').addClass('form-inline');
     }


     if (window.matchMedia("(min-width: 768px)").matches) {
       /* the viewport is at least 768 pixels wide */
       $('#form_x , #form_xii').addClass('form-inline');
     } else {
       /* the viewport is less than 768 pixels wide */
       $('#form_x , #form_xii').removeClass('form-inline');
     }

     //end media query

     /* end form controls*/


     //Template effetcs

     $('#temp_1').hover(function(){

         $('#temp1_text').css({ "margin-top":"17vw" , "text-align":"center" , "background-color":"rgba(0,0,0,0.5)" , "color":"aqua" , "cursor":"pointer"});
         $('#temp_1').css("background-color","rgba(0,0,0,0.5)");
         $('.glyphicon.glyphicon-ok.ok1').css("color","aqua");

     } , function(){
         
         $('#temp1_text').css({ "color":"transparent" , "margin-top":"17vw","background-color":"transparent" , "cursor":"auto"});
         $('#temp_1').css("background-color","transparent");
         $('.glyphicon.glyphicon-ok.ok1').css("color","transparent");

     });


     $('#temp_2').hover(function(){

         $('#temp2_text').css({ "margin-top":"17vw" , "text-align":"center" , "background-color":"rgba(0,0,0,0.5)" , "color":"aqua" ,"cursor":"pointer" });
         $('#temp_2').css("background-color","rgba(0,0,0,0.5)");
         $('.glyphicon.glyphicon-ok.ok2').css("color","aqua");

     } , function(){
         
         $('#temp2_text').css({ "color":"transparent" , "margin-top":"17vw","background-color":"transparent" , "cursor":"auto"});
         $('#temp_2').css("background-color","transparent");
         $('.glyphicon.glyphicon-ok.ok2').css("color","transparent");
         
     });

     $('#temp_3').hover(function(){

         $('#temp3_text').css({ "margin-top":"17vw" , "text-align":"center" , "background-color":"rgba(0,0,0,0.5)" , "color":"aqua","cursor":"pointer" });
         $('#temp_3').css("background-color","rgba(0,0,0,0.5)");
         $('.glyphicon.glyphicon-ok.ok3').css("color","aqua");

     } , function(){
         
         $('#temp3_text').css({ "color":"transparent" , "margin-top":"17vw","background-color":"transparent" , "cursor":"auto"});
         $('#temp_3').css("background-color","transparent");
         $('.glyphicon.glyphicon-ok.ok3').css("color","transparent");
         
     });

     $('#temp_4').hover(function(){

         $('#temp4_text').css({ "margin-top":"17vw" , "text-align":"center" , "background-color":"rgba(0,0,0,0.5)" , "color":"aqua" , "cursor":"pointer"});
         $('#temp_4').css("background-color","rgba(0,0,0,0.5)");
         $('.glyphicon.glyphicon-ok.ok4').css("color","aqua");

     } , function(){
         
         $('#temp4_text').css({ "color":"transparent" , "margin-top":"17vw","background-color":"transparent" , "cursor":"auto"});
         $('#temp_4').css("background-color","transparent");
         $('.glyphicon.glyphicon-ok.ok4').css("color","transparent");
         
     });


     $('#temp1_text').on('click' , function(){
       $('#temp_1').addClass('selected');
       $('#temp_4').removeClass('selected');
       $('#temp_2').removeClass('selected');
       $('#temp_3').removeClass('selected');
       $('#result1').show();
       $('#result2').hide();
       $('#result3').hide();
       $('#result4').hide();
       $('a button#preview1').show();
       $('a button#preview2').hide();
       $('a button#preview3').hide();
       $('a button#preview4').hide();
     });

     $('#temp2_text').on('click' , function(){
        $('#temp_2').addClass('selected');
        $('#temp_1').removeClass('selected');
        $('#temp_4').removeClass('selected');
        $('#temp_3').removeClass('selected');
        $('#result2').show();
        $('#result1').hide();
        $('#result3').hide();
        $('#result4').hide();
        $('a button#preview2').show();
        $('a button#preview1').hide();
        $('a button#preview3').hide();
        $('a button#preview4').hide();
     });

     $('#temp3_text').on('click' , function(){
        $('#temp_3').addClass('selected');
        $('#temp_1').removeClass('selected');
        $('#temp_2').removeClass('selected');
        $('#temp_4').removeClass('selected');
        $('#result3').show();
        $('#result1').hide();
        $('#result2').hide();
        $('#result4').hide();
        $('a button#preview3').show();
        $('a button#preview2').hide();
        $('a button#preview1').hide();
        $('a button#preview4').hide();
     });

     $('#temp4_text').on('click' , function(){
        $('#temp_4').addClass('selected');
        $('#temp_1').removeClass('selected');
        $('#temp_2').removeClass('selected');
        $('#temp_3').removeClass('selected');
        $('#result4').show();
        $('#result1').hide();
        $('#result2').hide();
        $('#result3').hide();
        $('a button#preview4').show();
        $('a button#preview2').hide();
        $('a button#preview3').hide();
        $('a button#preview1').hide();
     });
  
    
     $('#preview1 , #preview2, #preview3 , #preview4').on('click' , function(event){

      $("#forms").hide();
      $("#templates_part1").hide();
      $("#templates_part2").hide();
      $("#form4").hide();
      $("#form2").hide();
      $("#form3").hide();
      $("#form1").hide();
      $("#result_container1").show();
      $('body').css({"background-image":"url('./images/vec.jpg')" , "background-size":"cover"});
      event.preventDefault();

      });


     //end template effects

     
     // template1 html function
     
     var template1html =function(user){

        //Get curricular value
        var curricularValue = '';
        if(user.curricular.constructor===Array){
            // console.log("Array");
            user.curricular.forEach(function(c){
                        curricularValue += "<li>"+c+"</li>";
                        // console.log("<li>"+c+"</li>");
                        // console.log("index of"+c+":"+""+user.curricular.indexOf(c));
                    });
           
        }else{
            //console.log("Not Array");
            curricularValue = "<li>"+user.curricular+"</li>";
                                  
        }//end get curricular value


        //Get project value
        var projectValue = '';
        if(user.pro_name.constructor===Array){

            $.each(user.pro_name, function(i, item) {
                //console.log(user.pro_name[i], user.pro_skills[i]);
                    projectValue += '<li>Project '+(i+1)+':'+
                                       '<ul>'+
                                           '<li>'+user.pro_name[i]+'</li>'+
                                           '<li>'+user.pro_skills[i]+'</li>'+
                                        '</ul>'+
                                   '</li>';

            });
            
            
        }else{
            
            projectValue = '<li>Project 1 :'+
                                '<ul>'+
                                   '<li>'+user.pro_name+'</li>'+
                                   '<li>'+user.pro_skills+'</li>'+
                                '</ul>'+
                           '</li>';

        }
        //end get project value


        //Get job value
        var jobValue = '';
        if(user.job_profile.constructor===Array){
           
           $.each(user.job_profile , function(i , item){

                jobValue += '<h4>Job '+(i+1)+':'+
                            '<ul>'+
                                '<li>'+ user.job_profile[i] +'</li>'+
                                '<li>'+user.job_skills[i]+'</li>'+
                                '<li>'+user.job_company[i]+'</li>'+
                            '</ul>';

           } );
        }else{
                jobValue =  '<h4>Job 1 :'+
                            '<ul>'+
                               '<li>'+ user.job_profile +'</li>'+
                               '<li>'+user.job_skills+'</li>'+
                               '<li>'+user.job_company+'</li>'+
                            '</ul>';

        }
        //end get job value
        

        //Get achievement value
        var achievementValue = '';
        if(user.achievement.constructor===Array){
            
            $.each(user.achievement , function(i , item){

                achievementValue += '<li>'+user.achievement[i]+'</li>';
            });

        }else{
            achievementValue = '<li>'+user.achievement+'</li>';

        }
        //end get achievement value
        
        


        var html = 
        '<!DOCTYPE html>'+
        '<html>'+
        '<head>'+
            '<title>Resume</title>'+
            '<style>'+
            'body {'+
                'font-size:11px;'+
            '}'+
            'table {'+
                'width:100%;'+
            '}'+
            'table, th, td {'+
                'border: 1px solid black;'+
                'border-collapse: collapse;'+
            '}'+
            'th, td {'+
                'padding: 5px;'+
                'text-align: left;'+
            '}'+
            'hr {'+
                'border-color: black;'+
            '}'+
            'h2{'+
                'font-size: 18px;'+
            '}'+
            'h3{'+
                'font-size: 14px;'+
            '}'+
            'h4{'+
                'font-size: 11px;'+
            '}'+

            'ul>li {'+
                'font-size: 11px;'+
            '}'+

            '</style>'+
        '</head>'+
        '<body style="border: 1px solid; padding : 10px; margin:10px;">'+
        '<h2 style="font-weight:normal;font">' + user.fullname +'<br>' + user.high_deg +' ,'+ user.high_spec  +', '+ user.high_year +', <br>'+ user.mob_no+', '+ user.email +'</h2>'+
        '<hr>'+
        '<h3>WORK EXPERIENCE</h3>'+
        '<h4>Past Job Experience</h4>'+
        '<ol>'+
            
            jobValue+

        '</ol>'+
        '<h4>Projects</h4>'+
        '<ol>'+

            projectValue+

        '</ol>'+
        '<h4>Achievements</h4>'+
        '<ul>'+

           achievementValue+

        '</ul>'+
        '<h3>EDUCATIONAL QUALIFICATION</h3>'+
        '<table border="1px black solid"  cellspacing="0" cellpadding="7px"  >'+
            '<tr><th> Instituition     </th><th>      Marks in Percentage      </th><th>      Year of Completion      </th><th>       Achievement      </th></tr>'+
            '<tr>'+
                '<td>'+ user.xthboard +'</td>'+
                '<td>'+ user.xthmarks +'</td>'+
                '<td>'+ user.xthyear +'</td>'+
                '<td>'+ user.xthper +'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>'+ user.xiithboard +'</td>'+
                '<td>'+ user.xiithmarks +'</td>'+
                '<td>'+ user.xiithyear +'</td>'+
                '<td>'+ user.xiithper +'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>'+ user.gradboard +'</td>'+
                '<td>'+ user.gradmarks +'</td>'+
                '<td>'+ user.high_year +'</td>'+
                '<td>'+ user.gradper +'</td>'+
            '</tr>'+
        '</table>'+
        '<h3>EXTRA CURRICULAR ACTIVITIES AND ACHIEVEMENTS</h3>'+
        '<ul>'+
            curricularValue+
        '</ul>'+
        '</body>'+
        '</html>'

        return html;


     };


     //end template1 html function




     // template2 html function
     
     var template2html =function(user){

        //Get curricular value
        var curricularValue = '';
        if(user.curricular.constructor===Array){
            // console.log("Array");
            user.curricular.forEach(function(c){
                        curricularValue += "<li>"+c+"</li>";
                        // console.log("<li>"+c+"</li>");
                        // console.log("index of"+c+":"+""+user.curricular.indexOf(c));
                    });
           
        }else{
            //console.log("Not Array");
            curricularValue = "<li>"+user.curricular+"</li>";
                                  
        }//end get curricular value


        //Get project value
        var projectValue = '';
        if(user.pro_name.constructor===Array){

            $.each(user.pro_name, function(i, item) {
                //console.log(user.pro_name[i], user.pro_skills[i]);
                    projectValue += '<li>Project '+(i+1)+':'+
                                       '<ul>'+
                                           '<li>'+user.pro_name[i]+'</li>'+
                                           '<li>'+user.pro_skills[i]+'</li>'+
                                        '</ul>'+
                                   '</li>';

            });
            
            
        }else{
            
            projectValue = '<li>Project 1 :'+
                                '<ul>'+
                                   '<li>'+user.pro_name+'</li>'+
                                   '<li>'+user.pro_skills+'</li>'+
                                '</ul>'+
                           '</li>';

        }
        //end get project value


        //Get job value
        var jobValue = '';
        if(user.job_profile.constructor===Array){
           
           $.each(user.job_profile , function(i , item){

                jobValue += '<h4>Job '+(i+1)+':'+
                            '<ul>'+
                                '<li>'+ user.job_profile[i] +'</li>'+
                                '<li>'+user.job_skills[i]+'</li>'+
                                '<li>'+user.job_company[i]+'</li>'+
                            '</ul>';

           } );
        }else{
                jobValue =  '<h4>Job 1 :'+
                            '<ul>'+
                               '<li>'+ user.job_profile +'</li>'+
                               '<li>'+user.job_skills+'</li>'+
                               '<li>'+user.job_company+'</li>'+
                            '</ul>';

        }
        //end get job value
        

        //Get achievement value
        var achievementValue = '';
        if(user.achievement.constructor===Array){
            
            $.each(user.achievement , function(i , item){

                achievementValue += '<li>'+user.achievement[i]+'</li>';
            });

        }else{
            achievementValue = '<li>'+user.achievement+'</li>';

        }
        //end get achievement value

            var html = 
        '<!DOCTYPE html>'+
        '<html>'+
        '<head>'+
            '<title>Resume</title>'+
            '<style>'+
            'body {'+
                'font-size:11px;'+
            '}'+
            'table {'+
                'width:100%;'+
            '}'+
            'table, th, td {'+
                'border: 1px solid black;'+
                'border-collapse: collapse;'+
            '}'+
            'th, td {'+
                'padding: 5px;'+
                'text-align: left;'+
            '}'+
            'hr {'+
                'border-color: black;'+
            '}'+
            'h2{'+
                'font-size: 18px;'+
            '}'+
            'h3{'+
                'font-size: 14px;'+
            '}'+
            'h4{'+
                'font-size: 11px;'+
            '}'+

            'ul>li {'+
                'font-size: 11px;'+
            '}'+

            '</style>'+
        '</head>'+
        '<body style="border: 1px solid; padding : 10px; margin:10px;">'+
        '<h2 style="font-weight:normal ; text-align: center;">' + user.fullname +'<br>' + user.high_deg +' ,'+ user.high_spec +', '+ user.high_year +', <br>'+ user.mob_no+', '+ user.email +'</h2>'+
        '<hr>'+
        '<h3>WORK EXPERIENCE</h3>'+
        '<h4>Past Job Experience</h4>'+
        '<ol>'+
            
            jobValue+

        '</ol>'+
        '<h4>Projects</h4>'+
        '<ol>'+

            projectValue+

        '</ol>'+
        '<h4>Achievements</h4>'+
        '<ul>'+

           achievementValue+

        '</ul>'+
        '<h3>EDUCATIONAL QUALIFICATION</h3>'+
        '<table border="1px black solid"  cellspacing="0" cellpadding="7px"  >'+
            '<tr><th> Instituition     </th><th>      Marks in Percentage      </th><th>      Year of Completion      </th><th>       Achievement      </th></tr>'+
            '<tr>'+
                '<td>'+ user.xthboard +'</td>'+
                '<td>'+ user.xthmarks +'</td>'+
                '<td>'+ user.xthyear +'</td>'+
                '<td>'+ user.xthper +'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>'+ user.xiithboard +'</td>'+
                '<td>'+ user.xiithmarks +'</td>'+
                '<td>'+ user.xiithyear +'</td>'+
                '<td>'+ user.xiithper +'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>'+ user.gradboard +'</td>'+
                '<td>'+ user.gradmarks +'</td>'+
                '<td>'+ user.high_year +'</td>'+
                '<td>'+ user.gradper +'</td>'+
            '</tr>'+
        '</table>'+
        '<h3>EXTRA CURRICULAR ACTIVITIES AND ACHIEVEMENTS</h3>'+
        '<ul>'+
            curricularValue+
        '</ul>'+
        '</body>'+
        '</html>'

        return html;


     };


     //end template2 html function
     

     // template3 html function
     
     var template3html =function(user){

        //Get curricular value
        var curricularValue = '';
        if(user.curricular.constructor===Array){
            // console.log("Array");
            user.curricular.forEach(function(c){
                        curricularValue += "<li>"+c+"</li>";
                        // console.log("<li>"+c+"</li>");
                        // console.log("index of"+c+":"+""+user.curricular.indexOf(c));
                    });
           
        }else{
            //console.log("Not Array");
            curricularValue = "<li>"+user.curricular+"</li>";
                                  
        }//end get curricular value


        //Get project value
        var projectValue = '';
        if(user.pro_name.constructor===Array){

            $.each(user.pro_name, function(i, item) {
                //console.log(user.pro_name[i], user.pro_skills[i]);
                    projectValue += '<li>Project '+(i+1)+':'+
                                       '<ul>'+
                                           '<li>'+user.pro_name[i]+'</li>'+
                                           '<li>'+user.pro_skills[i]+'</li>'+
                                        '</ul>'+
                                   '</li>';

            });
            
            
        }else{
            
            projectValue = '<li>Project 1 :'+
                                '<ul>'+
                                   '<li>'+user.pro_name+'</li>'+
                                   '<li>'+user.pro_skills+'</li>'+
                                '</ul>'+
                           '</li>';

        }
        //end get project value


        //Get job value
        var jobValue = '';
        if(user.job_profile.constructor===Array){
           
           $.each(user.job_profile , function(i , item){

                jobValue += '<h4>Job '+(i+1)+':'+
                            '<ul>'+
                                '<li>'+ user.job_profile[i] +'</li>'+
                                '<li>'+user.job_skills[i]+'</li>'+
                                '<li>'+user.job_company[i]+'</li>'+
                            '</ul>';

           } );
        }else{
                jobValue =  '<h4>Job 1 :'+
                            '<ul>'+
                               '<li>'+ user.job_profile +'</li>'+
                               '<li>'+user.job_skills+'</li>'+
                               '<li>'+user.job_company+'</li>'+
                            '</ul>';

        }
        //end get job value
        

        //Get achievement value
        var achievementValue = '';
        if(user.achievement.constructor===Array){
            
            $.each(user.achievement , function(i , item){

                achievementValue += '<li>'+user.achievement[i]+'</li>';
            });

        }else{
            achievementValue = '<li>'+user.achievement+'</li>';

        }
        //end get achievement value

            var html = 
        '<!DOCTYPE html>'+
        '<html>'+
        '<head>'+
            '<title>Resume</title>'+
            '<style>'+
            'body {'+
                'font-size:11px;'+
            '}'+
            'table {'+
                'width:100%;'+
            '}'+
            'table, th, td {'+
                'border: 1px solid black;'+
                'border-collapse: collapse;'+
            '}'+
            'th, td {'+
                'padding: 5px;'+
                'text-align: left;'+
            '}'+
            'hr {'+
                'border-color: black;'+
            '}'+
            'h2{'+
                'font-size: 18px;'+
            '}'+
            'h3{'+
                'font-size: 14px;'+
            '}'+
            'h4{'+
                'font-size: 11px;'+
            '}'+

            'ul>li {'+
                'font-size: 11px;'+
            '}'+

            '</style>'+
        '</head>'+
        '<body style="border: 1px solid; padding : 10px; margin:10px;">'+
        '<h2 style="font-weight:normal ; text-align: center;">' + user.fullname +'<br>' + user.high_deg +' ,'+ user.high_spec +', '+ user.high_year +', <br>'+ user.mob_no+', '+ user.email +'</h2>'+
        '<hr>'+
        '<h3> WORK EXPERIENCE </h3>'+
        '<h4>Projects</h4>'+
        '<ol>'+

            projectValue+

        '</ol>'+
        '<h4>Achievements</h4>'+
        '<ul>'+

           achievementValue+

        '</ul>'+
        '<h3>EDUCATIONAL QUALIFICATION</h3>'+
        '<table border="1px black solid"  cellspacing="0" cellpadding="7px"  >'+
            '<tr><th> Instituition     </th><th>      Marks in Percentage      </th><th>      Year of Completion      </th><th>       Achievement      </th></tr>'+
            '<tr>'+
                '<td>'+ user.xthboard +'</td>'+
                '<td>'+ user.xthmarks +'</td>'+
                '<td>'+ user.xthyear +'</td>'+
                '<td>'+ user.xthper +'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>'+ user.xiithboard +'</td>'+
                '<td>'+ user.xiithmarks +'</td>'+
                '<td>'+ user.xiithyear +'</td>'+
                '<td>'+ user.xiithper +'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>'+ user.gradboard +'</td>'+
                '<td>'+ user.gradmarks +'</td>'+
                '<td>'+ user.high_year +'</td>'+
                '<td>'+ user.gradper +'</td>'+
            '</tr>'+
        '</table>'+
        '<h3>EXTRA CURRICULAR ACTIVITIES AND ACHIEVEMENTS</h3>'+
        '<ul>'+
            curricularValue+
        '</ul>'+
        '</body>'+
        '</html>'

        return html;


     };


     //end template3 html function


     // template4 html function
     
     var template4html =function(user){

        //Get curricular value
        var curricularValue = '';
        if(user.curricular.constructor===Array){
            // console.log("Array");
            user.curricular.forEach(function(c){
                        curricularValue += "<li>"+c+"</li>";
                        // console.log("<li>"+c+"</li>");
                        // console.log("index of"+c+":"+""+user.curricular.indexOf(c));
                    });
           
        }else{
            //console.log("Not Array");
            curricularValue = "<li>"+user.curricular+"</li>";
                                  
        }//end get curricular value


        //Get project value
        var projectValue = '';
        if(user.pro_name.constructor===Array){

            $.each(user.pro_name, function(i, item) {
                //console.log(user.pro_name[i], user.pro_skills[i]);
                    projectValue += '<li>Project '+(i+1)+':'+
                                       '<ul>'+
                                           '<li>'+user.pro_name[i]+'</li>'+
                                           '<li>'+user.pro_skills[i]+'</li>'+
                                        '</ul>'+
                                   '</li>';

            });
            
            
        }else{
            
            projectValue = '<li>Project 1 :'+
                                '<ul>'+
                                   '<li>'+user.pro_name+'</li>'+
                                   '<li>'+user.pro_skills+'</li>'+
                                '</ul>'+
                           '</li>';

        }
        //end get project value


        //Get job value
        var jobValue = '';
        if(user.job_profile.constructor===Array){
           
           $.each(user.job_profile , function(i , item){

                jobValue += '<h4>Job '+(i+1)+':'+
                            '<ul>'+
                                '<li>'+ user.job_profile[i] +'</li>'+
                                '<li>'+user.job_skills[i]+'</li>'+
                                '<li>'+user.job_company[i]+'</li>'+
                            '</ul>';

           } );
        }else{
                jobValue =  '<h4>Job 1 :'+
                            '<ul>'+
                               '<li>'+ user.job_profile +'</li>'+
                               '<li>'+user.job_skills+'</li>'+
                               '<li>'+user.job_company+'</li>'+
                            '</ul>';

        }
        //end get job value
        

        //Get achievement value
        var achievementValue = '';
        if(user.achievement.constructor===Array){
            
            $.each(user.achievement , function(i , item){

                achievementValue += '<li>'+user.achievement[i]+'</li>';
            });

        }else{
            achievementValue = '<li>'+user.achievement+'</li>';

        }
        //end get achievement value

            var html = 
        '<!DOCTYPE html>'+
        '<html>'+
        '<head>'+
            '<title>Resume</title>'+
            '<style>'+
            'body {'+
                'font-size:11px;'+
            '}'+
            'table {'+
                'width:100%;'+
            '}'+
            'table, th, td {'+
                'border: 1px solid black;'+
                'border-collapse: collapse;'+
            '}'+
            'th, td {'+
                'padding: 5px;'+
                'text-align: left;'+
            '}'+
            'hr {'+
                'border-color: black;'+
            '}'+
            'h2{'+
                'font-size: 18px;'+
            '}'+
            'h3{'+
                'font-size: 14px;'+
            '}'+
            'h4{'+
                'font-size: 11px;'+
            '}'+

            'ul>li {'+
                'font-size: 11px;'+
            '}'+

            '</style>'+
        '</head>'+
        '<body style="border: 1px solid; padding : 10px; margin:10px;">'+
        '<h2 style="font-weight:normal ; ">' + user.fullname +'<br>' + user.high_deg +' ,'+ user.high_spec +', '+ user.high_year +', <br>'+ user.mob_no+', '+ user.email +'</h2>'+
        '<hr>'+
        '<h3> WORK EXPERIENCE </h3>'+
        '<h4>Projects</h4>'+
        '<ol>'+

            projectValue+

        '</ol>'+
        '<h4>Achievements</h4>'+
        '<ul>'+

           achievementValue+

        '</ul>'+
        '<h3>EDUCATIONAL QUALIFICATION</h3>'+
        '<table border="1px black solid"  cellspacing="0" cellpadding="7px"  >'+
            '<tr><th> Instituition     </th><th>      Marks in Percentage      </th><th>      Year of Completion      </th><th>       Achievement      </th></tr>'+
            '<tr>'+
                '<td>'+ user.xthboard +'</td>'+
                '<td>'+ user.xthmarks +'</td>'+
                '<td>'+ user.xthyear +'</td>'+
                '<td>'+ user.xthper +'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>'+ user.xiithboard +'</td>'+
                '<td>'+ user.xiithmarks +'</td>'+
                '<td>'+ user.xiithyear +'</td>'+
                '<td>'+ user.xiithper +'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>'+ user.gradboard +'</td>'+
                '<td>'+ user.gradmarks +'</td>'+
                '<td>'+ user.high_year +'</td>'+
                '<td>'+ user.gradper +'</td>'+
            '</tr>'+
        '</table>'+
        '<h3>EXTRA CURRICULAR ACTIVITIES AND ACHIEVEMENTS</h3>'+
        '<ul>'+
            curricularValue+
        '</ul>'+
        '</body>'+
        '</html>'

        return html;


     };


     //end template4 html function


         $.fn.serializeObject = function()
     {
         var o = {};
         var a = this.serializeArray();
         $.each(a, function() {
             if (o[this.name] !== undefined) {
                 if (!o[this.name].push) {
                     o[this.name] = [o[this.name]];
                 }
                 o[this.name].push(this.value || '');
             } else {
                 o[this.name] = this.value || '';
             }
         });
         return o;
     };

     



     //validation

    jQuery.validator.setDefaults({
      debug: true,
      success: "valid",
      submitHandler : function(event){

        if($('#form1').is(':visible')){

                    $('#marker2 span.glyphicon.glyphicon-map-marker').addClass('active_step');
                    $('#marker1 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
                    $('#marker3 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
                    $('#marker4 span.glyphicon.glyphicon-map-marker').removeClass('active_step');                   
                    $('#form2').show();
                    $("#form1").hide();
                    $("#form3").hide();
                    $("#form4").hide();
                    $("#result_container1").hide();
                    
                    $('#dash_container').hide();
                    
        }else if($('#form2').is(':visible')){

            $('#marker3 span.glyphicon.glyphicon-map-marker').addClass('active_step');
            $('#marker2 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
            $('#marker1 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
            $('#marker4 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
            $('#form3').show();
            $("#form1").hide();
            $("#form2").hide();
            $("#form4").hide();
            $("#result_container1").hide();
            //$("#result_container2").hide();
            $('#dash_container').hide();
            //event.preventDefault();
        }else if($('#form3').is(':visible')){

            $('#marker4 span.glyphicon.glyphicon-map-marker').addClass('active_step');
            $('#marker2 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
            $('#marker3 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
            $('#marker1 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
            // $('body').css({"background-image":"url('./images/vec2.jpg')" , "background-size":"cover"});
            $('#form4').show();
            $("#form1").hide();
            $("#form2").hide();
            $("#form3").hide();
            $("#result_container1").hide();
            //$("#result_container2").hide();
            $('#dash_container').hide();
           
        }else {

            var userobj = JSON.stringify($('form').serializeObject());
            var user = JSON.parse(userobj);
            
            //console.log(user);
            //$('#result1 , #result2').text(userobj);
            $('#result1').html(template1html(user));
            $('#result2').html(template2html(user));
            $('#result3').html(template3html(user));
            $('#result4').html(template4html(user));
            $("#templates_part1").fadeIn(200);
            $("#templates_part2").fadeIn(200);
            $('li#temp').removeClass('active');
            $('li#details').removeClass('active');
            $('li#dash').removeClass('active');
            $("#forms").hide();
            $("#result_container1").hide();
            // $('body').css({"background-image":"url('./images/vec2.jpg')" , "background-size":"contain"});
            $('#dash_container').hide();
        }
        
        event.preventDefault();
        }//end submitHandler
    });//end setDefaults

    $('#third_form').on('submit' , function(event){
       $('#marker4 span.glyphicon.glyphicon-map-marker').addClass('active_step');
       $('#marker2 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
       $('#marker3 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
       $('#marker1 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
       // $('body').css({"background-image":"url('./images/vec2.jpg')" , "background-size":"cover"});
       $('#form4').show();
       $("#form1").hide();
       $("#form2").hide();
       $("#form3").hide();
       $("#result_container1").hide();
       //$("#result_container2").hide();
       $('#dash_container').hide();
       event.preventDefault(); 
    });
    
    $('#next_exp').on('click' , function(){
        $('#work').submit();
        $('#projects').submit();
        $('#achievement').submit();
        
    });
   
    $('#done').on('click' , function(){
        $('#curricular').submit();
    });

    $('#first_form').validate();
    $('#work').validate();
    $('#projects').validate();
    $('#achievement').validate();
    $('#curricular').validate(function(event){
        event.preventDefault();
    });
    //end validation
    

     




  });//end main document