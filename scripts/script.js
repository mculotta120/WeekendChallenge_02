
var studentPos = 0;
$(function(){
    console.log( 'begin' );
     $.ajax({
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
       dataType: 'json',
       success: function( data ){
         console.log( 'in ajax success' );
         console.log( data );
         classJson = data;
         main ();
         }, // end success
       statusCode: {
          404: function(){
             alert( 'error connecting to server' );
          } // end 404
         } // end statusCode
      }); // end ajax  object
});//end all

function main (){
  console.log("main is called");
       showNumber(studentPos);


       //next button
       $('#next').click(function(){
         studentPos++;
         console.log(studentPos);
         if(studentPos == 21){
             studentPos = 0;
           }
        showStudent(studentPos);


       }); //next
       //prev button
       $('#prev').click(function(){
          studentPos--;
          console.log(studentPos);
          if(studentPos == -1){
              studentPos = 20;
            }
          showStudent(studentPos);
         });  //end prev


      function showStudent (number){
        var firstName = classJson.students[number].first_name;
        var lastName = classJson.students[number].last_name;
        var city = classJson.students[number].city;
        var shoutout = classJson.students[number].shoutout;
        var studentInfo =  "Name: "+ firstName + " " + lastName + " City: " + city + " Shoutout: " + shoutout;
          console.log("showStudent is called");
          $('p').text(studentInfo).fadeIn(3000);

 } //end showStudent
  function showNumber (number){
     $('#infoDisplay').append('<p>'+"# " + number  + " of 20"+'</p>');
  }
} // end main
