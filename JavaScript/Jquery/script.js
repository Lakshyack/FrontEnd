$(document).ready(function () {
  //This is body of the function
  console.log("This is also my first code!!");
  //JQuery....
  //Jquery Effects

  $("#btn1").click(function () {
    console.log("Hiddendddd");
    // $("#container").hide();
    $("#container").fadeOut(2000, function () {
      console.log("This is  fadde out!!");
    });
  });

  $("#btn2").click(function () {
    console.log("Hiddendddd");
    $("#container").fadeIn();
  });

  $("#btn3").click(function () {
    console.log("Hiddendddd");
    $("#container").fadeToggle();
  });

  $("#btn4").click(function(){
    console.log("Used for when we want opacity")
    $("#container").fadeTo(0,0.2);
  });

  //Slideup
  $("#btn6").click(function(){
    $("#container").slideUp();
  });

  //slideDown

  $("#btn5").click(function(){
    $("#container").slideDown();
  });

  //slideToggle
  $("#btn7").click(function(){
    $("#container").slideToggle();
  });

  // Animate
  //Animate((params),speed, callback)

  $("#btn8").click(function(){
       $("#container").animate({width:"200px",height:"200px"},200,function(){
        $("#container").animate({width:"100px",height:''})
        console.log("This is btn eight");
       })
  });

  $("#btn9").click(function(){
    // getting value
    // let value = $("#f").val();
    // console.log("Value is :", value);
    // setting value
    // $("#f").val("This is a input text");
    // let c = $("#cc").text();
    // console.log(c);

    // $("#cc").text("This is my content"); // text is only used for text but if you want use html  content you use html funtion
    $("#cc").html("<br> <b> this is my content</b>");
    
  })
});
