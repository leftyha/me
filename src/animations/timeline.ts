import { animate } from 'animejs';

export function reveal(target: string) {
  return animate(target, {
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 900,
    easing: 'easeOutExpo'
  });
}
