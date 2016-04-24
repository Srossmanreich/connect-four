$(document).ready(function() {

  $('div').on("click", function(event) {
    var x = $(this).data('x-pos');
    var y = $(this).data('y-pos');
    var color = $(this).css('color');
  })


});




function checker(x, y, color) {
  var rowColor = $('div').find("[data-x-pos='" + x + "']").map(function(item) { return item.css("color") });
  var columnColor = $('div').find("[data-y-pos='" + y + "']").map(function(item) { return item.css("color") });
  var rightDiagonalColor = [];
  var leftDiagonalColor = [];
  var divArr = $('div');
  var indicator = false;

  for(var i = 0; i < divArr.length; i++) {
    if((x - divArr[i].data('x-pos'))  ===  (y - divArr[i].data('y-pos'))) {
      rightDiagonalColor.push(divArr[i].css("color"));
    }
  }

  for(var i = 0; i < divArr.length; i++) {
    if((x - divArr[i].data('x-pos')) === -(y - divArr[i].data('y-pos'))) {
      leftDiagonalColor.push(divArr[i].css("color"));
    }
  }


  function rowCheck() {
    for(var i = 0; i < rowColor.length; i ++) {
      if(rowColor[i] === color && rowColor[i + 1] === color && rowColor[i + 2] === color && rowColor[i + 3] === color) {
        return true;
      }else {
        return false;
      }
    }
  }

  function columnCheck() {
    for(var i = 0; i < columnColor.length; i ++) {
      if(columnColor[i] === color && columnColor[i + 1] === color && columnColor[i + 2] === color && columnColor[i + 3] === color) {
        return true;
      }else {
        return false;
      }
    }
  }

  function rightDiagoCheck() {
    for(var i = 0; i < rightDiagonalColor.length; i ++) {
      if(rightDiagonalColor[i] === color && rightDiagonalColor[i + 1] === color && rightDiagonalColor[i + 2] === color && rightDiagonalColor[i + 3] === color) {
        return true;
      }else {
        return false;
      }
    }
  }

  function leftDiagoCheck() {
    for(var i = 0; i < leftDiagonalColor.length; i ++) {
      if(leftDiagonalColor[i] === color && leftDiagonalColor[i + 1] === color && leftDiagonalColor[i + 2] === color && leftDiagonalColor[i + 3] === color) {
        return true;
      }else {
        return false;
      }
    }
  }

  if (rowCheck() || columnCheck() || rightDiagoCheck() || leftDiagoCheck()) {
    indicator = true;
  }
  return indicator;
}









