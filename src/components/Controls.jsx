import React from 'react';

const Controls = ({
  breakLength,
  sessionLength,
  setBreakLength,
  setSessionLength,
  handleStartStop,
  handleReset,
  isRunning,
}) => {
  const handleBreakDecrement = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const handleBreakIncrement = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const handleSessionDecrement = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
    }
  };

  const handleSessionIncrement = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
    }
  };

  return (
    <div id="controls">
      <button id="break-decrement" onClick={handleBreakDecrement}>
        -
      </button>
      <button id="break-increment" onClick={handleBreakIncrement}>
        +
      </button>
      <button id="session-decrement" onClick={handleSessionDecrement}>
        -
      </button>
      <button id="session-increment" onClick={handleSessionIncrement}>
        +
      </button>
      <button id="start_stop" onClick={handleStartStop}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Controls;