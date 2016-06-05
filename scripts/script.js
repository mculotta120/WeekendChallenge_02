
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
 //console.log("main is called");
//created variable to represent end of the students array
  var end = classJson.students.length;

  //functions are called to display students and numbers on the dom
  showStudent(studentPos);
  showNumber(studentPos);


       //next button
       $('#next').click(function(){
         studentPos++;
         console.log(studentPos);
         if(studentPos == end){
             studentPos = 0;
           }
        showStudent(studentPos);
        showNumber(studentPos);


      }); //end next

       //prev button
       $('#prev').click(function(){
          studentPos--;
          console.log(studentPos);
          if(studentPos == 0){
              studentPos = end;
            }

          showStudent(studentPos);
          showNumber(studentPos);
         });  //end prev

         // function for displaying student
      function showStudent(i){
        var firstName = classJson.students[i].first_name;
        var lastName = classJson.students[i].last_name;
        var city = classJson.students[i].city;
        var shoutout = classJson.students[i].shoutout;
        var studentInfo =  "Name: "+ firstName + " " + lastName + " City: " + city + " Shoutout: " + shoutout;
          console.log("showStudent is called");
          $('p').text(studentInfo);
        } //end showStudent

     //function for displaying number
      function showNumber (j){
        var length = classJson.students.length;
         $('#numDis').text("# " + (j+1)  + " of " + length);
      } //end showNumber
} // end main
