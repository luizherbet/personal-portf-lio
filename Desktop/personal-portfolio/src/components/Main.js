import React, { useEffect, useState } from 'react';

function Main() {
  const wordArray = ['Texto Um', 'Texto Dois', 'Texto Três'];
  const [word, setWord] = useState(0);
  const [letters, setLetters] = useState('');
  const [writing, setWriting] = useState(true);
  const [paused, setPaused] = useState(false);
  // const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = wordArray[word];
    if (writing) {
      timer = setInterval(() => {
        setLetters(prev => {
          const newWord = currentWord.slice(0, prev.length + 1);
          if (newWord === currentWord) {
            clearInterval(timer);
            setWriting(false);
          }
          return newWord;
        });
      }, 150);
    } else {
      //Apagando
      timer = setInterval(() => {
        setLetters(prev => {
          const newWord = prev.slice(0, -1);
          if (newWord === '') {
            setWord(prev => (prev + 1) % wordArray.length);
            setWriting(true);
          }
          return newWord;
        });
      }, 150);
    }

    return () => clearInterval(timer);
  }, [word, writing]);

  return (
    <div>
      <p style={{ fontWeight: '900' }}>{letters}</p>
    </div>
  );
}

export default Main;
