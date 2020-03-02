let controller = new ScrollMagic.Controller()

let box2 = document.getElementById('main')
let icon = document.getElementsByClassName('contacts')

let box2Anim = anime({
  targets: box2,
  opasity: 0.5,
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
