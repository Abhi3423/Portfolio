import React from "react";

function Popup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>X</button>
        <a href="https://drive.google.com/file/d/1cjUGKCRz4QLPp06Ku9JK1YMj3rAyp5C8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="popup-button">SDE RESUME</a>
        <a href="https://drive.google.com/file/d/143xqmvPnWHz5mWNfzMj2uk60SRO4Fi9W/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="popup-button">FULLSTACK RESUME</a>
        <a href="https://drive.google.com/file/d/1MI99sbEcOqhx-e327nIWNAdmgAIx1Ytb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="popup-button">IOS RESUME</a>
      </div>
    </div>
  );
}

export default Popup;
