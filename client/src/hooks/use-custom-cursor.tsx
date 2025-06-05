import { useEffect } from "react";

export function useCustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor-dot');
    let mouseX = 0, mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      if (cursor) {
        (cursor as HTMLElement).style.left = mouseX - 4 + 'px';
        (cursor as HTMLElement).style.top = mouseY - 4 + 'px';
      }
      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
}
