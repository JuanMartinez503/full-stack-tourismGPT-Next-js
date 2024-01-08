'use client';
import { useState } from 'react';
import { BsMoonStars, BsSunFill } from 'react-icons/bs';

const themes = {
  winter: 'winter',
  synthwave: 'synthwave',
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.winter);

  const toggleTheme = () => {
    const newTheme = theme === themes.winter ? themes.synthwave : themes.winter;
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };
  return (
    <button onClick={toggleTheme} className='btn btn-sm btn-outline'>
      {theme === 'winter' ? (
        <BsMoonStars className='h-4 w-4' />
      ) : (
        <BsSunFill className='h-4 w-4' />
      )}
    </button>
  );
};
export default ThemeToggle;