/**
 * Smooth scroll to a section by ID with offset for fixed headers
 * @param sectionId - The ID of the section to scroll to (without #)
 * @param behavior - Scroll behavior (default: 'smooth')
 * @param offset - Offset in pixels for fixed headers (default: 80)
 */
export const scrollToSection = (
  sectionId: string, 
  behavior: ScrollBehavior = 'smooth',
  offset: number = 80
) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior
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