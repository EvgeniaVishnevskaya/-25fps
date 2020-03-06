var bg = document.getElementById('main-2020');
document.getElementById('main-2020-min').addEventListener("mouseover", function(){
  bg.style.opacity = 1;
  this.addEventListener("mouseout", function(){bg.style.background = "";
  });
});
