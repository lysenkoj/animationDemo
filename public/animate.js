var a = document.querySelectorAll('div');
a = Array.prototype.slice.call(a);

var timings = {
  easing: 'ease-in-out',
  iterations: Infinity,
  direction: 'alternate',
  fill: 'both'
}

a.forEach(function(el, i, ra) {
  timings.delay = i * 98;

  timings.duration = 2500;
  el.animate([
    {transform: 'translateY(0) scaleX(.8)'},
    {transform: 'translateY(95vh) scaleX(1)'}
  ], timings);

  timings.duration = 2000;
  el.animate([
    {opacity: 1},
    {opacity: 0}
  ], timings);

  timings.duration = 3000;
  el.animate([
    {backgroundColor: 'rgb(239, 239, 255)'},
    {backgroundColor: '#e4c349'}
  ], timings);
});

var ball = document.getElementsByTagName('ball')[0],

  keyframes = { transform: ['translateY(0)', 'translateY(160px)'] };
  timing = {
    duration: 575,
    iterations: Infinity,
    direction: 'alternate',
    easing: 'cubic-bezier(.6, 0.08, 0.8, .6)'
  };

ball.animate(keyframes, timing);