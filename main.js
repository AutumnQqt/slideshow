let imgs = $('.wrapper img')
let allButtons = $('ul li')
activeButton($(allButtons[0]))

for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function (event) {
    let px = $(event.currentTarget).index() * 300
    $('.wrapper .images').css({
      transform: 'translate(-' + px + 'px)'
    })
    activeButton($(allButtons[i]))
    n = $(event.currentTarget).index()
  })
}

let n = 0
let timeId = setTimer()
allButtons.eq(0).trigger('click')

$('.wrapper').on('mouseenter', function (event) {
  window.clearInterval(timeId)
})
$('.wrapper').on('mouseleave', function () {
  let timeId = setTimer()
})

function setTimer() {
  return setInterval(function () {
    n = (n + 1) % imgs.length
    allButtons.eq(n).trigger('click')
    activeButton($(allButtons[n]))
  }, 3000)
}

function activeButton($button){
  $button.addClass('red')
      .siblings('.red').removeClass('red')
}
