function myFunction() {
    var w = window.innerWidth;
    y = document.getElementById("menu")
    x = document.getElementById("icon")
    if (w < 750) {
        x.classList.toggle("change");
        y.classList.toggle("show")
    }
    
  }
  
  window.onscroll = function() {
    y = document.getElementById("menu")
    x = document.getElementById("icon")
    
    if (x.classList == "icon change" && y.classList == "menu show") {
        myFunction()
    }
  }