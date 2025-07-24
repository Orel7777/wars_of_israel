import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Second_Lebanon_War = () => {
  const navigate = useNavigate();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1200);
  const [selectedWord, setSelectedWord] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [showColoredRectangles, setShowColoredRectangles] = useState(false);

  // בדיקת גודל המסך
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // מעקב אחר גלילת העכבר
  useEffect(() => {
    const handleWheel = (e) => {
      setScrollY(prev => {
        const newScrollY = prev + e.deltaY * 0.1;
        return Math.max(0, Math.min(100, newScrollY));
      });
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // ניווט חזרה לדף הראשי
  const handleSignalsClick = () => {
    navigate("/");
  };

  // בחירת מילה מהתפריט
  const handleWordClick = (word) => {
    setSelectedWord(word);
    
    // אנימציה מיוחדת לחזית הנגדית
    if (word === "החזית הנגדית") {
      setTimeout(() => {
        setShowColoredRectangles(true);
      }, 1000);
    } else {
      setShowColoredRectangles(false);
    }
  };

  // מילים לתפריט השמאלי
  const leftSidebarWords = [
    "משך המלחמה",
    "החזית הנגדית", 
    "נפגעים",
    "אות המערכה",
    "סיפורי מלחמה"
  ];

  // הגדרות למלבן קטן ליד המילים
  const rectangleSettings = {
    "משך המלחמה": { left: "calc(25% - 20px)", top: "120px" },
    "החזית הנגדית": { left: "calc(25% - 20px)", top: "180px" },
    "נפגעים": { left: "calc(25% - 20px)", top: "240px" },
    "אות המערכה": { left: "calc(25% - 20px)", top: "300px" },
    "סיפורי מלחמה": { left: "calc(25% - 20px)", top: "360px" }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* כותרת ראשית */}
      <h1 
        style={{
          fontFamily: "'80-kb', sans-serif",
          fontWeight: 400,
          fontSize: "48px",
          lineHeight: "106%",
          letterSpacing: "17%",
          textAlign: "center",
          opacity: 0.79,
          color: "#E3DCDC",
          position: "absolute",
          top: "50px",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        מלחמת לבנון השנייה
      </h1>

      {/* תפריט ימני */}
      <div 
        style={{
          position: "absolute",
          top: "50px",
          right: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}
      >
        <span 
          style={{
            fontFamily: "'80-kb', sans-serif",
            fontWeight: 400,
            fontSize: "30px",
            lineHeight: "106%",
            letterSpacing: "17%",
            textAlign: "right",
            opacity: 0.79,
            color: "#E3DCDC",
            cursor: "pointer"
          }}
          className="hover:text-white transition-colors"
          onClick={handleSignalsClick}
        >
          אותות
        </span>
        <span 
          style={{
            fontFamily: "'80-kb', sans-serif",
            fontWeight: 400,
            fontSize: "30px",
            lineHeight: "106%",
            letterSpacing: "17%",
            textAlign: "right",
            opacity: 0.79,
            color: "#E3DCDC",
            cursor: "pointer"
          }}
          className="hover:text-white transition-colors"
        >
          השוואות
        </span>
        <span 
          style={{
            fontFamily: "'80-kb', sans-serif",
            fontWeight: 400,
            fontSize: "30px",
            lineHeight: "106%",
            letterSpacing: "17%",
            textAlign: "right",
            opacity: 0.79,
            color: "#E3DCDC",
            cursor: "pointer"
          }}
          className="hover:text-white transition-colors"
        >
          ציר זמן
        </span>
        <span 
          style={{
            fontFamily: "'80-kb', sans-serif",
            fontWeight: 400,
            fontSize: "30px",
            lineHeight: "106%",
            letterSpacing: "17%",
            textAlign: "right",
            opacity: 0.79,
            color: "#E3DCDC",
            cursor: "pointer"
          }}
          className="hover:text-white transition-colors"
        >
          מקורות
        </span>
      </div>

      {/* תפריט שמאלי */}
      <div 
        style={{
          position: "absolute",
          top: "200px",
          left: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "30px"
        }}
      >
        {leftSidebarWords.map((word, index) => (
          <div key={index} style={{ position: "relative" }}>
            <span 
              style={{
                fontFamily: "'80-kb', sans-serif",
                fontWeight: selectedWord === word ? 700 : 400,
                fontSize: "24px",
                lineHeight: "106%",
                letterSpacing: "17%",
                textAlign: "right",
                opacity: selectedWord === word ? 1 : 0.79,
                color: selectedWord === word ? "#FFFFFF" : "#E3DCDC",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              className="hover:text-white transition-colors"
              onClick={() => handleWordClick(word)}
            >
              {word}
            </span>
            
            {/* מלבן קטן ליד המילה הנבחרת */}
            {selectedWord === word && (
              <div 
                style={{
                  position: "absolute",
                  width: "40px",
                  height: "4px",
                  background: "#817F75",
                  ...rectangleSettings[word]
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* מלבן מרכזי */}
      <div 
        style={{
          position: "absolute",
          top: "200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          border: "1px solid #817F75",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div 
          style={{
            fontFamily: "'80-kb', sans-serif",
            fontWeight: 400,
            fontSize: "36px",
            lineHeight: "106%",
            letterSpacing: "17%",
            textAlign: "center",
            opacity: 0.79,
            color: "#E3DCDC"
          }}
        >
          {selectedWord || "בחר נושא מהתפריט"}
        </div>
      </div>

      {/* קווים מפרידים */}
      <div 
        style={{
          position: "absolute",
          width: "100vw",
          height: "1px",
          left: "0px",
          top: "200px",
          background: "#817F75"
        }}
      />
      <div 
        style={{
          position: "absolute",
          width: "1px",
          height: "100vh",
          left: "calc(33.33% + 0px)",
          top: "0px",
          background: "#817F75"
        }}
      />
      <div 
        style={{
          position: "absolute",
          width: "1px",
          height: "100vh",
          left: "calc(66.66% + 0px)",
          top: "0px",
          background: "#817F75"
        }}
      />
    </div>
  );
};

export default Second_Lebanon_War; 