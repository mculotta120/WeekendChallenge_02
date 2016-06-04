var studentPos = 0;

$(function(){
  $('#start').on('click', function(){
    console.log( 'click!' );
     $.ajax({
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
       dataType: 'json',
       success: function( data ){
         var firstName = data.students[studentPos].first_name;
         var lastName = data.students[studentPos].last_name;
         var city = data.students[studentPos].city;
         var shoutout = data.students[studentPos].shoutout;
          console.log( 'in ajax success' );
          console.log( data );
          var studentInfo = '<p>'+ "Name: "+ firstName + " " + lastName + " City: " + city + " Shoutout: " + shoutout + '</p>';
          $('#infoDisplay').append(studentInfo);

          //prev button
          $('#prev').click(function(){
            console.log("previous clicked");
            studentPos--;
              console.log(studentPos);
              $('#infoDisplay').append(studentInfo);
            });  //end prev

          //next button
          $('#next').click(function(){
            console.log("next clicked");
            studentPos++;
            console.log(studentPos);
          }); //next

         }, // end success
       statusCode: {
          404: function(){
             alert( 'error connecting to server' );
          } // end 404
         } // end statusCode
       }); // end ajax  object
    });//end start button
});//end all
