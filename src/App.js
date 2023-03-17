import './App.css';

import HomePage from './components/homepage';
import ThemeProvider from './providers/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <HomePage/>
      </ThemeProvider>
    </div>
  );
}

export default App;
