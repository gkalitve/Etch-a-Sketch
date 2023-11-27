const body = document.querySelector("body");

let container = document.createElement("div");
container.id = "container";
body.appendChild(container);


let button = document.querySelector("button");
button.addEventListener("click", function() {

    side = prompt("Please enter the number of tiles per side (up to 100)", "**");
    switch (true) {
    case (side > 100): 
        return;
    default:
        grid = side*side;

    // function to generate the necessary number of tiles
    for  (let i = 0; i < grid; i++) {
        let tile = document.createElement("div");
        tile.setAttribute("style", `background: orange; height: ${(960/side)}px; width: ${(960/side)}px`);
        tile.classList.add("tile");
        container.appendChild(tile);
    }
        gridTile = document.querySelectorAll(".tile");

    //event listener to track onmouseover events
        gridTile.forEach(function(i) {
        i.addEventListener("mouseover", function(e) {
        console.log(e);
        this.style.backgroundColor = "red";
        });
    })

    //eventListener to track onmouseout events
        gridTile.forEach(function(i) {
        i.addEventListener("mouseout", function(e) {
        console.log(e);
        this.style.backgroundColor = "orange";
        })
    })
  }
})
