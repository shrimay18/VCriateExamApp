import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/navbar';
import './result.css';

function Result(props) {
    const navigate = useNavigate();
    useEffect(() => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
        } else if (document.mozFullScreenElement) {
            document.mozCancelFullScreen();
        } else if (document.msFullscreenElement) {
            document.msExitFullscreen();
        }
    }, []);

    const RestartExam = () => {
        navigate('/');
    }

    return (
        <div className='result-page'>
            <Navbar />
            <div className='result-container'>
                <div className='result-heading'>Result</div>
                <div className='result-content'>
                    <div className='result-score'>Correct Answer: {props.score}</div>
                    <div className='result-total-questions'>Total Questions: 5</div>
                    <div className='result-time-taken'>Time Left: {props.timeLeft} seconds</div> 
                    <div className='status'>Status: {props.status}</div>
                </div>
                {props.score > 3 ? <div className='result-status'>"Well done champ, You deserve a treat !"</div> : <div className='result-status'>"Don't worry champ, a little more practice and you are all set for next one"</div>}
                <div className='restart-button-container'>      
                    <button className='restart-button' onClick={RestartExam}>Restart Exam</button>   
                </div>         
            </div>
        </div>
    )
}

export default Result;