import React from 'react';

const Timer = ({ breakLength, sessionLength, timeLeft, timerLabel, formatTime }) => {
  return (
    <div id="timer">
      <div id="timer-label">{timerLabel}</div>
      <div id="time-left">{formatTime(timeLeft)}</div>
      <div id="break-label">Break Length: <span id="break-length">{breakLength}</span></div>
      <div id="session-label">Session Length: <span id="session-length">{sessionLength}</span></div>
    </div>
  );
};

export default Timer;