export default function EndTournamentModal() {
  return (
    <div
      id="end-tournament-modal"
      className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 hidden"
    >
      <div className="bg-gray-800 border-2 border-[var(--neon-color)] neon-box rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-orbitron mb-6 text-center neon-text">
          Tournament Results
        </h2>
        <form id="results-form" className="space-y-4">
          <input
            type="text"
            placeholder="1st Place Player"
            className="w-full bg-gray-900 p-3 rounded-lg border border-[var(--neon-color)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-color)]"
          />
          <input
            type="text"
            placeholder="2nd Place Player"
            className="w-full bg-gray-900 p-3 rounded-lg border border-[var(--neon-color)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-color)]"
          />
          <input
            type="text"
            placeholder="3rd Place Player"
            className="w-full bg-gray-900 p-3 rounded-lg border border-[var(--neon-color)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-color)]"
          />
          <input
            type="number"
            placeholder="Number of Participants"
            className="w-full bg-gray-900 p-3 rounded-lg border border-[var(--neon-color)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-color)]"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full bg-gray-900 p-3 rounded-lg border border-[var(--neon-color)] focus:outline-none focus:ring-2 focus:ring-[var(--neon-color)]"
          />
          <div className="flex justify-between gap-4 mt-6">
            <button
              type="button"
              id="cancel-end-tournament-btn"
              className="w-1/2 neon-button bg-gray-600 text-white font-bold py-3 rounded-lg uppercase"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 neon-button bg-[var(--neon-color)] text-white font-bold py-3 rounded-lg uppercase"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
