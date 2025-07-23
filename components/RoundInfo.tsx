type RoundInfoProps = {
  currentRound: string;
  currentBlinds: string;
  nextRoundBlinds: string;
};

export default function RoundInfo({
  currentRound,
  currentBlinds,
  nextRoundBlinds,
}: RoundInfoProps) {
  return (
    <section
      id="info-display"
      className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-6"
    >
      <div className="bg-gray-900 p-4 rounded-lg border border-[var(--neon-color)]">
        <h2 className="text-lg md:text-xl font-bold text-[var(--neon-color)] uppercase tracking-wider">
          Round
        </h2>
        <p id="round-info" className="text-2xl md:text-3xl font-orbitron">
          {currentRound}
        </p>
      </div>
      <div className="bg-gray-900 p-4 rounded-lg border-2 border-[var(--neon-color)] neon-box">
        <h2 className="text-lg md:text-xl font-bold text-[var(--neon-color)] uppercase tracking-wider">
          Current Blinds
        </h2>
        <p id="current-blinds" className="text-3xl md:text-4xl font-orbitron">
          {currentBlinds}
        </p>
      </div>
      <div className="bg-gray-900 p-4 rounded-lg border border-[var(--neon-color)]">
        <h2 className="text-lg md:text-xl font-bold text-[var(--neon-color)] uppercase tracking-wider">
          Next Blinds
        </h2>
        <p id="next-blinds" className="text-2xl md:text-3xl font-orbitron">
          {nextRoundBlinds}
        </p>
      </div>
    </section>
  );
}
