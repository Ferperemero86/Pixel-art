
document.addEventListener('DOMContentLoaded', function(){

// Select color input
const colorValue = document.getElementById("colorPicker");

// Select size input
const nameValue = document.getElementById('sizePicker');
const canvasSize = document.querySelector('#pixel_canvas');

// When size is submitted by the user, call makeGrid()

nameValue.addEventListener('submit',function(evt){
  evt.preventDefault();
  document.querySelector('table').remove();
  let canvasHeight = document.getElementById('input_height').value;
  let canvasWidth = document.getElementById('input_width').value;

  function makeGrid(canvasHeight,canvasWidth){
     const myTable = document.createElement('TABLE');
      myTable.setAttribute('id','pixel_canvas');
     document.body.append(myTable);

    for(let r=1;r<=parseInt(canvasHeight);r++){
     let trCanvas = document.createElement('tr');
      myTable.append(trCanvas);
      for(let d=1;d<=parseInt(canvasWidth);d++){
     let tdCanvas = document.createElement('td');
      trCanvas.append(tdCanvas);
      }
    }

    document.getElementById("colorPicker").addEventListener('change',function(evt){
      let color = evt.target.value;
      document.querySelector('#pixel_canvas').addEventListener('click', function (evt) {
      if (evt.target.nodeName === 'TD') {
         evt.target.style.backgroundColor = color;
       }
      });
    });

  }

  makeGrid(canvasHeight,canvasWidth);
});



});// End of  loading DOM
