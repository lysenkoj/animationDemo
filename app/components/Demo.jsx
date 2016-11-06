import React, { Component } from 'react';
import Buttons from './Buttons';
import KeyframeEffect from 'web-animations-js';
import Ball from './Ball';

export default class Demo extends Component {
  constructor () {
    super()
      this.state = {
        numChildren: 0
      };
      this.onAddChild = this.onAddChild.bind(this);
    }


onAddChild () {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    }


componentDidUpdate(){
  var a = document.querySelectorAll('div.a');
  a = Array.prototype.slice.call(a);

  var keyframes = [
      {transform: 'translateY(20px) scaleX(.8) scaleY(1)'},
      {transform: 'translateY(280px) scaleX(1) scaleY(.8)'}
    ];

  var timings = {
    easing: 'cubic-bezier(.6, 0.08, 0.8, .6)',
    iterations: Infinity,
    direction: 'alternate',
    fill: 'both'
  }

  a.forEach(function(el, i, ra) {
    timings.delay = i * 98 /* * Math.random()*/;

    timings.duration = 575;
    el.animate(keyframes, timings);

// var effect = new KeyframeEffect(a, keyframes, timings);
  // timings.duration = 2000;
  // el.animate([
  //   {opacity: 1},
  //   {opacity: 0}
  // ], timings);

  // timings.duration = 3000;
  // el.animate([
  //   {backgroundColor: 'rgb(239, 239, 255)'},
  //   {backgroundColor: '#e4c349'}
  // ], timings);
});

}

  render() {
    const children = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
            children.push(<Ball number={i} />);
        };

    return (
      <div className="demo">
        <div onClick={this.onAddChild} className="container">
          {children}
        </div>
        {true ?
          <button id="tabBtn" onClick={()=>{console.log("disply/hide buttons")}}>
            <img id="imgButton" src='/tabIcon.svg'/>
          </button> :
          <Buttons />
        }
      </div>
    )
  }
}