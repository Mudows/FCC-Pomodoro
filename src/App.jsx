import React, { useState, useEffect, useRef } from 'react';
import Timer from './components/Timer';
import Controls from './components/Controls';
import './styles/App.scss';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [timerLabel, setTimerLabel] = useState('Session');
  const intervalRef = useRef(null);
  const timerLabelRef = useRef(timerLabel);

  useEffect(() => {
    timerLabelRef.current = timerLabel;
  }, [timerLabel]);

  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  const switchTimer = () => {
    const audio = document.getElementById('beep');
    audio.play();

    if (timerLabelRef.current === 'Session') {
      setTimerLabel('Break');
      setTimeLeft(breakLength * 60);
    } else {
      setTimerLabel('Session');
      setTimeLeft(sessionLength * 60);
    }
  };

  const decrementTime = () => {
    setTimeLeft((prevTimeLeft) => {
      if (prevTimeLeft === 0) {
        switchTimer();
        return prevTimeLeft;
      }
      return prevTimeLeft - 1;
    });
  };

  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      setIsRunning(true);
      intervalRef.current = setInterval(decrementTime, 1000);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setIsRunning(false);
    setTimerLabel('Session');
    const audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div id="pomodoro-timer">
      <h1>Pomodoro Timer</h1>
      <Timer
        breakLength={breakLength}
        sessionLength={sessionLength}
        timeLeft={timeLeft}
        timerLabel={timerLabel}
        formatTime={formatTime}
      />
      <Controls
        breakLength={breakLength}
        sessionLength={sessionLength}
        setBreakLength={setBreakLength}
        setSessionLength={setSessionLength}
        handleStartStop={handleStartStop}
        handleReset={handleReset}
        isRunning={isRunning}
      />
      <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
    </div>
  );
}

export default App;