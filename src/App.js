import React, { useState } from 'react';
import ColorInput from './Components/ColorInput/ColorInput';
import ColorList from './Components/ColorList/ColorList';
import './App.css';

function App() {
  const [word, setWord] = useState('');
  const [colors, setColors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const handleChange = event => {
    const input = event.target.value;
    setWord(input);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      fetchColors(input);
    }, 600);

    setDebounceTimeout(timeout);
  };

  const fetchColors = async input => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://www.csscolorsapi.com/api/colors/group/${input}`
      );
      const colorData = await response.json();
      setColors(colorData.colors);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='App'>
      <ColorInput word={word} handleChange={handleChange} />
      <ColorList colors={colors} isLoading={isLoading} />
    </div>
  );
}

export default App;
