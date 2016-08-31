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
                //$("#result_container2").hide();
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
                //$("#result_container2").hide();
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
                //$("#result_container2").hide();
                $('#dash_container').show();
            });//end Dashboard


            //end navigation button control


     $('#marker1 , button#pre_exp').on('click' , function (event) {
         $('#marker1 span.glyphicon.glyphicon-map-marker').addClass('active_step');
         $('#marker2 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         $('#marker3 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         $('#marker4 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         $('#form1').show();
         $("#form2").hide();
         $("#form3").hide();
         $("#form4").hide();
         $("#result_container1").hide();
         //$("#result_container2").hide();
         $('#dash_container').hide();
         event.preventDefault();

     });



     // Form Pagination


     $('#marker2 , button#next_primary , button#pre_edu').on('click' , function (event) {
         $('#marker2 span.glyphicon.glyphicon-map-marker').addClass('active_step');
         $('#marker1 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         $('#marker3 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         $('#marker4 span.glyphicon.glyphicon-map-marker').removeClass('active_step');

         $('#form2').show();
         $("#form1").hide();
         $("#form3").hide();
         $("#form4").hide();
         $("#result_container1").hide();
         //$("#result_container2").hide();
         $('#dash_container').hide();
         event.preventDefault();

     });

     $('#marker3 , button#pre_curricular , button#next_exp').on('click' , function (event) {
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
         event.preventDefault();

     });

     $('#marker4 , button#next_edu ').on('click' , function (event) {
         $('#marker4 span.glyphicon.glyphicon-map-marker').addClass('active_step');
         $('#marker2 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         $('#marker3 span.glyphicon.glyphicon-map-marker').removeClass('active_step');
         $('#marker1 span.glyphicon.glyphicon-map-marker').removeClass('active_step');

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
     });

     $('#temp1_text , #temp2_text, #temp3_text, #temp4_text').on('click' , function(event){
         
         $('a button#preview1 , a button#preview2').toggleClass('disabled');
         event.preventDefault();

     });


     $('#preview1 , #preview2').on('click' , function(event){

      $("#forms").hide();
      $("#templates_part1").hide();
      $("#templates_part2").hide();
      $("#form4").hide();
      $("#form2").hide();
      $("#form3").hide();
      $("#form1").hide();
      $("#result_container1").show();
      //$("#result_container2").hide();
      event.preventDefault();

      });


     //end template effects

     
     // template1 html function
     
     var template1html =function(user){

            var html = 
        '<!DOCTYPE html>'+
        '<html>'+
        '<head>'+
            '<title>Resume</title>'+
            '<style>'+
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

            '</style>'+
        '</head>'+
        '<body style="border: 1px solid; padding : 10px; margin:10px;">'+
        '<h2 style="font-weight:normal">' + user.fullname +'<br>' + user.high_deg +' ,'+ user.high_spec  +', '+ user.high_year +', <br>'+ user.mob_no+', '+ user.email +'</h2>'+
        '<hr>'+
        '<h3>WORK EXPERIENCE</h3>'+
        '<h4>Past Job Experience</h4>'+
        '<ul>'+
            '<li>'+ user.job_profile +'</li>'+
            '<li>'+user.job_skills+'</li>'+
            '<li>'+user.job_company+'</li>'+
        '</ul>'+
        '<h4>Projects</h4>'+
        '<ol>'+
            '<li>Project 1:'+
                '<ul>'+
                    '<li>'+user.pro1_name+'</li>'+
                    '<li>'+user.pro1_skills+'</li>'+
                '</ul>'+
            '</li>'+
            '<li>Project 2:'+
                '<ul>'+
                    '<li>'+user.pro2_name+'</li>'+
                    '<li>'+user.pro2_skills+'</li>'+
                '</ul>'+
            '</li>'+
            '<li>Project 3:'+
                '<ul>'+
                    '<li>'+user.pro3_name+'</li>'+
                    '<li>'+user.pro3_skills+'</li>'+
                '</ul>'+
            '</li>'+
        '</ol>'+
        '<h4>Achievements</h4>'+
        '<ul>'+
            '<li>'+user.achievement1+'</li>'+
            '<li>'+user.achievement2+'</li>'+
            '<li>'+user.achievement3+'</li>'+
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
                '<td>'+ user.gradyear +'</td>'+
                '<td>'+ user.gradper +'</td>'+
            '</tr>'+
        '</table>'+
        '<h3>EXTRA CURRICULAR ACTIVITIES AND ACHIEVEMENTS</h3>'+
        '<ul>'+
            '<li>'+user.curricular1+'</li>'+
            '<li>'+user.curricular2+'</li>'+
            '<li>'+user.curricular3+'</li>'+
        '</ul>'+
        '</body>'+
        '</html>'

        return html;


     };


     //end template1 html function




     // template2 html function
     
     var template2html =function(user){

            var html = 
        '<!DOCTYPE html>'+
        '<html>'+
        '<head>'+
            '<title>Resume</title>'+
            '<style>'+
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

            '</style>'+
        '</head>'+
        '<body style="border: 1px solid; padding : 10px; margin:10px;">'+
        '<h2 style="font-weight:normal ; text-align: center;">' + user.fullname +'<br>' + user.high_deg +' ,'+ user.high_spec +', '+ user.high_year +', <br>'+ user.mob_no+', '+ user.email +'</h2>'+
        '<hr>'+
        '<h3>WORK EXPERIENCE</h3>'+
        '<h4>Past Job Experience</h4>'+
        '<ul>'+
            '<li>'+ user.job_profile +'</li>'+
            '<li>'+user.job_skills+'</li>'+
            '<li>'+user.job_company+'</li>'+
        '</ul>'+
        '<h4>Projects</h4>'+
        '<ol>'+
            '<li>Project 1:'+
                '<ul>'+
                    '<li>'+user.pro1_name+'</li>'+
                    '<li>'+user.pro1_skills+'</li>'+
                '</ul>'+
            '</li>'+
            '<li>Project 2:'+
                '<ul>'+
                    '<li>'+user.pro2_name+'</li>'+
                    '<li>'+user.pro2_skills+'</li>'+
                '</ul>'+
            '</li>'+
            '<li>Project 3:'+
                '<ul>'+
                    '<li>'+user.pro3_name+'</li>'+
                    '<li>'+user.pro3_skills+'</li>'+
                '</ul>'+
            '</li>'+
        '</ol>'+
        '<h4>Achievements</h4>'+
        '<ul>'+
            '<li>'+user.achievement1+'</li>'+
            '<li>'+user.achievement2+'</li>'+
            '<li>'+user.achievement3+'</li>'+
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
                '<td>'+ user.gradyear +'</td>'+
                '<td>'+ user.gradper +'</td>'+
            '</tr>'+
        '</table>'+
        '<h3>EXTRA CURRICULAR ACTIVITIES AND ACHIEVEMENTS</h3>'+
        '<ul>'+
            '<li>'+user.curricular1+'</li>'+
            '<li>'+user.curricular2+'</li>'+
            '<li>'+user.curricular3+'</li>'+
        '</ul>'+
        '</body>'+
        '</html>'

        return html;


     };


     //end template2 html function
     

     // template3 html function
     
     var template3html =function(user){

            var html = 
        '<!DOCTYPE html>'+
        '<html>'+
        '<head>'+
            '<title>Resume</title>'+
            '<style>'+
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

            '</style>'+
        '</head>'+
        '<body style="border: 1px solid; padding : 10px; margin:10px;">'+
        '<h2 style="font-weight:normal ; text-align: center;">' + user.fullname +'<br>' + user.high_deg +' ,'+ user.high_spec +', '+ user.high_year +', <br>'+ user.mob_no+', '+ user.email +'</h2>'+
        '<hr>'+
        '<h3> WORK EXPERIENCE </h3>'+
        '<h4>Projects</h4>'+
        '<ol>'+
            '<li>Project 1:'+
                '<ul>'+
                    '<li>'+user.pro1_name+'</li>'+
                    '<li>'+user.pro1_skills+'</li>'+
                '</ul>'+
            '</li>'+
            '<li>Project 2:'+
                '<ul>'+
                    '<li>'+user.pro2_name+'</li>'+
                    '<li>'+user.pro2_skills+'</li>'+
                '</ul>'+
            '</li>'+
            '<li>Project 3:'+
                '<ul>'+
                    '<li>'+user.pro3_name+'</li>'+
                    '<li>'+user.pro3_skills+'</li>'+
                '</ul>'+
            '</li>'+
        '</ol>'+
        '<h4>Achievements</h4>'+
        '<ul>'+
            '<li>'+user.achievement1+'</li>'+
            '<li>'+user.achievement2+'</li>'+
            '<li>'+user.achievement3+'</li>'+
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
                '<td>'+ user.gradyear +'</td>'+
                '<td>'+ user.gradper +'</td>'+
            '</tr>'+
        '</table>'+
        '<h3>EXTRA CURRICULAR ACTIVITIES AND ACHIEVEMENTS</h3>'+
        '<ul>'+
            '<li>'+user.curricular1+'</li>'+
            '<li>'+user.curricular2+'</li>'+
            '<li>'+user.curricular3+'</li>'+
        '</ul>'+
        '</body>'+
        '</html>'

        return html;


     };


     //end template3 html function


     // template4 html function
     
     var template4html =function(user){

            var html = 
        '<!DOCTYPE html>'+
        '<html>'+
        '<head>'+
            '<title>Resume</title>'+
            '<style>'+
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

            '</style>'+
        '</head>'+
        '<body style="border: 1px solid; padding : 10px; margin:10px;">'+
        '<h2 style="font-weight:normal ; ">' + user.fullname +'<br>' + user.high_deg +' ,'+ user.high_spec +', '+ user.high_year +', <br>'+ user.mob_no+', '+ user.email +'</h2>'+
        '<hr>'+
        '<h3> WORK EXPERIENCE </h3>'+
        '<h4>Projects</h4>'+
        '<ol>'+
            '<li>Project 1:'+
                '<ul>'+
                    '<li>'+user.pro1_name+'</li>'+
                    '<li>'+user.pro1_skills+'</li>'+
                '</ul>'+
            '</li>'+
            '<li>Project 2:'+
                '<ul>'+
                    '<li>'+user.pro2_name+'</li>'+
                    '<li>'+user.pro2_skills+'</li>'+
                '</ul>'+
            '</li>'+
            '<li>Project 3:'+
                '<ul>'+
                    '<li>'+user.pro3_name+'</li>'+
                    '<li>'+user.pro3_skills+'</li>'+
                '</ul>'+
            '</li>'+
        '</ol>'+
        '<h4>Achievements</h4>'+
        '<ul>'+
            '<li>'+user.achievement1+'</li>'+
            '<li>'+user.achievement2+'</li>'+
            '<li>'+user.achievement3+'</li>'+
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
                '<td>'+ user.gradyear +'</td>'+
                '<td>'+ user.gradper +'</td>'+
            '</tr>'+
        '</table>'+
        '<h3>EXTRA CURRICULAR ACTIVITIES AND ACHIEVEMENTS</h3>'+
        '<ul>'+
            '<li>'+user.curricular1+'</li>'+
            '<li>'+user.curricular2+'</li>'+
            '<li>'+user.curricular3+'</li>'+
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

     $(function() {
         $('form').submit(function() {
            var userobj = JSON.stringify($('form').serializeObject());
            var user = JSON.parse(userobj);
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
             //$("#result_container2").hide();
             $('#dash_container').hide();
             return false;
         });
     });
 




  });//end main document