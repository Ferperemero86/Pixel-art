
document.addEventListener('DOMContentLoaded', function(){

// Select color input
const colorValue = document.getElementById("colorPicker");

// Select size input
const nameValue = document.getElementById('sizePicker');
const canvasSize = document.querySelector('#pixel_canvas');

// When size is submitted by the user, call makeGrid()

nameValue.addEventListener('submit',function(evt){
  evt.preventDefault();
  let canvasHeight = document.getElementById('input_height').value;
  let canvasWidth = document.getElementById('input_width').value;

  function makeGrid(canvasHeight,canvasWidth){
    for(let r=1;r<=parseInt(canvasHeight);r++){
     let trCanvas = document.createElement('tr');
      canvasSize.appendChild(trCanvas);
      for(let d=1;d<=parseInt(canvasWidth);d++){
     let tdCanvas = document.createElement('td');
      trCanvas.appendChild(tdCanvas);
      }
    }
  }

  makeGrid(canvasHeight,canvasWidth);
});

colorValue.addEventListener('change',function(){
  console.log(colorValue.value);
});

});// End of  loading DOM
