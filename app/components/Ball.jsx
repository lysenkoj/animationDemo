import React, { Component } from 'react';

export default class Ball extends Component {
  constructor(props){
    super(props)
  }
// animateComponent() {
//   var a = document.querySelector('div.a');

//   var keyframes = [
//       {transform: 'translateY(20px) scaleX(.8) scaleY(1)'},
//       {transform: 'translateY(280px) scaleX(1) scaleY(.8)'}
//     ];

//   var timings = {
//     easing: 'cubic-bezier(.6, 0.08, 0.8, .6)',
//     iterations: Infinity,
//     direction: 'alternate',
//     fill: 'both',
//     duration: 575
//   }
//   a.animate(keyframes, timings)
// }


  render() {
    console.log(this.props)
    return (
      <div className="a" id={`${this.props.number}`}></div>
    )
  }
}