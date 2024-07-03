import { useMemo } from 'react';

const useTitleFormatter = (title, format) => {
  const formattedTitle = useMemo(() => {
    if (!title) return '';

    let formatted;
    switch (format) {
      case 'uppercase':
        formatted = title.toUpperCase();
        break;
      case 'titlecase':
        formatted = title.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
        break;
      default:
        formatted = title;
    }

    // Debug logging
    console.log(`useTitleFormatter - input title: ${title}, format: ${format}, output: ${formatted}`);

    return formatted;
  }, [title, format]);

  return formattedTitle;
};

export default useTitleFormatter;
