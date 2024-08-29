function myFunction() {
    var w = window.innerWidth;
    y = document.getElementById("menu");
    x = document.getElementById("icon");
    if (w < 750) {
        x.classList.toggle("change");
        y.classList.toggle("show");
    }
    
  }
  

  function homeFunc() {
    window.location = 'index.html'
  }


 // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
 window.onscroll = function() {scrollFunction()
  y = document.getElementById("menu");
  x = document.getElementById("icon");
  
  if (x.classList == "icon change" && y.classList == "menu show") {
      myFunction();
  }
}


    
 function scrollFunction() {
   if (window.innerWidth < 600) {
     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
       
       document.getElementById("navbar").style.padding = "0px 0px";
       document.getElementById("logo").style.height = "60px";
       document.getElementById("menu").style.margin = "80px 0 0 0";
       document.getElementById("cover").style.height = "80px";
     } else {
       document.getElementById("navbar").style.padding = "10px 0px";
       document.getElementById("logo").style.height = "80px";
       document.getElementById("menu").style.margin = "120px 0 0 0";
       document.getElementById("cover").style.height = "120px";
     }
   }

   else {
     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
       
       document.getElementById("navbar").style.padding = "0px 0px";
       document.getElementById("logo").style.height = "60px";

     } else {
       document.getElementById("navbar").style.padding = "10px 0px";
       document.getElementById("logo").style.height = "80px";

     }
   }
 }