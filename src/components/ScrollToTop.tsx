import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '@/utils/scrollToSection';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Handle hash-based navigation with smooth scrolling
      const sectionId = hash.replace('#', '');
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      // Scroll to top for new pages
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;