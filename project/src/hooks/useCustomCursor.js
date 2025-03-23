import { useEffect, useState } from 'react';

export const useCustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState({
    isHoveringName: false,
    isHoveringLink: false,
    isHoveringProject: false,
  });

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      const isName = target.classList.contains('name-title');
      const isLink = target.tagName.toLowerCase() === 'a' || 
                    target.parentElement?.tagName.toLowerCase() === 'a';
      const isResume = target.classList.contains('resumebutton'); 
                    
      const isProject = target.closest('.project-card') !== null;

      setCursorState({
        isHoveringName: isName,
        isHoveringLink: isLink,
        isHoveringProject: isProject,
        isHoveringResume: isResume,
      });
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return { position, ...cursorState };
};