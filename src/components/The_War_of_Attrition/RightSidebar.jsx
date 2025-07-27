import React from "react";

function RightSidebar() {
  // פונקציה ליצירת מלבן (קו עבה)
  const createRectangle = (key) => (
    <div
      key={key}
      style={{
        boxSizing: 'border-box',
        width: '22px',
        height: '5px',
        background: '#817F75',
        border: '1px solid #817F75',
      }}
    />
  );

  // פונקציה ליצירת קו רגיל (קו דק)
  const createLine = (key) => (
    <div
      key={key}
      style={{
        width: '22px',
        height: '0px',
        background: '#817F75',
        border: '1px solid #817F75',
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
        
        {/* קו מלבן */}
        {createRectangle('rect-6')}
        
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
    </div>
  );
}

export default RightSidebar; 