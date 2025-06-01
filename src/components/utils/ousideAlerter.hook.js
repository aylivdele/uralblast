import React, { useRef, useEffect } from "react";

function useOutsideAlerter() {
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      console.log(event.target);
      if (ref.current && !ref.current.contains(event.target)) {
        ref.current.classList.remove('clicked');
      }
      if (ref.current && (ref.current.contains(event.target) || ref.current.contains(event.target.parentElement))) {
        ref.current.classList.toggle('clicked');

      }
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);
  return ref;
}

export default useOutsideAlerter;