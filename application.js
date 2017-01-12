$(document).ready(function(){
  var cellNumber = 140;
  var gridSize = 860;
  $("div#grid").css({'width': gridSize,
              'height': gridSize,
              'border': '1px solid black',
              'margin': 'auto'
            });
  for (var i = 0; i < cellNumber; i++) {
    for (var j = 0; j < cellNumber; j++) {
    $("div#grid").append($('<div class="cell"></div>'));
    }
  }
  $("div.cell").css({'width': gridSize / cellNumber,
            'height': gridSize / cellNumber,
            'background': 'white',
            'float': 'left'
            });
  $('div.cell').on('mouseenter', function(){
    $(this).css({'background': 'black'});
  });
  $('button#clear').on('click', function(){
    $('div.cell').css('background', 'white');
  });
  $('button#check').on('click', function(){
    $('div.cell').css('background', 'black');
  });
  $('button#adjust').on('click', function(){
    cellNumber = prompt('How many squares per side the grid should have?');
  });
});
