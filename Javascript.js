
//makes 2d array
window.onload=function(){
make2dArray(cols,rows);
setup();
}

function make2dArray(cols,rows){ //makes empty 2d array
    let arr=new Array(cols)
    for(let i=0; i<arr.length; i++){
        arr[i]=new Array(rows)
    }
    console.log("working1");
    return arr;
 
}
let grid;

let cols;
let rows;
let resolution=40;

function setup(){
    createCanvas(400,400);
    cols=width/resolution;
    rows=height/resolution;

    grid= make2dArray(cols,rows);
    for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
            grid[i][j]= Math.round(Math.random());
        }
    }console.log("working2");
}

function draw(){
    for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
            let x=i*resolution;
            let y=j*resolution;

            if(grid[i][j]===1){
                fill(255);
                rect(x,y,resolution,resolution);
            }
            
        }
    }
}
