import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export const Modal: React.FC = ({ children }) => {
  const elt = useRef<HTMLDivElement>();
  if (!elt.current) {
    const div = document.createElement('div');
    elt.current = div;
  }

  useEffect(() => {
    const modalRoot = document.querySelector('#modal');
    if (modalRoot && elt.current) {
      modalRoot.appendChild(elt.current);
    }
    return () => {
      if (modalRoot && elt.current) {
        modalRoot.removeChild(elt.current);
      }
    };
  }, []);

  return createPortal(<div>{children}</div>, elt.current);
};
