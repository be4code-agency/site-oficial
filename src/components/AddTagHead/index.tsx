import { useEffect } from 'react';

interface AddTagHeadProps{

  content: string

}

export function AddScriptHead({content}: AddTagHeadProps){


  useEffect(() => {

    const script = document.createElement('script');
    script.innerHTML = content;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };

  }, [content]);

  return null;

}
