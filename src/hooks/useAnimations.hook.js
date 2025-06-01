import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const animations = {
  'from-right': 'slide-in-from-right',
  'from-left': 'slide-in-from-left',
  'from-down': 'slide-in-from-down',
  'appear': 'appear-on-screen'
}

const useAnimations = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    const startAnimation = (entries, observer) => {
      entries.forEach(entry => {
        Object.entries(animations)
          .filter(animation => entry.target.classList.contains(animation[0]))
          .map(([_, className]) => entry.target.classList.toggle(className, entry.isIntersecting));
      });
    };

    const observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: '0px', threshold: 1 }; 

    const elements = [];
    document.querySelectorAll(Object.keys(animations).map(className => '.' + className).join(', '))
      .forEach(el => elements.push(el));
    elements.forEach(el => {
      observer.observe(el, options);
    });
  }, [pathname]);
}

export default useAnimations