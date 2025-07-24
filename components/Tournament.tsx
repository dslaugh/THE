'use client';
import { useEffect, useRef, useState } from 'react';
import Controls from './Controls';
import RoundInfo from './RoundInfo';
import TimeDisplay from './TimeDisplay';
import SettingsModal from './SettingsModal';
import { convertSecondsToMinutesAndSeconds, playSound } from '../utils';
import { Schedule, ScheduleItem } from '../types';
import NeonButton from './ui/NeonButton';
import ScheduleModal from './ScheduleModal';
import ViewSchedulesModal from './ViewSchedulesModal';
type TournamentProps = {
  schedules: Schedule[];
  startingScheduleIndex: number;
};
export default function Tournament({
  schedules,
  startingScheduleIndex,
}: TournamentProps) {
  const [currentSchedule, setCurrentSchedule] = useState<Schedule>(
    schedules[startingScheduleIndex]
  );
  const [newScheduleBuilder, setNewScheduleBuilder] = useState([]);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(65);
  const [isPaused, setIsPaused] = useState(true);
  const [audioCtx, setAudioCtx] = useState<AudioContext | undefined>(undefined);
  const [oneMinuteWarningSoundPlayed, setOneMinuteWarningSoundPlayed] =
    useState(false);
  const [startBtnText, setStartBtnText] = useState('Start');
  const [minutesStr, setMinutesStr] = useState('01');
  const [secondsStr, setSecondsStr] = useState('05');
  const [currentRoundStr, setCurrentRoundStr] = useState('1 / 15');
  const [currentBlindsStr, setCurrentBlindsStr] = useState('25 / 50');
  const [nextBlindsStr, setNextBlindsStr] = useState('50 / 100');
  const [tournamentOver, setTournamentOver] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showViewSchedulesModal, setShowViewSchedulesModal] = useState(false);
  const [currentColor, setCurrentColor] = useState('#A020F0');

  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    updateUIForRound();
  }, [currentSchedule, currentRoundIndex]);

  useEffect(() => {
    if (timeLeft > 0) {
      updateTimerDisplay();

      if (timeLeft === 60 && !oneMinuteWarningSoundPlayed) {
        playSound(audioCtx, 'warning');
        setOneMinuteWarningSoundPlayed(true);
      }
      if (timeLeft <= 5 && timeLeft > 0) {
        playSound(audioCtx, 'countdown');
      }
    } else {
      // Time for the current round is up
      playSound(audioCtx, 'end');
      if (currentRoundIndex < currentSchedule.schedule.length - 1) {
        // It's not the last round, so move to the next one.
        setCurrentRoundIndex((prevRoundIndex) => prevRoundIndex + 1);
      } else {
        // This was the last round. End the tournament.
        setTournamentOver(true);
        pauseTimer();
        setStartBtnText('Finished');

        // // Automatically open the results modal
        // openModal(endTournamentModal);
      }
    }
  }, [timeLeft]);

  function updateUIForRound() {
    if (!currentSchedule || !currentSchedule.schedule.length) return;

    const round = currentSchedule.schedule[currentRoundIndex];
    if (!round) return;

    setTimeLeft(round.duration);
    setOneMinuteWarningSoundPlayed(false);

    updateTimerDisplay();

    setCurrentBlindsStr(`${round.smallBlind} / ${round.bigBlind}`);
    setCurrentRoundStr(`${round.round} / ${currentSchedule.schedule.length}`);

    if (currentRoundIndex + 1 < currentSchedule.schedule.length) {
      const nextRound = currentSchedule.schedule[currentRoundIndex + 1];
      setNextBlindsStr(`${nextRound.smallBlind} / ${nextRound.bigBlind}`);
    } else {
      setNextBlindsStr('---');
    }
    updateScheduleList();
  }

  function updateScheduleList() {
    // const scheduleList = document.getElementById('schedule-list');
    // scheduleList.innerHTML = '';
    // currentSchedule.schedule.forEach((round, index) => {
    //   const isActive = index === currentRoundIndex;
    //   const item = document.createElement('div');
    //   item.className = `p-3 rounded-lg flex justify-between items-center ${isActive ? 'bg-[var(--neon-color)] text-white' : 'bg-gray-700'}`;
    //   item.innerHTML = `<span class="font-bold">Round ${round.round}</span><span>${round.smallBlind} / ${round.bigBlind}</span><span>${formatTime(round.duration)}</span>`;
    //   scheduleList.appendChild(item);
    // });
  }

  function initAudio() {
    if (!audioCtx) {
      try {
        let ctx = new window.AudioContext();
        setAudioCtx(ctx);
      } catch (e) {
        console.error('Web Audio API is not supported.');
      }
    }
  }

  function startTimer() {
    if (isPaused) {
      setIsPaused(false);
      setStartBtnText('Pause');
      initAudio();

      if (timerIntervalRef.current !== null) {
        clearInterval(timerIntervalRef.current);
      }

      timerIntervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
  }

  function pauseTimer() {
    setIsPaused(true);
    setStartBtnText('Resume');
    if (timerIntervalRef.current !== null) {
      clearInterval(timerIntervalRef.current);
    }
  }

  function updateTimerDisplay() {
    const { minsStr, secsStr } = convertSecondsToMinutesAndSeconds(timeLeft);
    setMinutesStr(minsStr);
    setSecondsStr(secsStr);
  }

  function handleStartBtnClick() {
    isPaused ? startTimer() : pauseTimer();
  }

  function moveToNextRound() {
    if (currentRoundIndex < currentSchedule.schedule.length - 1) {
      setCurrentRoundIndex((currentRoundIndex) => currentRoundIndex + 1);
    }
  }
  function moveToPrevRound() {
    if (currentRoundIndex > 0) {
      setCurrentRoundIndex((currentRoundIndex) => currentRoundIndex - 1);
    }
  }
  function resetCurrentRound() {
    pauseTimer();
    setStartBtnText('Start');
    if (currentSchedule.schedule[currentRoundIndex]) {
      setTimeLeft(currentSchedule.schedule[currentRoundIndex].duration);
      setOneMinuteWarningSoundPlayed(false);
      updateTimerDisplay();
    }
  }

  function handleColorSelect(hexcolor: string) {
    document.documentElement.style.setProperty('--neon-color', hexcolor);
    setCurrentColor(hexcolor);
  }

  function handleCloseSettingsModal() {
    setShowSettingsModal(false);
  }

  function changeCurrentSchedule(name: string) {
    const newSchedule = schedules.find((schedule) => schedule.name === name);
    if (!newSchedule) {
      console.error(`Schedule ${name} not found`);
      return;
    }
    setCurrentSchedule(newSchedule);
  }

  return (
    <div id="app" className="w-full max-w-5xl mx-auto">
      <header className="text-center mb-6">
        <h1 className="text-4xl md:text-6xl font-orbitron font-bold neon-text">
          Dave's Texas Hold-Em Extravaganza
        </h1>
      </header>
      <main className="bg-gray-800 bg-opacity-50 border-2 border-[var(--neon-color)] rounded-2xl p-4 md:p-8 neon-box">
        <TimeDisplay
          minutes={minutesStr}
          seconds={secondsStr}
          tournamentOver={tournamentOver}
        />
        <RoundInfo
          currentRound={currentRoundStr}
          currentBlinds={currentBlindsStr}
          nextRoundBlinds={nextBlindsStr}
        />
        <Controls
          startBtnText={startBtnText}
          handleStartBtnClick={handleStartBtnClick}
          handlePrevRoundClick={moveToPrevRound}
          handleNextRoundClick={moveToNextRound}
          handleResetRoundClick={resetCurrentRound}
          handleEndTournamentClick={() => 'hello'}
          tournamentOver={tournamentOver}
        />
        {showSettingsModal && (
          <SettingsModal
            handleColorSelect={handleColorSelect}
            handleCloseModal={handleCloseSettingsModal}
            currentColor={currentColor}
          />
        )}
        {showScheduleModal && (
          <ScheduleModal
            currentRoundIndex={currentRoundIndex}
            currentSchedule={currentSchedule}
            handleCloseModal={() => setShowScheduleModal(false)}
            handleViewSchedulesClick={() => setShowViewSchedulesModal(true)}
          />
        )}
        {showViewSchedulesModal && (
          <ViewSchedulesModal
            handleChangeSchedule={changeCurrentSchedule}
            handleCloseModal={() => setShowViewSchedulesModal(false)}
            schedules={schedules}
          />
        )}
      </main>
      <footer className="mt-6 flex justify-between items-center">
        <NeonButton
          id="schedule-btn"
          variant="secondary"
          onClick={() => setShowScheduleModal(true)}
        >
          Schedule
        </NeonButton>
        <NeonButton
          id="settings-btn"
          variant="secondary"
          className="neon-button bg-gray-700 text-white font-bold py-2 px-4 rounded-lg text-md uppercase"
          onClick={() => setShowSettingsModal(true)}
        >
          Settings
        </NeonButton>
      </footer>
    </div>
  );
}
