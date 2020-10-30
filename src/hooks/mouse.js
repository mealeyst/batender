import { useRef, useEffect, useState } from 'react';

export const useMouseInteractions = (handleMouseOver, handleMouseOut, handleMouseClick) => {
  const ref = useRef(null);
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
        node.addEventListener('click', handleMouseClick);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
          node.removeEventListener('click', handleMouseClick);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref];
}