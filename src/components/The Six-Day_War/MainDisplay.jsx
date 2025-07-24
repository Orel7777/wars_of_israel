import React from "react";

function MainDisplay({ 
  selectedWord, 
  scrollY, 
  linesAnimation, 
  showColoredRectangles, 
  linesOpacity,
  isLargeScreen 
}) {
  
  // פונקציה שמחזירה את התוכן המתאים לכל מילה
  const getInnerRectangleContent = () => {
    switch (selectedWord) {
      case "זמן הלחימה": {
        // חישוב האחוז של המלבן החצוי בהתבסס על הגלילה
        const fillProgress = Math.min(scrollY / 100, 1); // מתחיל מ-0 ומגיע ל-1 אחרי 100px גלילה
        const fillWidth = `${fillProgress * 50}%`; // 50% = חצי המלבן
        
        return (
          <div style={{ 
            width: "100%", 
            height: "100%", 
            border: "1px solid #817F75",
            backgroundColor: "transparent",
            position: "relative"
          }}>
            {/* המלבן החצוי - מופיע בהדרגה */}
            <div style={{
              position: "absolute",
              left: "0",
              top: "0",
              width: fillWidth,
              height: "100%",
              backgroundColor: "#817F75",
              opacity: fillProgress,
              transition: "width 0.3s ease-out, opacity 0.3s ease-out"
            }} />
          </div>
        );
      }
      
      case "החזית הנגדית": {
        // חישוב המיקום של הקווים בהתבסס על האנימציה
        const linesTop = linesAnimation * 207; // 207px = גובה המלבן
        console.log("Front display - linesAnimation:", linesAnimation, "linesTop:", linesTop); // הדפסה לדיבוג
        
        // נתוני המלבנים הצבעוניים
        const coloredRectangles = [
          { width: "36px", background: "#044929" },//ירוק
          { width: "39px", background: "#9F090C" },//אדום
          { width: "39px", background: "#E3DCDC" },//לבן
          { width: "39px", background: "#044929" },//ירוק
          { width: "39px", background: "#044929" },//ירוק
          { width: "39px", background: "#9F090C" },//אדום
          { width: "39px", background: "#E3DCDC" },//לבן
          { width: "39px", background: "#111212" },//שחור
          { width: "39px", background: "#111212" },//שחור
          { width: "39px", background: "#E3DCDC" },//לבן
          { width: "39px", background: "#E0981B" },//כתום /צהוב
          { width: "39px", background: "#9F090C" },//אדום
          { width: "39px", background: "#9F090C" },//אדום
          { width: "39px", background: "#E3DCDC" },//לבן
          { width: "39px", background: "#044929" },//ירוק
          { width: "39px", background: "#111212" },//שחור 
          { width: "39px", background: "#111212" },//שחור
          { width: "39px", background: "#E3DCDC" }, // לבן 
          { width: "39px", background: "#9F090C" }, // אדום
          { width: "1fr", background: "#044929" } // ירוק
        ];
        
        return (
          <div style={{ 
            width: "100%", 
            height: "100%", 
            border: "1px solid #817F75",
            backgroundColor: "transparent",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* המלבנים הצבעוניים - מופיעים אחרי האנימציה */}
            {showColoredRectangles && (
              <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                display: "grid",
                gridTemplateColumns: "36px 39px 39px 39px 39px 39px 39px 39px 39px 39px 39px 39px 39px 39px 39px 39px 39px 39px 39px 39px 1fr",
                animation: "fadeIn 1s ease-in-out forwards"
              }}>
                {coloredRectangles.map((rect, index) => {
                  console.log(`Rectangle ${index + 1}:`, rect); // הדפסה לדיבוג
                  
                  // הדפסה מיוחדת למלבן האחרון
                  if (index === 20) {
                    console.log("LAST RECTANGLE:", rect);
                    console.log("LAST RECTANGLE ANIMATION DELAY:", index * 0.1, "seconds");
                  }
                  
                  return (
                    <div
                      key={index}
                      style={{
                        width: "100%", // עם grid, width: 100% יעבוד
                        height: "0%", // מתחיל מ-0
                        background: rect.background,
                        transformOrigin: "top",
                        animation: `fillDown 3s ease-in-out ${index * 0.15}s forwards`, // עיכוב מדורג יותר איטי
                        border: "1px solid rgba(255,255,255,0.1)", // גבול לדיבוג
                      }}
                    />
                  );
                })}
              </div>
            )}
            
            {/* הקווים שיורדים למטה באנימציה */}
            <div style={{
              position: "absolute",
              top: `${linesTop}px`,
              left: "0",
              width: "100%",
              height: "100%",
              transition: "top 5s ease-in-out",
              animation: linesAnimation === 1 ? "linesDown 5s ease-in-out forwards" : 
                       linesAnimation === 0 ? "linesUp 5s ease-in-out forwards" : "none"
            }}>
              {/* קווים אנכיים */}
              {[
                "calc(50% - 270px)",
                "calc(50% - 230px)",
                "calc(50% - 190px)",
                "calc(50% - 150px)",
                "calc(50% - 20px)",
                "calc(50% + 20px)",
                "calc(50% + 150px)",
                "calc(50% + 190px)",
                "calc(50% + 230px)",
                "calc(50% + 270px)"
              ].map((left, index) => (
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    left: left,
                    top: "0",
                    width: "1px",
                    height: "100%",
                    backgroundColor: "#817F75",
                    opacity: 1,
                  }}
                />
              ))}
            </div>
          </div>
        );
      }
      
      case "נפגעים":
        return (
          <div style={{ 
            width: "100%", 
            height: "100%", 
            border: "1px solid #817F75",
            backgroundColor: "transparent"
          }} />
        );
        
      default:
        // מצב ברירת מחדל - עם פסים (העיצוב המקורי)
        return (
          <div style={{ 
            width: "100%", 
            height: "100%", 
            border: "1px solid #817F75",
            backgroundColor: "transparent",
            position: "relative"
          }}>
            {/* קווים אנכיים ברירת מחדל */}
            {[
              "calc(50% - 270px)",
              "calc(50% - 230px)",
              "calc(50% - 190px)",
              "calc(50% - 150px)",
              "calc(50% - 20px)",
              "calc(50% + 20px)",
              "calc(50% + 150px)",
              "calc(50% + 190px)",
              "calc(50% + 230px)",
              "calc(50% + 270px)"
            ].map((left, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  left: left,
                  top: "0",
                  width: "1px",
                  height: "100%",
                  backgroundColor: "#817F75",
                  opacity: linesOpacity,
                  transition: "opacity 0.3s ease-out",
                }}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <main className="flex flex-col items-center justify-center mt-20">
      {/* מלבן פנימי דינמי - משתנה לפי המילה הנבחרת */}
      <div
        style={{
          width: "777px",
          height: "207px",
          marginTop: isLargeScreen ? "300px" : "213px",
          position: "relative",
        }}
      >
        {getInnerRectangleContent()}
      </div>
    </main>
  );
}

export default MainDisplay; 