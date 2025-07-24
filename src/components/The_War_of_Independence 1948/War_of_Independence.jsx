import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ToggleButton() {
  const [on, setOn] = useState(false);
  return (
    <div
      onClick={() => setOn((prev) => !prev)}
      className="cursor-pointer select-none"
    >
      <svg
        width="45"
        height="22"
        viewBox="0 0 45 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="45" height="22" rx="11" fill="#817F75" />
        <circle
          cx={on ? 11 : 34}
          cy="11"
          r="9"
          fill="#E3DCDC"
          style={{ transition: "all 0.3s" }}
        />
      </svg>
    </div>
  );
}

function WarOfIndependence() {
  const navigate = useNavigate();
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedWord, setSelectedWord] = useState(null);
  
  // הגדרות למיקום המלבן - תוכל לשנות את הערכים האלה
  const rectangleSettings = {
    gap: "2px", // המרחק בין המלבן לטקסט
    translateY: "3px", // הזזה אנכית של המלבן (שלילי = למעלה, חיובי = למטה)
  };

  // בדיקת גודל המסך בעת טעינת הקומפוננטה
  React.useEffect(() => {
    const checkScreenSize = () => {
      console.log("checkScreenSize called!"); // הדפסה חדשה
      const isLarge = window.innerWidth > 1200 && window.innerHeight > 991;
      console.log("Screen size check:", {
        width: window.innerWidth,
        height: window.innerHeight,
        isLargeScreen: isLarge,
      });
      setIsLargeScreen(isLarge);
    };

    console.log("useEffect running..."); // הדפסה חדשה
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // מעקב אחר גלילת גלגל העכבר
  React.useEffect(() => {
    const handleWheel = (event) => {
      console.log("Wheel detected:", event.deltaY); // להדפיס את כיוון הגלילה

      // נוסיף לערך הגלילה הוירטואלי בהתאם לכיוון הגלילה
      setScrollY((prev) => {
        const newValue = prev + event.deltaY * 0.5; // מכפילים ב-0.5 כדי שיהיה יותר חלק
        return Math.max(0, Math.min(300, newValue)); // מגבילים בין 0 ל-300
      });
    };

    // מוסיפים event listener לגלילת גלגל העכבר
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // חישוב שקיפות הקווים בהתאם לגלילה הוירטואלית
  const linesOpacity = Math.max(0, 1 - scrollY / 200);
  console.log("Virtual scroll:", scrollY, "Opacity:", linesOpacity); // להדפיס את הערכים

  const handleSignalsClick = () => {
    navigate("/");
  };

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

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
      case "החזית הנגדית":
        return (
          <div style={{ 
            width: "100%", 
            height: "100%", 
            border: "1px solid #817F75",
            backgroundColor: "transparent"
          }} />
        );
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
            {/* קבוצה שמאלית - 4 קווים */}
            <div
              style={{
                position: "absolute",
                left: "calc(50% - 270px)",
                top: "0",
                width: "1px",
                height: "100%",
                backgroundColor: "#817F75",
                opacity: linesOpacity,
                transition: "opacity 0.3s ease-out",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "calc(50% - 230px)",
                top: "0",
                width: "1px",
                height: "100%",
                backgroundColor: "#817F75",
                opacity: linesOpacity,
                transition: "opacity 0.3s ease-out",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "calc(50% - 190px)",
                top: "0",
                width: "1px",
                height: "100%",
                backgroundColor: "#817F75",
                opacity: linesOpacity,
                transition: "opacity 0.3s ease-out",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "calc(50% - 150px)",
                top: "0",
                width: "1px",
                height: "100%",
                backgroundColor: "#817F75",
                opacity: linesOpacity,
                transition: "opacity 0.3s ease-out",
              }}
            />

            {/* קבוצה אמצעית - 2 קווים */}
            <div
              style={{
                position: "absolute",
                left: "calc(50% - 20px)",
                top: "0",
                width: "1px",
                height: "100%",
                backgroundColor: "#817F75",
                opacity: linesOpacity,
                transition: "opacity 0.3s ease-out",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "calc(50% + 20px)",
                top: "0",
                width: "1px",
                height: "100%",
                backgroundColor: "#817F75",
                opacity: linesOpacity,
                transition: "opacity 0.3s ease-out",
              }}
            />

            {/* קבוצה ימנית - 4 קווים */}
            <div
              style={{
                position: "absolute",
                left: "calc(50% + 150px)",
                top: "0",
                width: "1px",
                height: "100%",
                backgroundColor: "#817F75",
                opacity: linesOpacity,
                transition: "opacity 0.3s ease-out",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "calc(50% + 190px)",
                top: "0",
                width: "1px",
                height: "100%",
                backgroundColor: "#817F75",
                opacity: linesOpacity,
                transition: "opacity 0.3s ease-out",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "calc(50% + 230px)",
                top: "0",
                width: "1px",
                height: "100%",
                backgroundColor: "#817F75",
                opacity: linesOpacity,
                transition: "opacity 0.3s ease-out",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "calc(50% + 270px)",
                top: "0",
                width: "1px",
                height: "100%",
                backgroundColor: "#817F75",
                opacity: linesOpacity,
                transition: "opacity 0.3s ease-out",
              }}
            />
          </div>
        );
    }
  };

  return (
    <div className="bg-[#262626] w-full h-screen overflow-hidden">
      {" "}
      {/* חזרתי לגובה רגיל ללא אפשרות גלילה */}
      {/* קו אופקי שמפריד בין הכותרת לבין החלק האמצעי - לאורך כל הרוחב */}
      <div
        style={{
          position: "absolute",
          width: "100vw", // כל רוחב המסך
          height: "1px",
          left: "0px",
          top: "165px", // שנה את הערך הזה כדי להזיז את הקו למעלה/למטה
          background: "#817F75",
        }}
      />
      {/* קו אנכי שמאלי - מפריד בין הכפתור לחלק האמצעי */}
      <div
        style={{
          position: "absolute",
          width: "1px",
          height: "100vh", // כל גובה המסך
          left: "calc(33.33% + -395px)", // שליש מהרוחב + פיקסלים - שנה את הערך 0px כדי להזיז שמאלה (-) או ימינה (+)
          top: "0px",
          background: "#817F75",
        }}
      />
      {/* קו אנכי ימני - מפריד בין החלק האמצעי למילה "אותות" */}
      <div
        style={{
          position: "absolute",
          width: "1px",
          height: "100vh", // כל גובה המסך
          left: "calc(66.66% + 390px)", // שני שלישים מהרוחב + פיקסלים - שנה את הערך 0px כדי להזיז שמאלה (-) או ימינה (+)
          top: "0px",
          background: "#817F75",
        }}
      />
      <div className="w-full flex flex-row items-start justify-between pt-[101px] px-28 select-none">
        {/* כפתור והטקסטים מתחתיו */}
        <div className="flex flex-col items-center gap-6">
        <ToggleButton />
        </div>

        {/* טקסט בצד ימין */}
        <div className="flex flex-row-reverse items-center justify-end gap-36">
          <span
            style={{
              fontFamily: "80-kb",
              fontWeight: 400,
              fontSize: "30px",
              lineHeight: "106%",
              letterSpacing: "17%",
              textAlign: "right",
              opacity: 0.79,
              color: "#E3DCDC",
              cursor: "pointer",
            }}
            className="hover:text-white transition-colors"
            onClick={handleSignalsClick}
          >
            אותות
          </span>

          <span
            className="text-[#817F75] text-[15px] font-[400] leading-[106%] text-right cursor-pointer hover:text-white transition-colors"
            style={{ fontFamily: "80-kb" }}
            onClick={() => console.log("השוואות clicked")}
          >
            השוואות
          </span>
          <span
            className="text-[#817F75] text-[15px] font-[400] leading-[106%] text-right cursor-pointer hover:text-white transition-colors"
            style={{ fontFamily: "80-kb" }}
            onClick={() => console.log("ציר זמן clicked")}
          >
            ציר זמן
          </span>
          <span
            className="text-[#817F75] text-[15px] font-[400] leading-[106%] text-right cursor-pointer hover:text-white transition-colors"
            style={{ fontFamily: "80-kb" }}
            onClick={() => console.log("מקורות clicked")}
          >
            מקורות
          </span>
        </div>
      </div>
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
      {/* המילים בצד שמאלי - מיושרות לשמאל */}
      <div
        className="absolute left-16"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <div className="flex flex-col items-start gap-6">
          <div style={{ display: "flex", alignItems: "center", gap: rectangleSettings.gap, position: "relative" }}>
            {/* מלבן שמאלי - מופיע רק כשהמילה נבחרת */}
            {selectedWord === "זמן הלחימה" && (
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
                fontFamily: selectedWord === "זמן הלחימה" ? "80-kb" : "80-kb",
                fontWeight: 400,
                fontSize: selectedWord === "זמן הלחימה" ? "18px" : "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "left",
                opacity: selectedWord === "זמן הלחימה" ? 1 : 0.6,
                width: selectedWord === "זמן הלחימה" ? "109px" : "120px",
                height: selectedWord === "זמן הלחימה" ? "11px" : "11px",
                whiteSpace: "nowrap",
                color: selectedWord === "זמן הלחימה" ? "#D9D9D9" : "#817F75",
                marginLeft: selectedWord === "זמן הלחימה" ? "8px" : "0px",
                transition: "all 0.3s ease",
              }}
              onClick={() => handleWordClick("זמן הלחימה")}
            >
              זמן הלחימה
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: rectangleSettings.gap, position: "relative" }}>
            {/* מלבן שמאלי - מופיע רק כשהמילה נבחרת */}
            {selectedWord === "החזית הנגדית" && (
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
                fontFamily: selectedWord === "החזית הנגדית" ? "80-kb" : "80-kb",
                fontWeight: 400,
                fontSize: selectedWord === "החזית הנגדית" ? "18px" : "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "left",
                opacity: selectedWord === "החזית הנגדית" ? 1 : 0.6,
                width: selectedWord === "החזית הנגדית" ? "109px" : "120px",
                height: selectedWord === "החזית הנגדית" ? "11px" : "11px",
                whiteSpace: "nowrap",
                color: selectedWord === "החזית הנגדית" ? "#D9D9D9" : "#817F75",
                marginLeft: selectedWord === "החזית הנגדית" ? "8px" : "0px",
                transition: "all 0.3s ease",
              }}
              onClick={() => handleWordClick("החזית הנגדית")}
            >
              החזית הנגדית
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: rectangleSettings.gap, position: "relative" }}>
            {/* מלבן שמאלי - מופיע רק כשהמילה נבחרת */}
            {selectedWord === "נפגעים" && (
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
                fontFamily: selectedWord === "נפגעים" ? "80-kb" : "80-kb",
                fontWeight: 400,
                fontSize: selectedWord === "נפגעים" ? "18px" : "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "left",
                opacity: selectedWord === "נפגעים" ? 1 : 0.6,
                width: selectedWord === "נפגעים" ? "109px" : "120px",
                height: selectedWord === "נפגעים" ? "11px" : "11px",
                whiteSpace: "nowrap",
                color: selectedWord === "נפגעים" ? "#D9D9D9" : "#817F75",
                marginLeft: selectedWord === "נפגעים" ? "8px" : "0px",
                transition: "all 0.3s ease",
              }}
              onClick={() => handleWordClick("נפגעים")}
            >
              נפגעים
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: rectangleSettings.gap, position: "relative" }}>
            {/* מלבן שמאלי - מופיע רק כשהמילה נבחרת */}
            {selectedWord === "אות המערכה" && (
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
                fontFamily: selectedWord === "אות המערכה" ? "80-kb" : "80-kb",
                fontWeight: 400,
                fontSize: selectedWord === "אות המערכה" ? "18px" : "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "left",
                opacity: selectedWord === "אות המערכה" ? 1 : 0.6,
                width: selectedWord === "אות המערכה" ? "109px" : "120px",
                height: selectedWord === "אות המערכה" ? "11px" : "11px",
                whiteSpace: "nowrap",
                color: selectedWord === "אות המערכה" ? "#D9D9D9" : "#817F75",
                marginLeft: selectedWord === "אות המערכה" ? "8px" : "0px",
                transition: "all 0.3s ease",
              }}
              onClick={() => handleWordClick("אות המערכה")}
            >
              אות המערכה
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: rectangleSettings.gap, position: "relative" }}>
            {/* מלבן שמאלי - מופיע רק כשהמילה נבחרת */}
            {selectedWord === "סיפורי מלחמה" && (
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
                fontFamily: selectedWord === "סיפורי מלחמה" ? "80-kb" : "80-kb",
                fontWeight: 400,
                fontSize: selectedWord === "סיפורי מלחמה" ? "18px" : "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "left",
                opacity: selectedWord === "סיפורי מלחמה" ? 1 : 0.6,
                width: selectedWord === "סיפורי מלחמה" ? "109px" : "120px",
                height: selectedWord === "סיפורי מלחמה" ? "11px" : "11px",
                whiteSpace: "nowrap",
                color: selectedWord === "סיפורי מלחמה" ? "#D9D9D9" : "#817F75",
                marginLeft: selectedWord === "סיפורי מלחמה" ? "8px" : "0px",
                transition: "all 0.3s ease",
              }}
              onClick={() => handleWordClick("סיפורי מלחמה")}
            >
              סיפורי מלחמה
            </span>
          </div>
        </div>
      </div>
      {/* טור מתחת למילה אותות - עטוף בדיב אחד */}
      {isLargeScreen ? (
        <div
          className="absolute"
          style={{
            right: "calc(50% - 820px)", // מיקום למסכים גדולים
            top: "300px",
          }}
        >
          {/* שורה עליונה עם המספר 1948 והריבוע החדש */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            {/* המספר 1948 */}
            <span
              style={{
                fontFamily: "80-kb",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#D9D9D9",
                opacity: 1,
                width: "43px",
                height: "11px",
                whiteSpace: "nowrap",
              }}
            >
              1948
            </span>
            {/* ריבוע חדש לפי הדרישות */}
            <div
              style={{
                width: "38px",
                height: "5px",
                backgroundColor: "#D9D9D9",
                border: "1px solid #D9D9D9",
                opacity: 1,
              }}
            />
          </div>

          {/* כל העמוד מיושר לפי הריבוע - יישור לימין */}
          <div style={{ marginLeft: "51px", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

          {/* 6 פסים עם מרווחים */}
          <div
            style={{
              width: "22px",
              height: "1px",
              backgroundColor: "#817F75",
              border: "1px solid #44433E",
              marginBottom: "6px",
            }}
          />
          <div
            style={{
              width: "22px",
              height: "1px",
              backgroundColor: "#817F75",
              border: "1px solid #44433E",
              marginBottom: "6px",
            }}
          />
          <div
            style={{
              width: "22px",
              height: "1px",
              backgroundColor: "#817F75",
              border: "1px solid #44433E",
              marginBottom: "6px",
            }}
          />
          <div
            style={{
              width: "22px",
              height: "1px",
              backgroundColor: "#817F75",
              border: "1px solid #44433E",
              marginBottom: "6px",
            }}
          />
          <div
            style={{
              width: "22px",
              height: "1px",
              backgroundColor: "#817F75",
              border: "1px solid #44433E",
              marginBottom: "6px",
            }}
          />
          <div
            style={{
              width: "22px",
              height: "1px",
              backgroundColor: "#817F75",
              border: "1px solid #44433E",
              marginBottom: "8px",
            }}
          />

          {/* ריבוע קטן */}
          <div
            style={{
              width: "22px",
              height: "5px",
              backgroundColor: "#817F75",
              marginBottom: "8px",
            }}
          />

          {/* 15 פסים - הגדלתי מ-10 ל-15 */}
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={`line1-${i}`}
              style={{
                width: "22px",
                height: "1px",
                backgroundColor: "#817F75",
                border: "1px solid #44433E",
                marginBottom: "6px",
              }}
            />
          ))}

          {/* ריבוע */}
          <div
            style={{
              width: "22px",
              height: "5px",
              backgroundColor: "#817F75",
              marginBottom: "8px",
            }}
          />

          {/* ריבוע גבוה */}
          <div
            style={{
              width: "22px",
              height: "28px",
              backgroundColor: "#817F75",
              marginBottom: "8px",
            }}
          />

          {/* 2 פסים */}
          <div
            style={{
              width: "22px",
              height: "1px",
              backgroundColor: "#817F75",
              border: "1px solid #44433E",
              marginBottom: "6px",
            }}
          />
          <div
            style={{
              width: "22px",
              height: "1px",
              backgroundColor: "#817F75",
              border: "1px solid #44433E",
              marginBottom: "8px",
            }}
          />

          {/* ריבוע */}
          <div
            style={{
              width: "22px",
              height: "5px",
              backgroundColor: "#817F75",
              marginBottom: "8px",
            }}
          />

          {/* 10 פסים - הגדלתי מ-6 ל-10 */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`line2-${i}`}
              style={{
                width: "22px",
                height: "1px",
                backgroundColor: "#817F75",
                border: "1px solid #44433E",
                marginBottom: "6px",
              }}
            />
          ))}

          {/* ריבוע */}
          <div
            style={{
              width: "22px",
              height: "5px",
              backgroundColor: "#817F75",
              marginBottom: "8px",
            }}
          />

          {/* 30 פסים - הגדלתי מ-23 ל-30 */}
          {Array.from({ length: 24 }, (_, i) => (
            <div
              key={`line3-${i}`}
              style={{
                width: "22px",
                height: "1px",
                backgroundColor: "#817F75",
                border: "1px solid #44433E",
                marginBottom: "4px",
              }}
            />
          ))}

          {/* ריבוע */}
          <div
            style={{
              width: "22px",
              height: "5px",
              backgroundColor: "#817F75",
              marginBottom: "8px",
            }}
          />

          {/* 12 פסים - הגדלתי מ-7 ל-12 */}
          {Array.from({ length: 7 }, (_, i) => (
            <div
              key={`line4-${i}`}
              style={{
                width: "22px",
                height: "1px",
                backgroundColor: "#817F75",
                border: "1px solid #44433E",
                marginBottom: "6px",
              }}
            />
          ))}

          {/* ריבוע בינוני */}
          <div
            style={{
              width: "22px",
              height: "18px",
              backgroundColor: "#817F75",
              marginBottom: "8px",
            }}
          />

          {/* ריבוע קטן תחתון */}
          <div
            style={{ width: "22px", height: "4px", backgroundColor: "#817F75" }}
          />
          </div>
        </div>
      ) : (
        <div
          className="absolute"
          style={{
            right: "calc(50% - 820px)", // מיקום למסכים קטנים
            top: "200px",
          }}
        >
          {/* שורה עליונה עם המספר 1948 והריבוע החדש */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            {/* המספר 1948 */}
            <span
              style={{
                fontFamily: "80-kb",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#D9D9D9",
                opacity: 1,
                width: "43px",
                height: "11px",
                whiteSpace: "nowrap",
              }}
            >
              1948
            </span>
            {/* ריבוע חדש לפי הדרישות */}
            <div
              style={{
                width: "38px",
                height: "5px",
                backgroundColor: "#D9D9D9",
                border: "1px solid #D9D9D9",
                opacity: 1,
              }}
            />
          </div>

          {/* כל העמוד מיושר לפי הריבוע - יישור לימין */}
          <div style={{ marginLeft: "51px", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

          {/* 6 פסים עם מרווחים */}
          <div
            style={{
              width: "22px",
              height: "1px",
              backgroundColor: "#817F75",
              border: "1px solid #44433E",
              marginBottom: "6px",
            }}
          />
          <div
            style={{
              width: "22px",
              height: "1px",
              backgroundColor: "#817F75",
              border: "1px solid #44433E",
              marginBottom: "6px",
            }}
          />
          <div
            style={{
              width: "22px",
              height: "1px",
              backgroundColor: "#817F75",
              border: "1px solid #44433E",
              marginBottom: "6px",
            }}
          />
          <div
            style={{
              width: "22px",
              height: "1px",
              backgroundColor: "#817F75",
              border: "1px solid #44433E",
              marginBottom: "6px",
            }}
          />
          <div
            style={{
              width: "22px",
              height: "1px",
              backgroundColor: "#817F75",
              border: "1px solid #44433E",
              marginBottom: "6px",
            }}
          />
          <div
            style={{
              width: "22px",
              height: "1px",
              backgroundColor: "#817F75",
              border: "1px solid #44433E",
              marginBottom: "8px",
            }}
          />

          {/* ריבוע קטן */}
          <div
            style={{
              width: "22px",
              height: "5px",
              backgroundColor: "#817F75",
              marginBottom: "8px",
            }}
          />

          {/* 15 פסים - הגדלתי מ-10 ל-15 */}
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={`line1-small-${i}`}
              style={{
                width: "22px",
                height: "1px",
                backgroundColor: "#817F75",
                border: "1px solid #44433E",
                marginBottom: "6px",
              }}
            />
          ))}

          {/* ריבוע */}
          <div
            style={{
              width: "22px",
              height: "5px",
              backgroundColor: "#817F75",
              marginBottom: "8px",
            }}
          />

          {/* ריבוע גבוה */}
          <div
            style={{
              width: "22px",
              height: "28px",
              backgroundColor: "#817F75",
              marginBottom: "8px",
            }}
          />

          {/* 2 פסים */}
          <div
            style={{
              width: "22px",
              height: "1px",
              backgroundColor: "#817F75",
              border: "1px solid #44433E",
              marginBottom: "6px",
            }}
          />
          <div
            style={{
              width: "22px",
              height: "1px",
              backgroundColor: "#817F75",
              border: "1px solid #44433E",
              marginBottom: "8px",
            }}
          />

          {/* ריבוע */}
          <div
            style={{
              width: "22px",
              height: "5px",
              backgroundColor: "#817F75",
              marginBottom: "8px",
            }}
          />

          {/* 10 פסים - הגדלתי מ-6 ל-10 */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`line2-small-${i}`}
              style={{
                width: "22px",
                height: "1px",
                backgroundColor: "#817F75",
                border: "1px solid #44433E",
                marginBottom: "6px",
              }}
            />
          ))}

          {/* ריבוע */}
          <div
            style={{
              width: "22px",
              height: "5px",
              backgroundColor: "#817F75",
              marginBottom: "8px",
            }}
          />

          {/* 30 פסים - הגדלתי מ-23 ל-30 */}
          {Array.from({ length: 24 }, (_, i) => (
            <div
              key={`line3-small-${i}`}
              style={{
                width: "22px",
                height: "1px",
                backgroundColor: "#817F75",
                border: "1px solid #44433E",
                marginBottom: "4px",
              }}
            />
          ))}

          {/* ריבוע */}
          <div
            style={{
              width: "22px",
              height: "5px",
              backgroundColor: "#817F75",
              marginBottom: "8px",
            }}
          />

          {/* 12 פסים - הגדלתי מ-7 ל-12 */}
          {Array.from({ length: 7 }, (_, i) => (
            <div
              key={`line4-small-${i}`}
              style={{
                width: "22px",
                height: "1px",
                backgroundColor: "#817F75",
                border: "1px solid #44433E",
                marginBottom: "6px",
              }}
            />
          ))}

          {/* ריבוע בינוני */}
          <div
            style={{
              width: "22px",
              height: "18px",
              backgroundColor: "#817F75",
              marginBottom: "8px",
            }}
          />

          {/* ריבוע קטן תחתון */}
          <div
            style={{ width: "22px", height: "4px", backgroundColor: "#817F75" }}
          />
          </div>
        </div>
      )}
      {/* קו מפריד מעל SVG והטקסט */}
      <div
        style={{
          position: "absolute",
          width: "273px",
          height: "1px",
          right: "0px", // מיקום בצד ימין - שנה את הערך הזה כדי להזיז שמאלה/ימינה
          bottom: "130px", // מיקום מעל ה-SVG - שנה את הערך הזה כדי להזיז למעלה/למטה
          background: "#817F75",
        }}
      />
      {/* SVG וטקסט בצד ימין למטה מתחת לעמוד */}
      <div className="absolute bottom-8 right-20 flex flex-col items-center gap-2">
        <svg
          width="108"
          height="23"
          viewBox="0 0 108 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.7">
            <rect width="13.7387" height="23" fill="#04084A" />
            <rect x="13.7383" width="5.152" height="23" fill="#E3DCDC" />
            <rect x="18.8906" width="5.152" height="23" fill="#A3CEEB" />
            <rect x="24.043" width="5.152" height="23" fill="#E3DCDC" />
            <rect x="29.1953" width="21.896" height="23" fill="#04084A" />
            <rect x="51.0908" width="5.152" height="23" fill="#9F090C" />
            <rect x="56.2422" width="21.896" height="23" fill="#04084A" />
            <rect x="78.1377" width="5.152" height="23" fill="#E3DCDC" />
            <rect x="83.29" width="5.152" height="23" fill="#A3CEEB" />
            <rect x="88.4424" width="5.152" height="23" fill="#E3DCDC" />
            <rect x="93.5947" width="13.7387" height="23" fill="#04084A" />
          </g>
        </svg>

        <span
          style={{
            fontFamily: "80-kb",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "16px",
            color: "#817F75",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          מלחמת העצמאות
        </span>
      </div>
    </div>
  );
}

export default WarOfIndependence;
