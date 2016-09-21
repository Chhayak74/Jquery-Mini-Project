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
            $('#achievement').hide();
            $('#projects').hide();
            
          
            

            
            // Navigation Button Control


            //Get Started
            $('#form, button#create_resume').on('click' , function () {
                $('#forms').fadeIn(200);
                $("#form1").show();
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
                         '<input type="text" class="form-control" required=""  placeholder="" name="job_profile'+(div+1)+'">'+
                      '</div>'+
                      '<div class="form-group">'+
                         '<label for="skills">Skills Involved</label>'+
                         '<input type="text" class="form-control" required="" placeholder="" name="job_skills'+(div+1)+'">'+
                      '</div>'+
                      '<div class="form-group">'+   
                         '<label for="company" >Company Name</label>'+
                         '<input type="text" class="form-control" required="" placeholder="" name="job_company'+(div+1)+'">'+
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
                         '<input type="text" class="form-control" required=""  placeholder="" name="pro_name'+(div+1)+'">'+
                     '</div>'+
                     '<div class="form-group">'+
                         '<label for="pro1_skills" >Skills Involved</label>'+
                         '<input type="text" class="form-control" required="" placeholder="" name="pro_skills'+(div+1)+'">'+
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

        $('#a'+len).html('<input type="text" class="form-control" required="" placeholder="Achievement..." name="achievement'+(len+1)+'"><br>');
        
        if(len==5) {
            $('#btn_achievement').on('click' , function(){
                alert('We recommend you to mention only those Achievements where your role was more significant and showcases your leadership skills or helps you stand out among your peers.');
            });
        }
        event.preventDefault();

     }); 

     $('#btn_curricular').on('click' , function(event){

        var len = $('#curricular').serializeArray().length;

        $('#c'+len).html('<input type="text" class="form-control" required="" placeholder="Acitvity and achievements..." name="curricular'+(len+1)+'"><br>');
        
        if(len==5) {
            $('#btn_curricular').on('click' , function(){
                alert('We recommend you to mention only those Achievements where your role was more significant and showcases your leadership skills or helps you stand out among your peers.');
            });
        }
        event.preventDefault();

     }); 


     // end Add_More

     


     // Form Pagination

     $(' button#pre_exp ').on('click' , function (event) {
         $('#marker1 span.glyphicon.glyphicon-map-marker').addClass('active_step');
         $('#form1').show();
         $("#form2").hide();
         $("#form3").hide();
         $("#form4").hide();
         $("#result_container1").hide();
         // $('body').css({"background-image":"url('./images/vec2.jpg')" , "background-size":"cover"});
         $('#dash_container').hide();
         event.preventDefault();

     });

     
    
     $('#marker2, button#pre_edu ' ).on('click' , function (event) {
         $('#marker2 span.glyphicon.glyphicon-map-marker').addClass('active_step');        
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
        $('#form2').show();
        $("#form1").hide();
        $("#form3").hide();
        $("#form4").hide();
        $("#result_container1").hide();
        
        $('#dash_container').hide();
        event.preventDefault();
     });

      

     $(' button#pre_curricular ').on('click' , function (event) {
         $('#marker3 span.glyphicon.glyphicon-map-marker').addClass('active_step');
         $('#form3').show();
         $("#form1").hide();
         $("#form2").hide();
         $("#form4").hide();
         $("#result_container1").hide();
         $('#dash_container').hide();
         event.preventDefault();

     });
    

     $(' button#next_edu').on('click' , function (event) {
         $('#marker4 span.glyphicon.glyphicon-map-marker').addClass('active_step');
         $('#form4').show();
         $("#form1").hide();
         $("#form2").hide();
         $("#form3").hide();
         $("#result_container1").hide();
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
     
     var template1html =function(user , job_profile , job_skills , job_company ,pro_name, pro_skills , achievement , curricular){

        //Get curricular value

        var curricularValue = '';

        curricular.forEach(function(c){
                                curricularValue += "<li>"+c+"</li>";
                                // console.log("<li>"+c+"</li>");
                                // console.log("index of"+c+":"+""+user.curricular.indexOf(c));
                            });


        //end get curricular value


        //Get project value
        var projectValue = '';
        $.each(pro_name, function(i, item) {
            //console.log(user.pro_name[i], user.pro_skills[i]);
                projectValue += '<li>Project '+(i+1)+':'+
                                   '<ul>'+
                                       '<li>'+pro_name[i]+'</li>'+
                                       '<li>'+pro_skills[i]+'</li>'+
                                    '</ul>'+
                               '</li>';

        });

        //end get project value


        //Get job value

        var jobValue = '';
        $.each(job_profile , function(i , item){

             jobValue += '<h4>Job '+(i+1)+':'+
                         '<ul>'+
                             '<li>'+ job_profile[i] +'</li>'+
                             '<li>'+ job_skills[i] +'</li>'+
                             '<li>'+ job_company[i] +'</li>'+
                         '</ul>';

        });

        
        //end get job value
        

        //Get achievement value
        var achievementValue = '';
        $.each(achievement , function(i , item){

            achievementValue += '<li>'+ achievement[i] +'</li>';
        });

        
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
     
     var template2html =function(user , job_profile , job_skills , job_company ,pro_name, pro_skills , achievement , curricular){

        //Get curricular value

        var curricularValue = '';

        curricular.forEach(function(c){
                                curricularValue += "<li>"+c+"</li>";
                                // console.log("<li>"+c+"</li>");
                                // console.log("index of"+c+":"+""+user.curricular.indexOf(c));
                            });


        //end get curricular value


        //Get project value
        var projectValue = '';
        $.each(pro_name, function(i, item) {
            //console.log(user.pro_name[i], user.pro_skills[i]);
                projectValue += '<li>Project '+(i+1)+':'+
                                   '<ul>'+
                                       '<li>'+pro_name[i]+'</li>'+
                                       '<li>'+pro_skills[i]+'</li>'+
                                    '</ul>'+
                               '</li>';

        });

        //end get project value


        //Get job value

        var jobValue = '';
        $.each(job_profile , function(i , item){

             jobValue += '<h4>Job '+(i+1)+':'+
                         '<ul>'+
                             '<li>'+ job_profile[i] +'</li>'+
                             '<li>'+ job_skills[i] +'</li>'+
                             '<li>'+ job_company[i] +'</li>'+
                         '</ul>';

        });

        
        //end get job value
        

        //Get achievement value
        var achievementValue = '';
        $.each(achievement , function(i , item){

            achievementValue += '<li>'+ achievement[i] +'</li>';
        });

        
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
     
     var template3html =function(user , job_profile , job_skills , job_company ,pro_name, pro_skills , achievement , curricular){

        //Get curricular value

        var curricularValue = '';

        curricular.forEach(function(c){
                                curricularValue += "<li>"+c+"</li>";
                                // console.log("<li>"+c+"</li>");
                                // console.log("index of"+c+":"+""+user.curricular.indexOf(c));
                            });


        //end get curricular value


        //Get project value
        var projectValue = '';
        $.each(pro_name, function(i, item) {
            //console.log(user.pro_name[i], user.pro_skills[i]);
                projectValue += '<li>Project '+(i+1)+':'+
                                   '<ul>'+
                                       '<li>'+pro_name[i]+'</li>'+
                                       '<li>'+pro_skills[i]+'</li>'+
                                    '</ul>'+
                               '</li>';

        });

        //end get project value


        //Get job value

        var jobValue = '';
        $.each(job_profile , function(i , item){

             jobValue += '<h4>Job '+(i+1)+':'+
                         '<ul>'+
                             '<li>'+ job_profile[i] +'</li>'+
                             '<li>'+ job_skills[i] +'</li>'+
                             '<li>'+ job_company[i] +'</li>'+
                         '</ul>';

        });

        
        //end get job value
        

        //Get achievement value
        var achievementValue = '';
        $.each(achievement , function(i , item){

            achievementValue += '<li>'+ achievement[i] +'</li>';
        });

        
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
     
     var template4html =function(user , job_profile , job_skills , job_company ,pro_name, pro_skills , achievement , curricular){

        //Get curricular value

        var curricularValue = '';

        curricular.forEach(function(c){
                                curricularValue += "<li>"+c+"</li>";
                                // console.log("<li>"+c+"</li>");
                                // console.log("index of"+c+":"+""+user.curricular.indexOf(c));
                            });


        //end get curricular value


        //Get project value
        var projectValue = '';
        $.each(pro_name, function(i, item) {
            //console.log(user.pro_name[i], user.pro_skills[i]);
                projectValue += '<li>Project '+(i+1)+':'+
                                   '<ul>'+
                                       '<li>'+pro_name[i]+'</li>'+
                                       '<li>'+pro_skills[i]+'</li>'+
                                    '</ul>'+
                               '</li>';

        });

        //end get project value


        //Get job value

        var jobValue = '';
        $.each(job_profile , function(i , item){

             jobValue += '<h4>Job '+(i+1)+':'+
                         '<ul>'+
                             '<li>'+ job_profile[i] +'</li>'+
                             '<li>'+ job_skills[i] +'</li>'+
                             '<li>'+ job_company[i] +'</li>'+
                         '</ul>';

        });

        
        //end get job value
        

        //Get achievement value
        var achievementValue = '';
        $.each(achievement , function(i , item){

            achievementValue += '<li>'+ achievement[i] +'</li>';
        });

        
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
            $('#form2').show();
            $("#form1").hide();
            $("#form3").hide();
            $("#form4").hide();
            $("#result_container1").hide();    
            $('#dash_container').hide();
                    
        }else if($('#form2').is(':visible')){

            
        }else if($('#form3').is(':visible')){

            $('#marker4 span.glyphicon.glyphicon-map-marker').addClass('active_step');
            $('#form4').show();
            $("#form1").hide();
            $("#form2").hide();
            $("#form3").hide();
            $("#result_container1").hide();
            $('#dash_container').hide();
           
        }else {

            var userobj = JSON.stringify($('form').serializeObject());
            var user = JSON.parse(userobj);
            var job_profile = [];
            var job_company = [];
            var job_skills = [];
            var pro_name = [];
            var pro_skills = [];
            var achievement = [];
            var curricular = [];

            job_profile.push(user.job_profile1);
            job_company.push(user.job_company1);
            job_skills.push(user.job_skills1);

            pro_name.push(user.pro_name1);
            pro_skills.push(user.pro_skills1);

            achievement.push(user.achievement1);

            curricular.push(user.curricular1);

            //check work divs and push in array
            if($('#w1').is(':empty')){

            }else{
                job_profile.push(user.job_profile2);
                job_company.push(user.job_company2);
                job_skills.push(user.job_skills2);
            }

            if($('#w2').is(':empty')){

            }else{
                job_profile.push(user.job_profile3);
                job_company.push(user.job_company3);
                job_skills.push(user.job_skills3);
            }

            if($('#w3').is(':empty')){

            }else{
                job_profile.push(user.job_profile4);
                job_company.push(user.job_company4);
                job_skills.push(user.job_skills4);
            }

            if($('#w4').is(':empty')){

            }else{
                job_profile.push(user.job_profile5);
                job_company.push(user.job_company5);
                job_skills.push(user.job_skills5);
            }
            // end check work divs

            //check project divs
            if($('#p1').is(':empty')){

            }else{
                pro_skills.push(user.pro_skills2);
                pro_name.push(user.pro_name2);
            }

            if($('#p2').is(':empty')){

            }else{
                pro_skills.push(user.pro_skills3);
                pro_name.push(user.pro_name3);
            }

            if($('#p3').is(':empty')){

            }else{
                pro_skills.push(user.pro_skills4);
                pro_name.push(user.pro_name4);
            }

            if($('#p4').is(':empty')){

            }else{
                pro_skills.push(user.pro_skills5);
                pro_name.push(user.pro_name5);
            }
            //end project divs

            //check achievement divs
            if($('#a1').is(':empty')){
                //do nothing
            }else{
                achievement.push(user.achievement2);
            }

            if($('#a2').is(':empty')){
                //do nothing
            }else{
                achievement.push(user.achievement3);
            }

            if($('#a3').is(':empty')){
                //do nothing
            }else{
                achievement.push(user.achievement4);
            }

            if($('#a4').is(':empty')){
                //do nothing
            }else{
                achievement.push(user.achievement5);
            }

            //end check achievement divs

            //check curricular divs

            if($('#c1').is(':empty')){
                //do nothing
            }else{
                curricular.push(user.curricular2);
            }

            if($('#c2').is(':empty')){
                //do nothing
            }else{
                curricular.push(user.curricular3);
            }

            if($('#c3').is(':empty')){
                //do nothing
            }else{
                curricular.push(user.curricular4);
            }

            if($('#c4').is(':empty')){
                //do nothing
            }else{
                curricular.push(user.curricular5);
            }

            //end check curricular divs


            //console.log(user);
            //$('#result1 , #result2').text(userobj);
            $('#result1').html(template1html(user , job_profile , job_skills , job_company ,pro_name, pro_skills , achievement , curricular));
            $('#result2').html(template2html(user , job_profile , job_skills , job_company ,pro_name, pro_skills , achievement , curricular));
            $('#result3').html(template3html(user , job_profile , job_skills , job_company ,pro_name, pro_skills , achievement , curricular));
            $('#result4').html(template4html(user , job_profile , job_skills , job_company ,pro_name, pro_skills , achievement , curricular));
            $("#templates_part1").fadeIn(200);
            $("#templates_part2").fadeIn(200);
            $('li#temp').removeClass('active');
            $('li#details').removeClass('active');
            $('li#dash').removeClass('active');
            $("#forms").hide();
            $("#result_container1").hide();
            // $('body').css({"background-image":"url('./images/vec2.jpg')" , "background-size":"contain"});
            $('#dash_container').hide();
            return false;
        }
        
        event.preventDefault();
        }//end submitHandler
    });//end setDefaults


    $('#third_form').on('submit' , function(event){
       $('#marker4 span.glyphicon.glyphicon-map-marker').addClass('active_step');

       $('#form4').show();
       $("#form1").hide();
       $("#form2").hide();
       $("#form3").hide();
       $("#result_container1").hide();
       
       $('#dash_container').hide();
       event.preventDefault(); 
    });
    
    /*$('#next_exp').on('click' , function(){
        $('#work').submit();
        $('#projects').submit();
        $('#achievement').submit();
        
    });*/
   
    $('#done').on('click' , function(){
        $('#curricular').submit();
        return false;
    });

    $('#first_form').validate();
    
    $('#curricular').validate(function(event){
        event.preventDefault();
    });

    $("#work").validate({
         submitHandler: function(event) {
           // form.submit();
           $('#projects').show();
           $('#work').hide();
           $('#achievement').hide();
           event.preventDefault();
         }
    });

    $("#projects").validate({
         submitHandler: function(event) {
           // form.submit();
           $('#achievement').show();
           $('#projects').hide();
           event.preventDefault();
         }
    });

    $('#pre_project').click(function(){
        $('#work').show();
        $('#projects').hide();
        $('#achievement').hide();
    });

    $("#achievement").validate({
         submitHandler: function(event) {
           $('#marker3 span.glyphicon.glyphicon-map-marker').addClass('active_step');
           $('#form3').show();
           $("#form1").hide();
           $("#form2").hide();
           $("#form4").hide();
           $("#result_container1").hide();
           $('#dash_container').hide();
           event.preventDefault();
         }
    });

    $('#pre_achievement').click(function(){
        $('#work').hide();
        $('#projects').show();
        $('#achievement').hide();
    });

    
    //end validation
    
    
    
     




  });//end main document    
