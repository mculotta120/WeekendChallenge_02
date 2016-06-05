
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



       //next button
       $('#next').click(function(){
         studentPos++;
         console.log(studentPos);
         if(studentPos == 20){
             studentPos = 0;
           }
        showStudent(studentPos);
        showNumber(studentPos);


       }); //next
       //prev button
       $('#prev').click(function(){
          studentPos--;
          console.log(studentPos);
          if(studentPos == -1){
              studentPos = 19;
            }
          showStudent(studentPos);
          showNumber(studentPos);
         });  //end prev


      function showStudent (i){
        var firstName = classJson.students[i].first_name;
        var lastName = classJson.students[i].last_name;
        var city = classJson.students[i].city;
        var shoutout = classJson.students[i].shoutout;
        var studentInfo =  "Name: "+ firstName + " " + lastName + " City: " + city + " Shoutout: " + shoutout;
          console.log("showStudent is called");
          $('p').text(studentInfo);


 } //end showStudent
  function showNumber (i){
     $('#numDis').text("# " + i  + " of 20");
  }
} // end main
