
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

let cols=10;
let rows=10;

function setup(){
    grid= make2dArray(cols,rows);
    for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
            grid[i][j]= Math.round(Math.random());
        }
    }console.log("working2");
}

