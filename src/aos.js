import AOS from "aos";
import "aos/dist/aos.css";

export function setupAOS() {

  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });



}
