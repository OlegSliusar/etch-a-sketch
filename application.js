$(document).ready(function(){
  var squareResolution = 100;
  var gridSize = 660;
  var generateGrid = function(res) {
    for (var i = 0; i < res; i++) {
      for (var j = 0; j < res; j++) {
      $("div#grid").append($('<div class="square"></div>'));
      }
    }
    console.log("Grid generated");
    console.log($("div.square").length + " divs are on the page");
  };
  var hoverBlack = function() {
    $('div.square').on('mouseenter', function(){
      $(this).css({'background': 'black'});
    });
    console.log("hoverBlack is working...");
  };
  var styleSquare = function() {
    $("div.square").css({'width': gridSize / squareResolution,
            'height': gridSize / squareResolution,
            'background': 'white',
            'float': 'left'
    });
  };
  $("div#grid").css({'width': gridSize,
              'height': gridSize,
              'border': '1px solid black',
              'margin': 'auto'
  });

  generateGrid(squareResolution);

  styleSquare();

  hoverBlack();

  $('button#clear').on('click', function(){
    $('div.square').css('background', 'white');
  });

  $('button#check').on('click', function(){
    $('div.square').css('background', 'black');
  });

  $('button#adjust').on('click', function(){
    squareResolution = +prompt('How many squares per side the grid should have?');
    if (squareResolution < 200) {
      $('div.square').remove();
      generateGrid(squareResolution);
      styleSquare();
      hoverBlack();
    } else {
      alert("Enter value less than 200");
    }
  });

  $('button#size').on('click', function(){
    gridSize = +prompt('What size should sides have?');
    if (gridSize < 200) {
      alert("Enter value more than 200");
    } else {
      $('div.square').remove();
      generateGrid(squareResolution);
      $("div#grid").css({'width': gridSize,
                'height': gridSize,
                'border': '1px solid black',
                'margin': 'auto'
      });
      styleSquare();
      hoverBlack();
    }
  });

  $('div.square').on('mouseenter', function(){
    $(this).css({'background': 'black'});
  });
});
