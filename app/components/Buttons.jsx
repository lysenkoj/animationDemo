import React, { Component } from 'react';
import {pause} from 'web-animations-js/web-animations-next.min.js'

export default class Buttons extends Component {
  constructor () {
    super()
      this.animateWave = this.animateWave.bind(this);
      this.pause = this.pause.bind(this);
      this.play = this.play.bind(this);
    }

animateWave() {
  let a = document.querySelectorAll('div.a');
  a = Array.prototype.slice.call(a);

  const keyframes = [
      {transform: 'translateY(20px) scaleX(.8) scaleY(1)'},
      {transform: 'translateY(280px) scaleX(1) scaleY(.8)'}
    ];

  const timings = {
    easing: 'cubic-bezier(.6, 0.08, 0.8, .6)',
    iterations: Infinity,
    direction: 'alternate',
    fill: 'both'
  }

  a.forEach((el, i, ra) => {
    timings.delay = i * 98 * Math.random();

    timings.duration = 575;
    el.animate(keyframes, timings)
  })

}

pause() {
  let a = document.querySelectorAll('div.a');
  a = Array.prototype.slice.call(a);

  a.forEach(el => {
    el.pause()
  })
}

play() {

}




  render() {
    return (
      <div className="btnContainer">
        <button className="tabBtn" onClick={this.animateWave}>
          <img className="imgButton" src='/btn1.svg'/>
        </button>
        <button className="tabBtn">
          <img className="imgButton" src='/btn2.svg'/>
        </button>
        <button className="tabBtn">
          <img className="imgButton" src='/btn3.svg'/>
        </button>
        <div id="play-pause">
          <button onClick={this.play} className="tabBtn">
            <img className="imgButton play-pause" src='/play.svg'/>
          </button>
          <button onClick={this.pause} className="tabBtn">
            <img className="imgButton play-pause" src='/pause.svg'/>
          </button>
        </div>
      </div>
    )
  }
}





/* Button Ideas

one that creates wave....
groups into everyother using even and odd keys
some sort of sequence of different animations






*/