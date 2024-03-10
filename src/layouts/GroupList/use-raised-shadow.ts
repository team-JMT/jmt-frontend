import { useEffect } from 'react';

import { animate, MotionValue, useMotionValue } from 'framer-motion';

const inactiveShadow = '0px 0px 0px rgba(0,0,0,0.8)';
//box-shadow: 0px 4px 16px 0px rgba(22, 26, 29, 0.08);
//0px 2px 5px rgba(0,0,0,0.3)

export function useRaisedShadow(value: MotionValue<number>) {
  const boxShadow = useMotionValue(inactiveShadow);

  useEffect(() => {
    let isActive = false;
    value.onChange((latest) => {
      const wasActive = isActive;
      if (latest !== 0) {
        isActive = true;
        if (isActive !== wasActive) {
          animate(boxShadow, '0px 4px 16px 0px rgba(22, 26, 29, 0.08)');
        }
      } else {
        isActive = false;
        if (isActive !== wasActive) {
          animate(boxShadow, inactiveShadow);
        }
      }
    });
  }, [value, boxShadow]);

  return boxShadow;
}

//https://www.framer.com/motion/reorder/
