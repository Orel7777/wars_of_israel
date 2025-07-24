import React from "react";

function BackgroundLines() {
  return (
    <>
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
    </>
  );
}

export default BackgroundLines; 