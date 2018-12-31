var element= document.getElementById('box')
draggable(element);

function draggable(element) {
  //alert("alert")

  var isMouseDown = false;

  // initial mouse X and Y for `mousedown`
  var mouseX;
  var mouseY;

  // element X and Y before and after move
  var elementX = 0;
  var elementY = 0;

  //-------------------------mouse down----------------------------
  //https://www.w3schools.com/jsref/event_onmousedown.asp
  element.addEventListener('mousedown', onMouseDown);
  function onMouseDown(event) {
    //https://www.w3schools.com/jsref/event_clientx.asp
    mouseX = event.clientX;
    mouseY = event.clientY;

    isMouseDown = true;
  }

  //-------------------------mouse up----------------------------
  element.addEventListener('mouseup', onMouseUp);
  function onMouseUp(event) {
    isMouseDown = false;
    elementX = parseInt(element.style.left) || 0;
    elementY = parseInt(element.style.top) || 0;
  }

  //-------------------------mouse move----------------------------
  document.addEventListener('mousemove', onMouseMove);

  function onMouseMove(event) {
    if (!isMouseDown) return;

    var deltaX = event.clientX - mouseX;
    var deltaY = event.clientY - mouseY;

    var left= elementX + deltaX ;
    var top= elementY + deltaY ;
    
    const offset= 10

    if(left < 0){
        left= 0 + offset
    }

    if(left > 500){
        left= 500 + offset
    }

    if(top < 0){
        top= 0 + offset
    }

    if(top > 400){
        top= 400 + offset
    }

    element.style.left = left + 'px';
    element.style.top = top+ 'px';
  }

}



