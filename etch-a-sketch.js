const body = document.querySelector("body");

let container = document.createElement("div");
container.id = "container";
body.appendChild(container);

let button = document.querySelector("button");
button.addEventListener("click", function() {
    //check if container div has any blocks in it
    if (container.innerHTML !== "") {
    //if it does, purge the container
    document.getElementById(`container`).innerHTML = ""}
    //ask for number of tiles per side and calculate tiles in a grid
    side = prompt("Please enter the number of tiles per side (up to 100)", "**");
    switch (true) {
    case (side > 100): 
        return;
    default:
        grid = side*side;

    // function to generate the necessary number of tiles; apply the default backgroundColor and brigthness
    for  (let i = 0; i < grid; i++) {
        let tile = document.createElement("div");
        tile.setAttribute("style", `background: orange;  height: ${(960/side)}px; width: ${(960/side)}px`);
        tile.classList.add("tile10");
        container.appendChild(tile);
        }
    }

    gridTile = document.querySelectorAll(".tile10");
        
    //event listener to track onmouseover events over entire nodeList
    gridTile.forEach(function(i) {
        i.addEventListener("mouseover", function(e) {
        console.log(getComputedStyle(i).getPropertyValue("filter"));
        //if current node's filter is not equal to `brightness(0)`, continue with the function
        if ((getComputedStyle(i).getPropertyValue("filter")) != `brightness(0)`) {
            //reassign the class to one that has lower brightness by reducing its number `.tile#` by 1
            x = (`tile` + (Number(this.className.slice(4)) - 1));
            this.classList.remove(this.className);
            this.classList.add(x);
            // randomize the backgroundColor
            this.style.backgroundColor = `rgb(${(Math.random()*255)},${(Math.random()*255)},${(Math.random()*255)})`;
        }
    });   
  })
}
)

