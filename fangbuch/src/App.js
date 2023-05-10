import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './App.css';
import './styles.css';


class HomePage extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        {/* Header-Bar mit H1-Block und Hamburger-Menü */}
        <div className="header-bar">
          <Menu left>
            <a className="menu-item" href="/">
              Home
            </a>
            <a className="menu-item" href="/about">
              About
            </a>
            <a className="menu-item" href="/contact">
              Contact
            </a>
          </Menu>
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
