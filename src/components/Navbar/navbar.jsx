import React from 'react';
import { useState, useEffect } from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='exam-heading'>Vcriate Exam</div>
            {/* {props.showTimer === 'true' ? <div className='timer'>Time-Left: {Math.floor(time/60)}:{time%60}</div> : null} */}
        </div>
    );
}

export default Navbar;