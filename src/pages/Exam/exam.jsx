import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
import Questions from "../../assets/QuestionSet";
import Result from "../Result/result";
import "./exam.css";

function Exam() {
    // const navigate = useNavigate();
    const [time, setTime] = useState(120);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [selectedOption, setSelectedOption] = useState(Array(Questions.length).fill(null));
    const [showResult, setShowResult] = useState(false);
    const [timeLeftOnSubmit, setTimeLeftOnSubmit] = useState(0);
    const [fullScreenViolation, setFullScreenViolation] = useState(0);
    const [status, setStatus] = useState("succesfully completed");
    const [showReset, setShowReset] = useState(false);

    const currentQuestion = Questions[currentQuestionIndex];

    const handleNext = () => {
        if (currentQuestionIndex < Questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    }

    const handleSubmit = () => {
        const timeLeft = time;
        setTimeLeftOnSubmit(timeLeft);
        setShowResult(true);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if(time <= 0) {
                setShowResult(true);
                setTime(0);
                return;
            }
            setTime(time - 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [time]);
    
    if(showResult){
        return(
            <Result score={correctAnswers} timeLeft={timeLeftOnSubmit} status={status}/>
        )
    }

    
    const checkSolution = (currentOption,idx) => {
        const updatedAnswers = [...selectedOption];
        updatedAnswers[currentQuestionIndex] = idx;
        setSelectedOption(updatedAnswers);
        
        if (currentOption === currentQuestion.answer) {
            setCorrectAnswers(correctAnswers + 1);
        }
    }
    
    const goFullScreen = () => {
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

    const getBackToFullScreen = () => {
        if (fullScreenViolation >= 1) {
            setStatus("terminated due to full screen violation");
            setShowResult(true);
        } else {
            setFullScreenViolation(fullScreenViolation + 1);
            goFullScreen();
        }
    };

    const showResetPopUp = () => {
        setShowReset(true);
    }

    const handleReset = () => {
        setCurrentQuestionIndex(0);
        setCorrectAnswers(0);
        setSelectedOption(Array(Questions.length).fill(null));
        setShowResult(false);
        setTime(120);
        setShowReset(false); 
    }

    if(showReset){
        return(
            <div className="reset-popup">
                <div className="reset-popup-content">
                    <div className="reset-popup-text">Are you sure you want to reset the exam ? This will mark all your progress till now to null & is a non reversible act !</div>
                    <div className="reset-popup-buttons">
                        <button className="reset-popup-button" onClick={handleReset}>Yes</button>
                        <button className="reset-popup-button" onClick={() => setShowReset(false)}>No</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar/>
            <div className="exam">
                <div className="question-number">Question {currentQuestionIndex+1} / {Questions.length}</div>
                <div className="timer">({time} seconds left)</div>
                {document.fullscreenElement?<div className="question-container">
                    <div className="question-container-upperpart">
                        <div className="question">{currentQuestion.question}</div>
                        <div className="options">
                            {currentQuestion.options.map((currentOption, idx) => (
                            <div
                            key={idx}
                            className={`option ${selectedOption[currentQuestionIndex] === idx ? 'selected' : ''}`}
                            onClick={() => checkSolution(currentOption, idx)}
                            >
                            <span>{idx + 1}.</span>{currentOption}
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="button-container">
                        <button onClick={handlePrevious} className="previous-button">Previous</button>
                        {currentQuestionIndex < Questions.length - 1 ? (
                            <button onClick={handleNext} className="next-button">Next</button>
                        ) : (
                            <button onClick={handleSubmit} className="submit-button">Submit</button> 
                        )}
                    </div>
                    <div className="reset-button-container">
                        <button className="reset-button" onClick={showResetPopUp}>Reset Exam</button>
                    </div>
                </div>:<div className="warning">
                            <div className="warning-text">You have exited the full screen. Please re-enter the full screen to continue the exam ⚠️</div>
                            <button className="get-back-to-full-screen" onClick={getBackToFullScreen}>GO back to FullScreen</button>
                        </div>
                }
            </div>
        </div>
    );
}

export default Exam;