import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback(
    (sectionId: string, e: React.MouseEvent) => {
      e.preventDefault();

      const element = document.getElementById(sectionId);

      if (element) {
        const newPath = `${location.pathname}#${sectionId}`;
        navigate(newPath, { replace: true });

        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [navigate, location.pathname],
  );

  return scrollToSection;
};
