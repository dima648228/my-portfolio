import { useState } from 'react';

import Navigator from './components/Navigator';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'

import './styles/null.css';

function App() {
  const [activePage, setActivePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Skills':
        return <Skills />;
      case 'Projects':
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navigator active={activePage} setActive={setActivePage}/>
      <div className="container mt-4">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
