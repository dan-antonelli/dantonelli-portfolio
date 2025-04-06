import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Custom hook for handling contact section scrolling functionality
 * Manages both scrolling within the same page and navigation + scrolling from other pages
 */
export function useScrollToContact() {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle auto-scrolling when navigating from other pages
  useEffect(() => {
    if (location.pathname === '/' && location.search.includes('scrollToContact=true')) {
      setTimeout(() => {
        const contactSection = document.querySelector('.contact-container');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [location]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname === '/') {
      // If already on homepage, just scroll to contact
      const contactSection = document.querySelector('.contact-container');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage with a flag to scroll after navigation
      navigate('/?scrollToContact=true');
    }
  };

  return { handleContactClick };
}
