import { Schedule } from '@/types';
import Modal from './ui/Modal';
import NeonCheckbox from './ui/NeonCheckbox';
import { ChangeEvent } from 'react';

type SettingsModalProps = {
  handleChangeSchedule: (arg: string) => void;
  handleCloseModal: () => void;
  schedules: Schedule[];
};

export default function ViewSchedulesModal({
  handleChangeSchedule,
  handleCloseModal,
  schedules,
}: SettingsModalProps) {
  function handleScheduleClick(e: ChangeEvent<HTMLInputElement>) {
    // Make it so only one checkbox is checked at a time.
    console.log(
      e.target,
      e.currentTarget,
      e.target.getAttribute('data-schedule-name')
    );
    const scheduleName =
      e.target.getAttribute('data-schedule-name') ?? 'Default';

    handleChangeSchedule(scheduleName);
  }

  return (
    <Modal handleClose={handleCloseModal}>
      <div className="bg-gray-800 border-2 border-[var(--neon-color)] neon-box rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-orbitron mb-6 text-center neon-text">
          Schedules
        </h2>
        <div className="space-y-4">
          {schedules.length > 0 ? (
            schedules.map((scheduleItem) => (
              <NeonCheckbox
                onChange={handleScheduleClick}
                key={scheduleItem.name}
                label={scheduleItem.name}
                data-schedule-name={scheduleItem.name}
              />
            ))
          ) : (
            <p className="text-center text-gray-400">No schedules available.</p>
          )}
        </div>
        <button
          id="close-settings-btn"
          className="mt-8 w-full neon-button bg-[var(--neon-color)] text-white font-bold py-3 px-6 rounded-lg text-lg uppercase"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
