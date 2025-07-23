export type TimeDisplayProps = {
  minutes: string;
  seconds: string;
  tournamentOver: boolean;
};

export default function TimeDisplay({
  minutes,
  seconds,
  tournamentOver,
}: TimeDisplayProps) {
  return (
    <section
      id="timer-display"
      className="text-center mb-6 h-[115px] flex items-center justify-center"
    >
      <div
        id="timer"
        className="custom-grid text-8xl md:text-9xl font-orbitron font-bold text-white neon-text w-full"
      >
        {tournamentOver ? (
          <div className="col-span-3 text-6xl md:text-7xl">TOURNAMENT OVER</div>
        ) : (
          <>
            <div id="display-minutes" className="justify-self-end">
              {minutes}
            </div>
            <div>:</div>
            <div id="display-seconds" className="justify-self-start">
              {seconds}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
