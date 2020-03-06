let bg = document.getElementById('main-2020');
let op = document.getElementById('opasity');
document.getElementById('main-2020-min').addEventListener("mouseover", function(){
  console.log(123);
  bg.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    bg.style.opacity = 0;
  });
});
document.getElementById('do').addEventListener("mouseover", function(){
  console.log(455);
  bg.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    bg.style.opacity = 0;
  });
});
