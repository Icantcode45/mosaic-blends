import { useEffect, useRef, useState } from 'react';

interface UseImageLazyLoadingOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useImageLazyLoading = (options: UseImageLazyLoadingOptions = {}) => {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { imgRef, isInView };
};