// src/hooks/useTidio.js
import { useEffect } from 'react';

const useTidio = () => {
  useEffect(() => {
    // Load the Tidio script
    const script = document.createElement('script');
    script.src = "//code.tidio.co/your_unique_public_key.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);
};

export default useTidio;