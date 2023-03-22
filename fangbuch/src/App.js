import React, { useState } from 'react';
import { render } from 'react-dom';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app">
      <button className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </nav>
      <main>
        <h1>Progressive Web App</h1>
        <div className="text-block">This is an informative text</div>
        <div className="pie-chart-area"></div>
      </main>
    </div>
  );
}

render(<App />, document.getElementById('root'));

export default App;
