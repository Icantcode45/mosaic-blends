/**
 * Smooth scroll to a section by ID
 * @param sectionId - The ID of the section to scroll to (without #)
 * @param behavior - Scroll behavior (default: 'smooth')
 */
export const scrollToSection = (sectionId: string, behavior: ScrollBehavior = 'smooth') => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior,
      block: 'start',
      inline: 'nearest'
    });
  }
};

/**
 * Scroll to top of page
 * @param behavior - Scroll behavior (default: 'smooth')
 */
export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({
    top: 0,
    behavior
  });
};