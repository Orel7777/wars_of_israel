import React, { useState } from "react";

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
  return (
    <div className="bg-[#262626] w-full h-full min-h-screen">
      <div className="w-full flex flex-row items-start justify-between pt-[101px] px-28 select-none">
        {/* כפתור והטקסטים מתחתיו */}
        <div className="flex flex-col items-center gap-6">
          <ToggleButton />
          <div className="flex flex-col items-center gap-6 mt-8">
            <span
              className="text-[#817F75] cursor-pointer hover:text-white transition-colors"
              style={{
                fontFamily: "80-kb",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                opacity: 1,
                width: "82px",
                height: "11px"
              }}
              onClick={() => console.log("משך המלחמה clicked")}
            >
              משך המלחמה
            </span>
            
            <span
              className="text-[#817F75] cursor-pointer hover:text-white transition-colors"
              style={{
                fontFamily: "80-kb",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                opacity: 1,
                width: "85px",
                height: "11px"
              }}
              onClick={() => console.log("חזית clicked")}
            >
              חזית
            </span>
            
            <span
              className="text-[#817F75] cursor-pointer hover:text-white transition-colors"
              style={{
                fontFamily: "80-kb",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                opacity: 1,
                width: "85px",
                height: "11px"
              }}
              onClick={() => console.log("נפגעים clicked")}
            >
              נפגעים
            </span>
            
            <span
              className="text-[#817F75] cursor-pointer hover:text-white transition-colors"
              style={{
                fontFamily: "80-kb",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                opacity: 1,
                width: "84px",
                height: "11px"
              }}
              onClick={() => console.log("אות המערכה clicked")}
            >
              אות המערכה
            </span>
          </div>
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
              cursor: "pointer"
            }}
            className="hover:text-white transition-colors"
           
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
        <h1 
          style={{
            fontFamily: '80-kb',
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '106%',
            letterSpacing: '17%',
            textAlign: 'center',
            opacity: 0.79,
            color: '#ffffff',
            marginTop: '128px'
          }}
        >
          מלחמת העצמאות
        </h1>
      </main>

      {/* SVG וטקסט בצד שמאל למטה */}
      <div className="absolute bottom-24 left-28 flex items-center gap-4">
        <svg width="108" height="23" viewBox="0 0 108 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.7">
            <rect width="13.7387" height="23" fill="#04084A"/>
            <rect x="13.7383" width="5.152" height="23" fill="#E3DCDC"/>
            <rect x="18.8906" width="5.152" height="23" fill="#A3CEEB"/>
            <rect x="24.043" width="5.152" height="23" fill="#E3DCDC"/>
            <rect x="29.1953" width="21.896" height="23" fill="#04084A"/>
            <rect x="51.0908" width="5.152" height="23" fill="#9F090C"/>
            <rect x="56.2422" width="21.896" height="23" fill="#04084A"/>
            <rect x="78.1377" width="5.152" height="23" fill="#E3DCDC"/>
            <rect x="83.29" width="5.152" height="23" fill="#A3CEEB"/>
            <rect x="88.4424" width="5.152" height="23" fill="#E3DCDC"/>
            <rect x="93.5947" width="13.7387" height="23" fill="#04084A"/>
          </g>
        </svg>
        
        <span
          style={{
            fontFamily: '80-kb',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '16px',
            color: '#817F75',
            width: '114px',
            height: '12px'
          }}
        >
          מלחמת העצמאות
        </span>
      </div>
    </div>
  );
}

export default WarOfIndependence;