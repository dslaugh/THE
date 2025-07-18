export const defaultSchedule = [
  { round: 1, smallBlind: 25, bigBlind: 50, duration: 900 },
  { round: 2, smallBlind: 50, bigBlind: 100, duration: 900 },
  { round: 3, smallBlind: 100, bigBlind: 200, duration: 900 },
  { round: 4, smallBlind: 200, bigBlind: 400, duration: 720 },
  { round: 5, smallBlind: 300, bigBlind: 600, duration: 720 },
  { round: 6, smallBlind: 400, bigBlind: 800, duration: 720 },
  { round: 7, smallBlind: 500, bigBlind: 1000, duration: 600 },
  { round: 8, smallBlind: 600, bigBlind: 1200, duration: 600 },
  { round: 9, smallBlind: 800, bigBlind: 1600, duration: 600 },
  { round: 10, smallBlind: 1000, bigBlind: 2000, duration: 480 },
  { round: 11, smallBlind: 1500, bigBlind: 3000, duration: 480 },
  { round: 12, smallBlind: 2000, bigBlind: 4000, duration: 360 },
  { round: 13, smallBlind: 5000, bigBlind: 10000, duration: 360 },
  { round: 14, smallBlind: 10000, bigBlind: 20000, duration: 360 },
  { round: 15, smallBlind: 15000, bigBlind: 30000, duration: 360 },
];

export const testSchedule = [
  { round: 1, smallBlind: 25, bigBlind: 50, duration: 20 },
  { round: 2, smallBlind: 50, bigBlind: 100, duration: 20 },
];

export function convertSecondsToMinutesAndSeconds(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const minsStr = String(mins).padStart(2, '0');
  const secsStr = String(secs).padStart(2, '0');
  return { mins, secs, minsStr, secsStr };
}

export function formatTime(seconds: number) {
  const { minsStr, secsStr } = convertSecondsToMinutesAndSeconds(seconds);
  return `${minsStr}:${secsStr}`;
}

export function playSound(audioCtx?: AudioContext, type: string) {
  if (!audioCtx) return;
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.01);
  if (type === 'warning') {
    oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
  } else if (type === 'countdown') {
    oscillator.frequency.setValueAtTime(1200, audioCtx.currentTime);
    oscillator.type = 'square';
  } else if (type === 'end') {
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
  }
  oscillator.start(audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.00001,
    audioCtx.currentTime + (type === 'countdown' ? 0.2 : 1)
  );
  oscillator.stop(audioCtx.currentTime + (type === 'countdown' ? 0.2 : 1));
}
