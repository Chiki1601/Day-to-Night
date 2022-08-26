let duration = 16;

function intoNight() {
  let tl = new TimelineMax({ paused: true }).
  to('.night .layer1', duration / 3, { background: 'rgba(220, 20, 15, 0.3)', ease: Power0.easeNone }, 'start1').
  to('.night .layer1', duration / 3, { background: 'rgba(0, 0, 50, 0.6)', ease: Power0.easeNone }, 'start2').
  to('.night .layer1', duration / 3, { background: 'rgba(0,0,10,0.7)', ease: Power1.easeOut }, 'start3').
  fromTo('.night', duration, { filter: 'contrast(1)' }, { filter: 'contrast(1.3)', ease: Power0.easeNone }, 'start1');

  return tl;
}


function sunCurve() {
  let tl = new TimelineMax({ paused: true }).
  to('.sun-moon', duration, { boxShadow: '0 0 30px gold, 0 0 10px #b9a018, inset 0 5px 12px 20px #F5F5F5, inset -2px 8px 15px 25px #E6E6DB' }, 0).
  to(".sun-moon", duration, { bezier: { values: [{ x: 0, y: 0 }, { x: 50, y: -60 }, { x: 100, y: -55 }, { x: 153, y: 3 }], type: "cubic" }, ease: Power1.easeInOut }, 0);

  return tl;
}

function halfWay() {
  console.log('halfway');
}


var masterTl = new TimelineMax({ paused: true }).
add(sunCurve().play(), 0).
add(intoNight().timeScale(2).play(), sunCurve().duration() * 0.5).
add(halfWay, sunCurve().duration() * 0.5);


$(window).on("load", function () {
  masterTl.play();
});