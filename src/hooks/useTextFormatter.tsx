import { ReactNode } from 'react';

/**
 * A custom hook for formatting text with various markdown-like syntax.
 * Currently supports **bold** text.
 */
export function useTextFormatter() {
  /**
   * Formats text by converting markdown-like syntax to React elements.
   * - **text** becomes <strong>text</strong>
   */
  const formatText = (text: string): (ReactNode | string)[] => {
    // Normalize by replacing newlines with spaces
    const normalizedText = text.replace(/\n/g, ' ');

    // Split by markdown patterns - currently just bold
    const parts = normalizedText.split(/(\*\*.*?\*\*)/gs);

    return parts.map((part, index) => {
      // Handle bold text (**text**)
      if (part.startsWith('**') && part.endsWith('**')) {
        const strongText = part.slice(2, -2);
        return (
          <strong key={index} className="emphasized-text">
            {strongText}
          </strong>
        );
      }
      return part;
    });
  };

  return { formatText };
}
