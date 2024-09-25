import { useEffect } from 'react';
import useSecureStorage from './hooks/useSecureStorage';
import './scss/main.scss';
import DashboardPage from './pages/dashboard/DashboardPage';


const THEME_KEY = import.meta.env.VITE_THEME_SECRET_KEY;

function App() {

  const [theme, setTheme] = useSecureStorage('theme', 'light', THEME_KEY);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <DashboardPage />
    </div>
  );
}

export default App;
