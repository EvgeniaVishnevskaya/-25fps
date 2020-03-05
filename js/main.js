let controller = new ScrollMagic.Controller()

let main = document.getElementById('main')
let icon = document.getElementById('icon')

let box2Anim = anime({
  targets: main,
  opasity: 0,
  autoplay: false,
  duration: 1400
})
new ScrollMagic.Scene({
  triggerElement: icon,

})
.addTo(controller)
.on('enter', function () {
  if(!box2Anim.completed){
    box2Anim.play()
  }

})
