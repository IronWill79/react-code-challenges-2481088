import { useState } from "react";

export default function DarkMode() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div className={`page ${isDarkMode && "dark-mode"}`}>
      <button className="dark-mode-button" onClick={() => setDarkMode(true)}>
        Dark Mode
      </button>
      <button className="light-mode-button" onClick={() => setDarkMode(false)}>
        Light Mode
      </button>
    </div>
  );
}
