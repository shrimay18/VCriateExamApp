Here's the README file for your online exam-taking platform:

---

# Vcriate Exam Platform

This is an online exam-taking platform built using **React** for the front end. The platform allows users to take a multiple-choice question (MCQ) exam in full-screen mode, where users are monitored for violations like exiting full-screen. The exam is automatically terminated if violations exceed a threshold. A countdown timer keeps track of the remaining time, and upon completion, the user’s score report is generated.

## Live Demo

Check out the live version of the platform here: https://v-criate-exam-app.vercel.app/

---

## Features

- **Full-Screen Mode**: Users must stay in full-screen mode to take the exam. Exiting triggers a warning or termination.
- **Violation Detection**: Exiting full-screen triggers a violation warning, with automatic termination after multiple attempts.
- **Countdown Timer**: The exam has a countdown timer (set to 2 minutes) and auto-submits when time runs out.
- **Question Navigation**: Navigate between questions with "Previous" and "Next" buttons.
- **Dynamic Answer Saving**: Answers are dynamically saved as the user selects them.
- **Score Calculation**: The platform calculates and displays the user's score at the end of the exam.
- **Exam Reset**: Users can reset the exam during the session.
- **Results Page**: Displays the score, time left, and exam status.

---

## Project Structure

```
src
│
├── assets
│     └── QuestionSet.jsx               # Questions data
│
├── components
│     └── Navbar
│         ├── navbar.jsx                # Navbar component
│         └── navbar.css                # Styles for the navbar
│
├── pages
│     ├── Exam
│     │     ├── exam.jsx                # Main exam component
│     │     └── exam.css                # Styles for the exam component
│     ├── Result
│     │     ├── result.jsx              # Result display after exam completion
│     │     └── result.css              # Styles for the result page
│     └── Start
│           ├── start.jsx               # Starting page component
│           └── start.css               # Styles for the start page
│
├── App.js                              # Main app component
├── App.css                             # Global styles
└── index.js                            # Entry point of the application
```

---

## Installation

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14.x or above)
- **npm** (Node package manager)

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/shrimaysomani18/VCriateExamApp.git
   cd examplatform
   ```

2. **Install Dependencies**:
   Install all required packages:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   Start the server and open the app in your browser:
   ```bash
   npm start
   ```

---

## Usage

### Starting the Exam

1. Upon loading the platform, the user is presented with a welcome screen and a "Start Exam" button.
2. Clicking "Start Exam" switches to full-screen modeand a pop up appears confirming your decision to start the exam and upon clicking yes the exam timer starts.
3. Users can answer questions, navigate between them, and submit when done.

### Navigating Questions

- Use "Previous" and "Next" buttons to switch between questions.
- Answers can be changed anytime before submitting.

### Full-Screen Violations

- Exiting full-screen triggers a warning.
- After a second violation, the exam is terminated automatically.

### Submitting the Exam

- Manually submit the exam via the "Submit" button.
- The exam is automatically submitted when the timer reaches zero.

### Viewing Results

- After submission, the score and time left are displayed.
- Users can restart the exam from the results page.

---

## Customization

- **Question Set**: Modify the questions in `QuestionSet.jsx` in the `assets` folder.
- **Timer**: Change the default 2-minute timer by adjusting the `time` state in `exam.jsx`.
- **Violation Threshold**: The default threshold is 2 violations. You can modify this logic in `exam.jsx` under the `getBackToFullScreen()` function.

---

## About

Developed by Shrimay Somani, this platform aims to provide a smooth and user-friendly online exam-taking experience with real-time monitoring for enhanced exam integrity.

