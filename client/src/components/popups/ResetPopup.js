import React from 'react';
import '../../assets/styles/ResetPopup.css';

const ResetPopup = ({ onClose }) => {
  return (
    <div className='popup'>
      <div className='popup-content'>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Reset Password</h2>
        <input type="email" placeholder="Email" />
        <button className="reset-button">Submit</button>
      </div>
    </div>
  );
};

export default ResetPopup;
