import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/navbar';
import { useNavigate } from 'react-router-dom';
import './start.css';

function Start() {
  const navigate = useNavigate();
  const [sureStart, setSureStart] = useState(false);
  const goFullScreen = () => {
    // Check if the Fullscreen API is supported
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  };
  const StartExam = () => {
    console.log("Exam started");
    goFullScreen();
    setSureStart(true);
    // navigate('/exam');
  };

  if(sureStart){
    return(
      <div className='popup'>
        <div className='popup-content'>
          <div className='popup-text'>Are you sure you want to start the exam ?</div>
          <div className='popup-buttons'>
            <button className='popup-button' onClick={() => navigate('/exam')}>Yes</button>
            <button className='popup-button' onClick={() => setSureStart(false)}>No</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
        <Navbar />
        <div className='start'>
            <div className='intructions'>
                <div className='intructions-heading'>Instructions</div>
                <div className='intructions-content'>
                    <ul>
                        <li>There are 10 questions in this exam.</li>
                        <li>Each question has 4 options, out of which only 1 is correct.</li>
                        <li>Each question carries 1 mark.</li>
                        <li>There is no negative marking.</li>
                        <li>Once you start the exam, you can pause it.</li>
                        <li>Once you submit the exam, you can resume it.</li>
                        <li>If you escape the full screen for once you will get a warning</li>
                        <li>If you escape the fullscreen twice you will be terminated from the exam and awarded a score of zero</li>
                    </ul>
                </div>
                <div className='start-button-container'>
                    <button className='start-button' onClick={StartExam}>Start Exam</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Start;