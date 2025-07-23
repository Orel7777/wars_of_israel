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
          <span className="text-[#817F75] text-[26px] font-normal tracking-[0.2em] cursor-pointer hover:text-white transition-colors">
            אותות
          </span>
          <span className="text-[#817F75] text-[15px] font-normal cursor-pointer hover:text-white transition-colors">
            השוואות
          </span>
          <span className="text-[#817F75] text-[15px] font-normal cursor-pointer hover:text-white transition-colors">
            ציר זמן
          </span>
          <span className="text-[#817F75] text-[15px] font-normal cursor-pointer hover:text-white transition-colors">
            מקורות
          </span>
        </div>
      </div>
      <main className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-white text-4xl font-bold mt-32">מלחמת העצמאות</h1>
      </main>
    </div>
  );
}

export default WarOfIndependence;