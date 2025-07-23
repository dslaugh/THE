export default function CreateScheduleModal() {
  return (
    <div
      id="create-schedule-modal"
      className="fixed inset-0 modal-backdrop flex items-center justify-center p-4"
    >
      <div className="bg-gray-800 border-2 border-[var(--neon-color)] neon-box rounded-lg p-8 w-full max-w-3xl max-h-[90vh] flex flex-col">
        <h2 className="text-3xl font-orbitron mb-6 text-center neon-text">
          Create Custom Schedule
        </h2>
        <form
          id="add-round-form"
          className="flex flex-wrap items-end gap-4 mb-4 pb-4 border-b border-gray-600"
        >
          <div className="flex-grow">
            <label
              htmlFor="round-duration"
              className="block text-sm font-bold mb-2 text-[var(--neon-color)]"
            >
              Duration (Mins)
            </label>
            <input
              type="number"
              id="round-duration"
              value="15"
              min="1"
              className="w-full bg-gray-900 p-3 rounded-lg border border-[var(--neon-color)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-color)]"
            />
          </div>
          <div className="flex-grow">
            <label
              htmlFor="small-blind"
              className="block text-sm font-bold mb-2 text-[var(--neon-color)]"
            >
              Small Blind
            </label>
            <input
              type="number"
              id="small-blind"
              value="25"
              min="0"
              className="w-full bg-gray-900 p-3 rounded-lg border border-[var(--neon-color)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-color)]"
            />
          </div>
          <div className="flex-grow">
            <label
              htmlFor="big-blind"
              className="block text-sm font-bold mb-2 text-[var(--neon-color)]"
            >
              Big Blind
            </label>
            <input
              type="number"
              id="big-blind"
              value="50"
              min="0"
              className="w-full bg-gray-900 p-3 rounded-lg border border-[var(--neon-color)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-color)]"
            />
          </div>
          <button
            type="submit"
            className="neon-button bg-green-600 text-white font-bold py-3 px-5 rounded-lg uppercase self-end"
          >
            Add Round
          </button>
        </form>
        <div
          id="new-schedule-list"
          className="flex-grow overflow-y-auto pr-4 space-y-2 mb-4 bg-gray-900/50 p-4 rounded-lg"
        >
          <p className="text-gray-400 text-center">
            Your new rounds will appear here...
          </p>
        </div>
        <div className="mt-auto pt-4 border-t border-gray-600 flex justify-between">
          <button
            id="cancel-create-schedule-btn"
            className="neon-button bg-gray-600 text-white font-bold py-3 px-6 rounded-lg uppercase"
          >
            Cancel
          </button>
          <button
            id="save-schedule-btn"
            className="neon-button bg-[var(--neon-color)] text-white font-bold py-3 px-6 rounded-lg uppercase"
            disabled
          >
            Save & Use
          </button>
        </div>
      </div>
    </div>
  );
}
