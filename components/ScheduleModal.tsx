import { ScheduleItem } from '../types';
import { formatTime } from '../utils';
import Modal from './ui/Modal';

type ScheduleModalProps = {
  currentRoundIndex: number;
  currentSchedule: ScheduleItem[];
  handleCloseModal: () => void;
  handleViewSchedulesClick: () => void;
};

export default function ScheduleModal({
  currentRoundIndex,
  currentSchedule,
  handleCloseModal,
  handleViewSchedulesClick,
}: ScheduleModalProps) {
  const currentRound = currentSchedule[currentRoundIndex];

  return (
    <Modal handleClose={handleCloseModal}>
      <div className="bg-gray-800 border-2 border-[var(--neon-color)] neon-box rounded-lg p-8 w-full max-w-2xl max-h-[80vh] flex flex-col">
        <h2 className="text-3xl font-orbitron mb-6 text-center neon-text">
          Rounds Schedule
        </h2>
        <div
          id="schedule-list"
          className="flex-grow overflow-y-auto pr-4 space-y-2"
        >
          {currentSchedule.map((item, index) => (
            <CurrentScheduleItem
              key={item.round || index}
              item={item}
              isCurrentRound={item.round === currentRound.round}
            />
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <button
            id="new-schedule-btn"
            className="neon-button bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-md uppercase"
            onClick={handleViewSchedulesClick}
          >
            View Schedules
          </button>
          <button
            id="new-schedule-btn"
            className="neon-button bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-md uppercase"
          >
            New Schedule
          </button>
          <button
            id="close-schedule-btn"
            className="neon-button bg-[var(--neon-color)] text-white font-bold py-3 px-6 rounded-lg text-lg uppercase"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}

type CurrentScheduleItemProps = {
  item: ScheduleItem;
  isCurrentRound: boolean;
};

function CurrentScheduleItem({
  item,
  isCurrentRound,
}: CurrentScheduleItemProps) {
  return (
    <div
      className={`p-3 rounded-lg flex justify-between items-center ${isCurrentRound ? 'bg-[var(--neon-color)] text-white' : 'bg-gray-700'}`}
    >
      <span className="font-bold">Round {item.round}</span>
      <span>
        ${item.smallBlind} / ${item.bigBlind}
      </span>
      <span>{formatTime(item.duration)}</span>
    </div>
  );
}
