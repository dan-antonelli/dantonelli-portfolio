import { useState, useEffect } from 'react';

interface Props {
  showCopied: boolean;
  copyToClipboard: (text: string, e: React.MouseEvent) => void;
}

export function useCopyToClipboard(): Props {
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    if (showCopied) {
      const handleDocumentClick = () => {
        setShowCopied(false);
      };

      document.addEventListener('click', handleDocumentClick);

      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }
  }, [showCopied]);

  const copyToClipboard = (text: string, e: React.MouseEvent) => {
    e.preventDefault();

    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowCopied(true);
        e.stopPropagation();
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return { showCopied, copyToClipboard };
}
