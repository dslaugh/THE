import { Schedule } from '@/types';
import Modal from './ui/Modal';

type SettingsModalProps = {
  handleCloseModal: () => void;
  schedules: Schedule[];
};

export default function ViewSchedulesModal({
  handleCloseModal,
  schedules,
}: SettingsModalProps) {
  return (
    <Modal handleClose={handleCloseModal}>
      <div className="bg-gray-800 border-2 border-[var(--neon-color)] neon-box rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-orbitron mb-6 text-center neon-text">
          Schedules
        </h2>
        <div className="space-y-4">
          {schedules.length > 0 ? (
            schedules.map((scheduleItem) => (
              <div key={scheduleItem.name} className="text-lg text-white">
                {scheduleItem.name}
              </div>
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
// import { Schedule } from '@/types';
// import Modal from './ui/Modal';
//
// type SettingsModalProps = {
//   handleCloseModal: () => void;
//   schedules: Schedule[];
// };
//
// export default function ViewSchedulesModal({
//   handleCloseModal,
//   schedules,
// }: SettingsModalProps) {
//   return (
//     <Modal handleClose={handleCloseModal}>
//       <div className="bg-gray-800 border-2 border-[var(--neon-color)] neon-box rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-3xl font-orbitron mb-6 text-center neon-text">
//           Schedules
//         </h2>
//         <div className="space-y-4">Schedules Will Be Listed Here</div>
//         <button
//           id="close-settings-btn"
//           className="mt-8 w-full neon-button bg-[var(--neon-color)] text-white font-bold py-3 px-6 rounded-lg text-lg uppercase"
//           onClick={handleCloseModal}
//         >
//           Close
//         </button>
//       </div>
//     </Modal>
//   );
// }
