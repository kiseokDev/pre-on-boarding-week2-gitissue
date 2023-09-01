import { useEffect, useRef } from 'react';

interface IntersectionObserverPops {
  callback: () => Promise<void>;
  option?: {
    threshold?: number | number[];
    root?: Element | null;
    rootMargin?: string;
  };
}

const useInfinityScroll = ({
  callback,
  option = {},
}: IntersectionObserverPops) => {
  const observeRef = useRef(null);

  const options = {
    threshold: 0.3,
    ...option,
  };

  const sendRequest = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      callback().catch(error => {
        console.error('Error in useInfinityScroll callback:', error);
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(sendRequest, options);
    if (observeRef.current) observer.observe(observeRef.current);
    return () => {
      observer.disconnect();
    };
  }, [sendRequest]);

  return observeRef;
};

export default useInfinityScroll;
