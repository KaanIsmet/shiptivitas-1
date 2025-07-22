import React, { useEffect } from 'react';
import dragula from 'dragula';

export default function DragulaContainer({ refs }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const containers = Object.values(refs)
        .map(ref => ref.current)
        .filter(container => container !== null);
      
      if (containers.length > 0) {
	let newStatus;
        const drake = dragula(containers, {
          moves: function (el, container, handle) {
            return true;
          },
          accepts: function (el, target, source, sibling) {
            return true;
          }
        });

	

        drake.on('drop', function (el, target, source, sibling) {
          console.log('Card dropped:', el, 'from:', source, 'to:', target);
	  
        });

        return () => {
          drake.destroy();
        };
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [refs]);

  return null;
}
