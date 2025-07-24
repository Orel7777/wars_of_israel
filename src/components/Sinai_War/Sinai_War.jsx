import React, { useState } from "react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import "./animations.css";
import TimelineChart from "./TimelineChart";
import BottomFlag from "./BottomFlag";
import MainDisplay from "./MainDisplay";
import BackgroundLines from "./BackgroundLines";

function SinaiWar() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedWord, setSelectedWord] = useState(null);
  const [linesAnimation, setLinesAnimation] = useState(0); // 0 = למעלה, 1 = למטה
  const [showColoredRectangles, setShowColoredRectangles] = useState(false);
  
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

  const handleWordClick = (word) => {
    console.log("Word clicked:", word); // הדפסה לדיבוג
    setSelectedWord(word);
    
    // אם לוחצים על "החזית הנגדית", התחל אנימציה
    if (word === "החזית הנגדית") {
      console.log("Starting lines animation down!"); // הדפסה לדיבוג
      setLinesAnimation(1); // התחל אנימציה למטה
      setShowColoredRectangles(false); // איפוס המלבנים הצבעוניים
      
      // אחרי 5 שניות (כאשר הקווים נעלמו), הצג את המלבנים הצבעוניים
      setTimeout(() => {
        console.log("Showing colored rectangles!"); // הדפסה לדיבוג
        setShowColoredRectangles(true);
      }, 5000);
    } else {
      console.log("Starting lines animation up!"); // הדפסה לדיבוג
      setLinesAnimation(0); // החזר למעלה
      setShowColoredRectangles(false); // הסתר המלבנים הצבעוניים
    }
  };

  return (
    <div className="bg-[#262626] w-full h-screen overflow-hidden">
      <BackgroundLines />
      <Header />
      
      <MainDisplay 
        selectedWord={selectedWord}
        scrollY={scrollY}
        linesAnimation={linesAnimation}
        showColoredRectangles={showColoredRectangles}
        linesOpacity={linesOpacity}
        isLargeScreen={isLargeScreen}
      />

      <LeftSidebar 
        selectedWord={selectedWord}
        onWordClick={handleWordClick}
        rectangleSettings={rectangleSettings}
      />

      <TimelineChart isLargeScreen={isLargeScreen} />
      
      <BottomFlag />
    </div>
  );
}

export default SinaiWar; 