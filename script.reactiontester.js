
var start = new Date().getTime();
    
function shapeappear() {
    if (Math.random() < 0.5) {
    document.getElementById("shape").style.borderRadius  = "50%";
                      }
  else {
    document.getElementById("shape").style.borderRadius = "0%";
        }
  document.getElementById("shape").style.display="block";
  start = new Date().getTime();
                  }
shapeappear();
 
 
 
function appearAfterDelay() {
   setTimeout(shapeappear, Math.random() * 5000);
 }
 appearAfterDelay();
 
 
 document.getElementById("shape").onclick = function(){
      document.getElementById("shape").style.display="none";
      var end = new Date().getTime();
      var yourtime = (end - start) / 1000;
      document.getElementById("results").innerHTML = " " + yourtime + "seconds";
      appearAfterDelay();
 }