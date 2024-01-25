import React, { useState, useEffect } from 'react';

const Joke = () => {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        setJoke(data.value);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (isLoading) {
    return <p>Fetching a Chuck Norris joke...</p>;
  }

  return (
    <div>
      <p>{joke}</p>
      <button onClick={() => {
        setIsLoading(true);
        fetch('https://api.chucknorris.io/jokes/random')
          .then(response => response.json())
          .then(data => setJoke(data.value))
          .catch(error => console.error(error))
          .finally(() => setIsLoading(false));
      }}>
        Get another joke!
      </button>
    </div>
  );
};

export default Joke;
