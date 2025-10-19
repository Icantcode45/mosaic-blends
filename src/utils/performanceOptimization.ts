/**
 * Debounce function to limit how often a function can be called
 * Useful for scroll and resize handlers
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle function to ensure a function is called at most once per interval
 * Better for frequent events like scroll
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Request idle callback wrapper with fallback for unsupported browsers
 */
export const requestIdleCallback = (callback: () => void, options?: { timeout?: number }) => {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);
  }
  // Fallback for browsers that don't support requestIdleCallback
  return setTimeout(callback, 1);
};

/**
 * Cancel idle callback wrapper with fallback
 */
export const cancelIdleCallback = (id: number) => {
  if ('cancelIdleCallback' in window) {
    return window.cancelIdleCallback(id);
  }
  return clearTimeout(id);
};

/**
 * Checks if user prefers reduced motion for accessibility
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get animation duration based on user preferences
 */
export const getAnimationDuration = (normalDuration: number): number => {
  return prefersReducedMotion() ? 0 : normalDuration;
};
