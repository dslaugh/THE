export default function ScheduleModal() {
  return (
    <div
      id="schedule-modal"
      className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 hidden"
    >
      <div className="bg-gray-800 border-2 border-[var(--neon-color)] neon-box rounded-lg p-8 w-full max-w-2xl max-h-[80vh] flex flex-col">
        <h2 className="text-3xl font-orbitron mb-6 text-center neon-text">
          Rounds Schedule
        </h2>
        <div
          id="schedule-list"
          className="flex-grow overflow-y-auto pr-4 space-y-2"
        ></div>
        <div className="mt-6 flex justify-between">
          <button
            id="new-schedule-btn"
            className="neon-button bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-md uppercase"
          >
            New Schedule
          </button>
          <button
            id="close-schedule-btn"
            className="neon-button bg-[var(--neon-color)] text-white font-bold py-3 px-6 rounded-lg text-lg uppercase"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
