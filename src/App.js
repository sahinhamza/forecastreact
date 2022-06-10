import './App.css';
import Main from './components/Main';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <Main/>
    </WeatherProvider>
  );
}

export default App;
