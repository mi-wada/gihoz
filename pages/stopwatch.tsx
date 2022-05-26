import { AccessAlarm } from '@mui/icons-material';
import { Button, Container, Grid, List, ListItem, Typography } from '@mui/material';
import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import TimeDisplay from '../components/timeDisplay';
import Milliseconds from '../models/milliseconds';

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
        setMS(ms => ms.add(INTERVAL_MS));
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
    <Container sx={{mt: 20, mb: 20}}>
      <Grid container direction='column' alignContent='center'>
        <TimeDisplay ms={ms} />
        <Grid item>
          <Grid container justifyContent='space-between'>
            <Button onClick={startTimer} disabled={ !startButtonEnabled }>
              start
            </Button>
            <Button onClick={stopTimer} disabled={ !stopButtonEnabled } color='error'>
              stop
            </Button>
            <Button onClick={resetTimer} color='inherit'>
              reset
            </Button>
            <Button onClick={recordLap} disabled={ !recordLapButtonEnabled } color='inherit'>
              lap
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <List>
            {
              laps.map(lap =>
                <ListItem key={lap}>
                  <Grid container alignItems='center'>
                    <AccessAlarm sx={{fontSize: 24, mr: 1}} />
                    <Typography variant='h6'>
                      {lap}
                    </Typography>
                  </Grid>
                </ListItem>
              )
            }
          </List>
        </Grid>
      </Grid>
    </Container>
  )
}

export default StopWatch;
