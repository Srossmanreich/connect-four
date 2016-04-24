$(document).ready(function() {
  var turn = 1

  $(".column").hover(function(){
    for(var i = 0; i < 6; i++){
      if($(this).children('[data-y=' + i + ']').hasClass("blank")){
        $(this).children('[data-y=' + i + ']').addClass("hover").removeClass("blank")
        break
      }
    }
  }, function(){
    for(var i = 0; i < 6; i++){
      if($(this).children('[data-y=' + i + ']').hasClass("hover")){
        $(this).children('[data-y=' + i + ']').removeClass("hover").addClass("blank")
        break
      }
    }
  })

  $(".column").on("click" , function(){
    console.log($(this).children('[data-y=' + i + ']'))
    for(var i = 0; i < 6; i++){
      if($(this).children('[data-y=' + i + ']').hasClass("hover")){
        if(turn % 2 != 0){
          $(this).children('[data-y=' + i + ']').addClass("red")
          $(this).children('[data-y=' + i + ']').removeClass("hover")
        } else{
          $(this).children('[data-y=' + i + ']').addClass("black")
          $(this).children('[data-y=' + i + ']').removeClass("hover")
        }
        break;
      }
    }
    turn += 1
  })
});