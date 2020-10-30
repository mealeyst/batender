import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Power3, gsap } from 'gsap';

import { getRandom } from '../../utils'

export const Button = styled(({className, children, style, ...props}) => {
  const ref = useRef(null);
  const timelines = [];
  const animateBubbles = (node) => {
    const bubbles = node.querySelectorAll('.left, .right');
    bubbles.forEach((bubble, index) => {
      const xDir = bubble.classList.contains('left') ? '-' : '';
      const size = !bubble.classList.contains('small') ? 1 : getRandom(0.2, 0.6);
      const r = !bubble.classList.contains('small') ? getRandom(-1, 1)*index%2 : getRandom(-1, 1)*index;
      const timeline = gsap.timeline({repeat: -1});
      timeline.from(bubble, {x: 0, y: 0})
        .addLabel('mouseOut')
        .to(bubble, { duration: 0.7, x: `${xDir}18`, y: 0})
        .addLabel('mouseOver')
        .to(bubble, { duration: 0.1, scale: size, x: `${xDir}25` })
        .to(bubble, {duration: 0.6, x: `${xDir}60`, y: r*10, scale: 0, opacity: 0, ease: Power3.easeOut})
        .addLabel('click');
      timelines.push(timeline)
    })
  }
  useEffect(() => {
    const node = ref.current;
    animateBubbles(node);
    timelines.forEach(timeline => timeline.pause())
    node.addEventListener('mouseover', () => {
      timelines.forEach(timeline => {
        timeline.progress('0');
        timeline.tweenTo("mouseOver");
      })
    });
    node.addEventListener('mouseout', () => {
      timelines.forEach(timeline => {
        const currentProgress = timeline.progress();
        if (currentProgress <= 0.64) {
          timeline.tweenTo("mouseOut")
        }
      })
    });
    node.addEventListener('click', () => {
      timelines.forEach(timeline => {
        timeline.tweenTo("click");
      })
    });

  });
  return (
      <button ref={ref} className={className} id="component-3"  style={{'filter': "url('#filter-goo-3')", ...style}} {...props}>
        {children}
        <span className="button__bg"></span>
        <span className="left"></span>
        <span className="left small"></span>
        <span className="left small"></span>
        <span className="right"></span>
        <span className="right small"></span>
        <span className="right small"></span>
      </button>
  )
})`
  -webkit-font-smoothing: antialiased;
  background-color: transparent;
  border: none;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85em;
  font-weight: 700;
  text-decoration: none;
  user-select: none;
  letter-spacing: 0.1em;
  color: white;
  padding: 20px 40px;
  text-transform: uppercase;
  transition: background-color 0.25s ease-out;
  outline: 90px solid transparent!important;
  position: relative;

  &:hover {
    background-color: $action-color;
    color: #fff;
  }

  &:focus {
    outline: none;
    color: #fff;
  }
  .button__bg {
    content: "";
    background: ${props => props.theme.colors.blue[4]};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transition: background-color 0.25s ease-out;
  }

&:hover {
  background-color: transparent;

  &:before, span {
    background-color: ${props => props.theme.colors.blue[2]};
  }
}
.left, .right {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background: ${props => props.theme.colors.blue[4]};;
  transition: background-color 0.25s ease-out;
  top: 50%;
  margin-top: -12px;
  z-index: -2;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
}
`