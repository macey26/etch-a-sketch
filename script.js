const container = document.querySelector("#container");


const makeGrid = (squares) => {

    for (let i = 0; i < squares*squares ; i++){

    const box = document.createElement('div');
    box.classList.add("item");
    box.setAttribute("style", "background:white;");
    container.setAttribute("style",
`grid-template-columns: repeat(${squares}, 1fr); grid-template-rows: repeat(${squares}, 1fr);`);

        container.appendChild(box);

  }

};

let resetGrid = () =>{
    while(container.hasChildNodes()){
           container.removeChild(container.lastChild);
      }
    makeGrid(squares);

   };

makeGrid(16);

  let gridResize = () => {

    let square = prompt("How many squares would you like on each grid side", 16);

      squares = square;

    container.setAttribute("style",
`grid-template-columns: repeat(${square}, 1fr); grid-template-rows: repeat(${square}, 1fr);`);

      resetGrid();
      makeGrid(squares);
      boxHover();

     };

const boxHover = () => {
    const hover = document.querySelectorAll('.item');
    hover.forEach((hover) =>{

    hover.addEventListener('mouseover', (e) => {
    hover.setAttribute("style", "background:black;");

         });

  });
     
};

const randomColor = () =>{
   
   let colors = {
       0: "red",
       1: "orange",
       2: "yellow",
       3: "green",
       4: "blue",
       5: "indigo"
   };

   return colors [Math.floor(Math.random() * 7)];

   console.log(randomColor());

}

const rainbowColor = () => {
    const rainbow = document.querySelectorAll('.item');
  rainbow.forEach((rainbow) =>{

    rainbow.addEventListener('mouseover', (e) => {
    rainbow.style.backgroundColor = randomColor();

         });

  });
     
};

rainbowColor();
boxHover();