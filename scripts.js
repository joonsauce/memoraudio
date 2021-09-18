document.addEventListener('DOMContentLoaded',function(event){
    var text = ["Revolutionizing gaming, one sound at a time."];
    function typer(text, i, checkback) {
      if (i < (text.length)) {
       document.getElementById("animation").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        setTimeout(function() {
          typer(text, i + 1, checkback)
        }, 100);
      }
      else if (typeof checkback == 'function') {
        setTimeout(checkback, 700);
      }
    }
     function animation(i) {
      if (i < text[i].length) {
       typer(text[i], 0, function(){
         animation(i + 1);
       });
      }
    }
    animation(0);
  });