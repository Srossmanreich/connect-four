$(document).ready(function() {
  var turn = 1

  $(".column").on("click" , function(){
    console.log($(this).children().css("data-y", "0"))
    // console.log(#column-1 > div:nth-child(6))
    // hasClass("blank")
    // for(var i = 0; i < 6; i++){
    //   if($(this).children()[i].hasClass("blank")){
    //     if(turn % 2 != 0){
    //       $(this).children()[i].addClass("red")
    //       $(this).children()[i].removeClass("blank")
    //     } else{
    //       $(this).children()[i].addClass("black")
    //       $(this).children()[i].removeClass("blank")
    //     }
    //     break;
    //   }
    // }
    turn += 1
  })
});