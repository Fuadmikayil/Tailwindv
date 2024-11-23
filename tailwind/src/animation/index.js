import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Animation = (ref, x1, x2, y1, y2, op1, op2, delay = 0, rot1,rot2, duration = 1) => {
  gsap.fromTo(
    ref,
    { opacity: op1, x: x1, y: y1, rotate: rot1},
    {
      opacity: op2,
      x: x2,
      y: y2,
      rotate: rot2,
      duration: duration,
      delay: delay,
      scrollTrigger: {
        trigger: ref,
        toggleActions: 'play none none none',
        markers: false,
        start: 'top bottom-=50px',
      },
    }
  );
};

export default Animation;
