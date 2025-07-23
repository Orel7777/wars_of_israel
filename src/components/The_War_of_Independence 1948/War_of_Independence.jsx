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
          cx={on ? 34 : 11}
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
      <div className="w-full flex flex-row items-center justify-between pt-[101px] px-28 select-none">
        {/* כפתור בצד שמאל */}
        <ToggleButton />

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
              color: "#E3DCDC"
            }}
          >
            אותות
          </span>

          <span
            className="text-[#817F75] text-[15px] font-[400] leading-[106%] text-right"
            style={{ fontFamily: "80-kb" }}
          >
            השוואות
          </span>
          <span
            className="text-[#817F75] text-[15px] font-[400] leading-[106%] text-right"
            style={{ fontFamily: "80-kb" }}
          >
            ציר זמן
          </span>
          <span
            className="text-[#817F75] text-[15px] font-[400] leading-[106%] text-right"
            style={{ fontFamily: "80-kb" }}
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
    </div>
  );
}

export default WarOfIndependence;