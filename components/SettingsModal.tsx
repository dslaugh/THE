import { useState } from 'react';
import Modal from './ui/Modal';
import React from 'react';

type SettingsModalProps = {
  handleColorSelect: (hexcolor: string) => void;
  handleCloseModal: () => void;
  currentColor: string;
};

export default function SettingsModal({
  handleColorSelect,
  handleCloseModal,
  currentColor,
}: SettingsModalProps) {
  const [selectedColor, setSelectedColor] = useState<string>(
    currentColor ?? '#A020F0'
  );

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const thisPicker = e.currentTarget;
    const color = thisPicker.dataset.color ?? '#A020F0';

    setSelectedColor(color);
    document.documentElement.style.setProperty('--neon-color', color);
    handleColorSelect(color);
  }

  const colorPickers = [
    { color: '#FF8C00' },
    { color: '#00FF00' },
    { color: '#00BFFF' },
    { color: '#A020F0' },
  ];

  return (
    <Modal>
      <div className="bg-gray-800 border-2 border-[var(--neon-color)] neon-box rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-orbitron mb-6 text-center neon-text">
          Settings
        </h2>
        <div className="space-y-4">
          <h3 className="text-xl text-[var(--neon-color)]">Glow Color</h3>
          <div className="flex justify-around">
            {colorPickers.map((picker) => (
              <button
                key={picker.color}
                style={{ backgroundColor: picker.color }}
                className={`color-picker h-12 w-12 rounded-full border-4 border-transparent ${
                  selectedColor === picker.color ? 'ring-4 ring-white' : ''
                }`}
                data-color={picker.color}
                onClick={handleClick}
              ></button>
            ))}
          </div>
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
