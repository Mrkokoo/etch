//create grid
function createGrid() {
    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
              $("<div class='grid'></div>").appendTo(".scetchpad");
        }
    }
    $("<br>").appendTo(".scetchpad");
}

//New grid of x amount
function newGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var cols = 0; cols < x; cols++) {
            $("<div class= 'grid' ></div>").appendTo(".scetchpad");
        }
    }
}


//Document ready and draw grid
$("document").ready(function() {
    createGrid();

     $(".grid").mouseover(function(){
    //   $(this).css("background-color", "black");
        $(this).toggleClass("gridHover");
     });
     
     $("#test").click(function() {
         var numero = prompt("How many squares", 16);
         newGrid(numero);
     });
});





  
