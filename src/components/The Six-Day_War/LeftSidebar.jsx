import React from "react";

function LeftSidebar({ selectedWord, onWordClick, rectangleSettings }) {
  const words = [
    "זמן הלחימה",
    "החזית הנגדית", 
    "נפגעים",
    "אות המערכה",
    "סיפורי מלחמה"
  ];

  return (
    <div
      className="absolute left-16"
      style={{ top: "50%", transform: "translateY(-50%)" }}
    >
      <div className="flex flex-col items-start gap-6">
        {words.map((word) => (
          <div key={word} style={{ display: "flex", alignItems: "center", gap: rectangleSettings.gap, position: "relative" }}>
            {/* מלבן שמאלי - מופיע רק כשהמילה נבחרת */}
            {selectedWord === word && (
              <div
                style={{
                  width: "22px",
                  height: "11px",
                  backgroundColor: "#D9D9D9",
                  opacity: 1,
                  transform: `translateY(${rectangleSettings.translateY})`, // הזזה אנכית מותאמת
                }}
              />
            )}
            <span
              className="text-[#817F75] cursor-pointer hover:text-white transition-colors"
              style={{
                fontFamily: selectedWord === word ? "80-kb" : "80-kb",
                fontWeight: 400,
                fontSize: selectedWord === word ? "18px" : "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "left",
                opacity: selectedWord === word ? 1 : 0.6,
                width: selectedWord === word ? "109px" : "120px",
                height: selectedWord === word ? "11px" : "11px",
                whiteSpace: "nowrap",
                color: selectedWord === word ? "#D9D9D9" : "#817F75",
                marginLeft: selectedWord === word ? "8px" : "0px",
                transition: "all 0.3s ease",
              }}
              onClick={() => onWordClick(word)}
            >
              {word}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSidebar; 