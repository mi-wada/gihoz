import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import TimeDisplay from '../components/timeDisplay';
import Milliseconds from '../models/milliseconds';
import styles from '../styles/Home.module.css'

const StopWatch: NextPage = () => {
  const [ms, setMS] = useState(new Milliseconds());
  const [laps, setLaps] = useState<Array<string>>([]);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | undefined>(undefined);
  const [timerRunning, setTimerRunning] = useState(false);
  const [startButtonEnabled, setStartButtonEnabled] = useState(true);
  const [stopButtonEnabled, setStopButtonEnabled] = useState(false);
  const [recordLapButtonEnabled, setRecordLapButtonEnabled] = useState(false);

  const clearTimerInterval = () => {
    clearInterval(timerInterval);
    setTimerInterval(undefined);
  };

  useEffect(() => {
    const INTERVAL_MS = 10;
    if (timerRunning) {
      const interval = setInterval(() => {
        setMS((ms) => {
          return ms.add(INTERVAL_MS);
        });
      }, INTERVAL_MS);
      setTimerInterval(interval);
    } else {
      clearTimerInterval();
    }
  }, [timerRunning]);

  const startTimer = () => {
    setTimerRunning(true);
    setStartButtonEnabled(false);
    setStopButtonEnabled(true);
    setRecordLapButtonEnabled(true);
  };
  const stopTimer = () => {
    setTimerRunning(false);
    setStartButtonEnabled(true);
    setStopButtonEnabled(false);
    setRecordLapButtonEnabled(false);
  };
  const resetTimer = () => {
    stopTimer();

    setMS(new Milliseconds());
    clearTimerInterval();
    setLaps([]);
  };

  const recordLap = () => {
    setLaps([...laps, ms.formatted()])
  };

  return (
    <div className={styles.container}>
      <TimeDisplay time={ms} />
      <div className={styles.buttons}>
        <StartButton startTimer={startTimer} enabled={startButtonEnabled} />
        <StopButton stopTimer={stopTimer} enabled={stopButtonEnabled} />
        <ResetButton resetTimer={resetTimer} />
        <RecordLapButton recordLap={recordLap} enabled={recordLapButtonEnabled} />
      </div>
      <ul className={styles.laps}>
        {
          laps.map(lap =>
            <li key={lap}>{lap}</li>
          )
        }
      </ul>
    </div>
  )
}

export default StopWatch;

const StartButton: React.FunctionComponent<{ startTimer: () => void, enabled: boolean }> = ({ startTimer, enabled }) => {
  return (
    <button onClick={startTimer} disabled={!enabled}>
      start
    </button>
  )
}

const StopButton: React.FunctionComponent<{ stopTimer: () => void, enabled: boolean }> = ({ stopTimer, enabled }) => {
  return (
    <button onClick={stopTimer} disabled={!enabled}>
      stop
    </button>
  )
}

const ResetButton: React.FunctionComponent<{ resetTimer: () => void }> = ({ resetTimer }) => {
  return (
    <button onClick={resetTimer}>
      reset
    </button>
  )
}

const RecordLapButton: React.FunctionComponent<{ recordLap: () => void, enabled: boolean }> = ({ recordLap, enabled }) => {
  return (
    <button onClick={recordLap} disabled={!enabled}>
      lap
    </button>
  )
}
