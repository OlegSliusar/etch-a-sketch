$(document).ready(function(){
  var cellResolution = 140;
  var gridSize = 860;

  var generateGrid = function(res) {
    for (var i = 0; i < res; i++) {
      for (var j = 0; j < res; j++) {
      $("div#grid").append($('<div class="cell"></div>'));
      }
    }
    console.log("Generated");
  };

  var hoverBlack = function() {
    $('div.cell').on('mouseenter', function(){
      $(this).css({'background': 'black'});
    });
    console.log("hoverBlack is working...");
  };

  $("div#grid").css({'width': gridSize,
              'height': gridSize,
              'border': '1px solid black',
              'margin': 'auto'
  });

  generateGrid(cellResolution);

  $("div.cell").css({'width': gridSize / cellResolution,
            'height': gridSize / cellResolution,
            'background': 'white',
            'float': 'left'
  });

  hoverBlack();

  $('button#clear').on('click', function(){
    $('div.cell').css('background', 'white');
  });

  $('button#check').on('click', function(){
    $('div.cell').css('background', 'black');
  });

  $('button#adjust').on('click', function(){
    cellResolution = +prompt('How many squares per side the grid should have?');
    $('div.cell').remove();
    generateGrid(cellResolution);
    $("div.cell").css({'width': gridSize / cellResolution,
            'height': gridSize / cellResolution,
            'background': 'white',
            'float': 'left'
    });
    hoverBlack();
  });

  $('div.cell').on('mouseenter', function(){
    $(this).css({'background': 'black'});
  });
});
