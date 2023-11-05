import { useEffect, useState } from 'react';

const Welcome = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'WELCOME';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="welcome-container">
      <h1>{displayText}</h1>
    </div>
  );
};

export default Welcome;
