import React, { useState } from 'react';

const ReadMore = ({ text, maxLength,textBold}:any) => {
  const [isExpanded, setIsExpanded]:any = useState(false);
  const [truncatedText, setTruncatedText]:any = useState('');

  // Function to handle the read more/less toggle
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to truncate or expand the text based on the current state
  const truncateText = ({text, maxLength}:any) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  // Truncate or expand the text based on the current state
  const processedText = isExpanded ? text : truncateText({text, maxLength});

  return (
    <div>
      <p>{processedText}</p>
      
      {text.length > maxLength && (
        <a onClick={handleToggle}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </a>
      )}
    </div>
  );
};

export default ReadMore;
