import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import {
  SwitcherContainer,
  SwitchLabel,
  SwitchInput
} from '../../components/ThemeSwitcher';

const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <SwitcherContainer>
      <SwitchLabel>
        <SwitchInput
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <span>{theme} Mode</span>
      </SwitchLabel>
    </SwitcherContainer>
  );
};

export default ThemeSwitcher;
