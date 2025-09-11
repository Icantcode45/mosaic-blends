import { useEffect, useState } from "react";

declare global {
  interface Window {
    showDisclosureModal: () => void;
  }
}

export default function QualiphyWidget() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Wait for the Qualiphy script to load
    const checkScript = () => {
      if (window.showDisclosureModal) {
        return;
      }
      // Check again after a short delay if script isn't ready
      setTimeout(checkScript, 100);
    };
    
    checkScript();
  }, []);

  const handleClick = () => {
    if (window.showDisclosureModal) {
      window.showDisclosureModal();
    }
  };

  const buttonStyle = {
    width: "150px",
    height: "40px",
    cursor: "pointer",
    backgroundColor: isHovered ? "#8058fa" : "#cfc9ff",
    color: isHovered ? "white" : "#0a005b",
    border: "none",
    borderRadius: "5px",
    fontWeight: "600",
    display: "flex",
    justifyContent: "center" as const,
    alignItems: "center" as const,
    transition: "all 0.2s ease",
  };

  return (
    <div>
      <div id="main-qualiphy-widget">
        <div
          id="loadFormButton"
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        >
          Exam Invite
        </div>
      </div>
      <p style={{ display: "none" }} id="not-available">
        Not available!
      </p>
    </div>
  );
}