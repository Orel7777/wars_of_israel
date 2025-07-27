import React from "react";

function RightSidebar() {
  // פונקציה ליצירת מלבן (קו עבה) בהתבסס על העיצוב מה-LeftSidebar
  const createRectangle = (key, isHighlighted = false) => (
    <div
      key={key}
      style={{
        width: "22px",
        height: "5px",
        borderWidth: "1px",
        transform: "rotate(0deg)",
        opacity: 1,
        backgroundColor: isHighlighted ? "#FFFFFF" : "#817F75",
        border: `1px solid ${isHighlighted ? "#FFFFFF" : "#817F75"}`,
      }}
    />
  );

  // פונקציה ליצירת קו רגיל (קו דק) בהתבסס על העיצוב מה-LeftSidebar
  const createLine = (key) => (
    <div
      key={key}
      style={{
        width: "22px",
        height: "0px",
        borderWidth: "1px",
        transform: "rotate(0deg)",
        opacity: 1,
        backgroundColor: "#817F75",
        border: "1px solid #817F75",
      }}
    />
  );

  // פונקציה ליצירת מספר קווים
  const createLines = (count, startKey) => {
    return Array.from({ length: count }, (_, index) => 
      createLine(`line-${startKey}-${index}`)
    );
  };

  return (
    <div
      className="absolute right-16"
      style={{ top: "50%", transform: "translateY(-50%)" }}
    >
      <div className="flex flex-col items-start gap-1">
        {/* קו ראשון - מלבן */}
        {createRectangle('rect-1')}
        
        {/* 7 קווים מתחת */}
        {createLines(7, 1)}
        
        {/* קו מלבן */}
        {createRectangle('rect-2')}
        
        {/* 10 קווים מתחת */}
        {createLines(10, 2)}
        
        {/* קו מלבן */}
        {createRectangle('rect-3')}
        
        {/* 2 קווים מתחת */}
        {createLines(2, 3)}
        
        {/* קו מלבן */}
        {createRectangle('rect-4')}
        
        {/* 2 קווים מתחת */}
        {createLines(2, 4)}
        
        {/* קו מלבן */}
        {createRectangle('rect-5')}
        
        {/* 8 קווים מתחת */}
        {createLines(8, 5)}
        
        {/* קו מלבן מודגש - מלחמת סיני 1956 */}
        {createRectangle('rect-6', true)}
        
        {/* 23 קווים מתחת */}
        {createLines(23, 6)}
        
        {/* קו מלבן */}
        {createRectangle('rect-7')}
        
        {/* 7 קווים מתחת */}
        {createLines(7, 7)}
        
        {/* קו מלבן */}
        {createRectangle('rect-8')}
        
        {/* קו רגיל */}
        {createLine('final-line')}
        
        {/* קו מלבן אחרון */}
        {createRectangle('rect-final')}
      </div>
      
      {/* הצגת השנה 1956 ליד המלבן המודגש */}
      <div 
        className="absolute text-white text-sm font-bold"
        style={{ 
          left: "-50px", 
          top: "50%", 
          transform: "translateY(-50%)",
          marginTop: "-2px"
        }}
      >
        1956
      </div>
    </div>
  );
}

export default RightSidebar; 