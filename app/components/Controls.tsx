import NeonButton from './ui/NeonButton';

type ControlsProps = {
  handleStartBtnClick: () => void;
  handlePrevRoundClick: () => void;
  handleNextRoundClick: () => void;
  handleResetRoundClick: () => void;
  handleEndTournamentClick: () => void;
  startBtnText: string;
  tournamentOver: boolean;
};

export default function Controls({
  startBtnText = 'Start',
  handleStartBtnClick,
  handlePrevRoundClick,
  handleNextRoundClick,
  handleResetRoundClick,
  handleEndTournamentClick,
  tournamentOver = false,
}: ControlsProps) {
  return (
    <>
      <section
        id="controls"
        className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6"
      >
        <NeonButton
          id="prev-round-btn"
          disabled={tournamentOver}
          onClick={handlePrevRoundClick}
        >
          Prev
        </NeonButton>
        <NeonButton
          id="play-pause-btn"
          variant="large"
          onClick={handleStartBtnClick}
          disabled={tournamentOver}
        >
          {startBtnText}
        </NeonButton>
        <NeonButton
          id="next-round-btn"
          disabled={tournamentOver}
          onClick={handleNextRoundClick}
        >
          Next
        </NeonButton>
      </section>

      <section className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        <NeonButton
          id="reset-round-btn"
          variant="secondary"
          disabled={tournamentOver}
          onClick={handleResetRoundClick}
        >
          Reset Round
        </NeonButton>
        <NeonButton
          id="end-tournament-btn"
          variant="warning"
          disabled={tournamentOver}
          onClick={handleEndTournamentClick}
        >
          End Tournament
        </NeonButton>
      </section>
    </>
  );
}
