
var controller = new ScrollMagic.Controller ();

var scene = new ScrollMagic.Scene({
            triggerElement: "#se"
          })
          .setTween("#main", 0.5, {opacity: 0}) // trigger a TweenMax.to tween
          .addIndicators({name: "1 (duration: 1400)"}) // add indicators (requires plugin)
          .addTo(controller);


var scene2 = new ScrollMagic.Scene({
  triggerElement: "#se"
})
  .setTween("#main-min", 0.5, {opacity: 0}) // trigger a TweenMax.to tween
  .addIndicators({name: "1 (duration: 1400)"})  // add indicators (requires plugin)
  .addTo(controller);

let bg = document.getElementById('main-2020');
let sh = document.getElementById('main-showreel2019');
let dm = document.getElementById('main-deepmerchlab2019');

document.getElementById('main-2020-min').addEventListener("mouseover", function(){

  bg.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    bg.style.opacity = 0;
  });
});
document.getElementById('do').addEventListener("mouseover", function(){

  bg.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    bg.style.opacity = 0;
  });
});
document.getElementById('showreel2019').addEventListener("mouseover", function(){

  sh.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    sh.style.opacity = 0;
  });
});
document.getElementById('main-showreel2019-min').addEventListener("mouseover", function(){

  sh.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    sh.style.opacity = 0;
  });
});
document.getElementById('main-deepmerchlab2019-min').addEventListener("mouseover", function(){

  dm.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    dm.style.opacity = 0;
  });
});
document.getElementById('deepmerchlab2019').addEventListener("mouseover", function(){

  dm.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    dm.style.opacity = 0;
  });
});

let tn = document.getElementById('main-tehnonikol2019');

document.getElementById('main-tehnonikol2019-min').addEventListener("mouseover", function(){

  tn.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    tn.style.opacity = 0;
  });
});
document.getElementById('tehnonikol2019').addEventListener("mouseover", function(){

  tn.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    tn.style.opacity = 0;
  });
});


let m9 = document.getElementById('main-moek2019');

document.getElementById('main-moek2019-min').addEventListener("mouseover", function(){

  m9.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    m9.style.opacity = 0;
  });
});
document.getElementById('moek2019').addEventListener("mouseover", function(){

  m9.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    m9.style.opacity = 0;
  });
});

let km = document.getElementById('main-komersant2019');

document.getElementById('main-komersant2019-min').addEventListener("mouseover", function(){

  km.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    km.style.opacity = 0;
  });
});
document.getElementById('komersant2019').addEventListener("mouseover", function(){

  km.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    km.style.opacity = 0;
  });
});


let dsh = document.getElementById('main-designshowreel2018');

document.getElementById('main-designshowreel2018-min').addEventListener("mouseover", function(){

  dsh.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    dsh.style.opacity = 0;
  });
});
document.getElementById('designshowreel2018').addEventListener("mouseover", function(){

  dsh.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    dsh.style.opacity = 0;
  });
});

let fl = document.getElementById('main-flat2018');

document.getElementById('main-flat2018-min').addEventListener("mouseover", function(){

  fl.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    fl.style.opacity = 0;
  });
});
document.getElementById('flat2018').addEventListener("mouseover", function(){

  fl.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    fl.style.opacity = 0;
  });
});

let m8 = document.getElementById('main-moek2018');

document.getElementById('main-moek2018-min').addEventListener("mouseover", function(){

  m8.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    m8.style.opacity = 0;
  });
});
document.getElementById('moek2018').addEventListener("mouseover", function(){

  m8.style.opacity = 1;
  this.addEventListener("mouseout", function(){
    m8.style.opacity = 0;
  });
});
