import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import './App.css';

const MainPage = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="page-container">
      <div className="top-bar">
        <div className="hamburger-menu">
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={handleMenuClick}
            width={30}
            height={18}
            strokeWidth={2}
            rotate={0}
            color='white'
            borderRadius={1}
            animationDuration={0.5}
          />
        </div>
        <div className="headline">
          <h1>Mein Fangbuch</h1>
        </div>
      </div>


      <div className="content-container">
        <h2>Übersicht</h2>
        <p>Hier wird bald noch mehr stehen...</p>
        <div id="pie-chart-placeholder"></div>
      </div>
    </div>
  );
};

export default MainPage;
