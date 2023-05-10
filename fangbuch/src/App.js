import React, { Component } from 'react';
import './App.css';
import './styles.css';


class HomePage extends Component {
  render() {
    return (
      <div>
        {/* Header-Bar mit H1-Block */}
        <div className="header-bar">
          <h1>Willkommen auf meiner PWA</h1>
        </div>

        {/* Inhaltsbereich */}
        <ContentSection />
      </div>
    );
  }
}

class ContentSection extends Component {
  render() {
    return (
      <div className="content">
        {/* Textblock */}
        <p>Hier ist der Text für meine PWA.</p>

        {/* Bereich für Diagramme */}
        <div id="diagrams"></div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <HomePage />
      </div>
    );
  }
}

export default App;
