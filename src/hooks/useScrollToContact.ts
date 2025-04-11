import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useScrollToContact() {
  const navigate = useNavigate();
  const location = useLocation();

  // Add highlight animation to contact box
  const highlightContactBox = () => {
    // Get contact box by ID for more reliable selection
    const contactBox = document.getElementById('contact-box');
    if (!contactBox) return;

    // Remove any existing highlight class (in case of multiple clicks)
    contactBox.classList.remove('contact-highlight');

    // Force browser to recognize the removal before adding again
    // This is a technique to restart animations
    void contactBox.offsetWidth;

    // Add the highlight class
    contactBox.classList.add('contact-highlight');

    // Clean up after animation completes
    setTimeout(() => {
      contactBox.classList.remove('contact-highlight');
    }, 2100); // Slightly longer than animation duration to ensure completion
  };

  // Handle scroll to contact section
  const scrollToContact = () => {
    // Get contact section by ID for more reliable selection
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    // Scroll the section into view
    contactSection.scrollIntoView({ behavior: 'smooth' });

    // Add a small delay to highlight after scrolling completes
    setTimeout(() => {
      highlightContactBox();
    }, 600); // Allow time for scrolling to complete
  };

  // Handle auto-scrolling when navigating from other pages
  useEffect(() => {
    if (location.pathname === '/' && location.search.includes('scrollToContact=true')) {
      // Small delay to ensure the page has fully loaded
      setTimeout(() => {
        scrollToContact();
      }, 500);
    }
  }, [location]);

  // Click handler for the contact link
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname === '/') {
      // If already on homepage, just scroll and highlight
      scrollToContact();
    } else {
      // Navigate to homepage with a flag to scroll after navigation
      navigate('/?scrollToContact=true');
    }
  };

  return { handleContactClick };
}
