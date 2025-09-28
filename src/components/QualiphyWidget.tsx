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
    width: "200px",
    height: "50px",
    cursor: "pointer",
    backgroundColor: isHovered ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.9)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontWeight: "700",
    display: "flex",
    justifyContent: "center" as const,
    alignItems: "center" as const,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    fontSize: "16px",
    boxShadow: isHovered 
      ? "0 8px 25px hsl(var(--primary) / 0.4), 0 0 0 3px hsl(var(--primary) / 0.1)" 
      : "0 4px 15px hsl(var(--primary) / 0.3)",
    transform: isHovered ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)",
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Attention-grabbing header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-4 max-w-md mx-auto">
        <h3 className="text-lg font-bold text-foreground mb-2 flex items-center justify-center gap-2">
          <span className="text-primary">📋</span>
          Required Before Treatment
        </h3>
        <p className="text-sm text-muted-foreground text-center">
          Schedule your mandatory good faith examination
        </p>
      </div>
      
      <div id="main-qualiphy-widget">
        <div
          id="loadFormButton"
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        >
          📅 Schedule Exam
        </div>
      </div>
      <p style={{ display: "none" }} id="not-available">
        Not available!
      </p>
      
      {/* Additional context */}
      <p className="text-xs text-muted-foreground text-center max-w-xs">
        Quick 5-10 minute virtual consultation required by Arizona law
      </p>
    </div>
  );
}