import { useEffect, useState } from 'react';

/**
 * Custom hook to preload images for better performance
 * @param imageUrls - Array of image URLs to preload
 * @returns Loading state and error state
 */
export const usePreloadImages = (imageUrls: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;
    let hasError = false;

    const imagePromises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          loadedCount++;
          if (loadedCount === imageUrls.length) {
            setImagesLoaded(true);
          }
          resolve(url);
        };

        img.onerror = () => {
          hasError = true;
          setLoadError(true);
          reject(url);
        };

        img.src = url;
      });
    });

    Promise.allSettled(imagePromises).then(() => {
      if (!hasError) {
        setImagesLoaded(true);
      }
    });
  }, [imageUrls]);

  return { imagesLoaded, loadError };
};
