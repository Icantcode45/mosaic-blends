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
    backgroundColor: isHovered ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.1)",
    color: isHovered ? "white" : "hsl(var(--primary))",
    border: "2px solid hsl(var(--primary))",
    borderRadius: "8px",
    fontWeight: "600",
    display: "flex",
    justifyContent: "center" as const,
    alignItems: "center" as const,
    transition: "all 0.2s ease",
    fontSize: "14px",
    boxShadow: isHovered ? "0 4px 12px hsl(var(--primary) / 0.3)" : "none",
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