import React from "react";

function BottomFlag() {
  return (
    <>
      {/* קו מפריד מעל SVG והטקסט */}
      <div
        style={{
          position: "absolute",
          width: "273px",
          height: "1px",
          right: "-31px",
          bottom: "130px",
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
            <rect x="1" y="1" width="20" height="21" fill="#9F090C"/>
            <rect x="21" y="1" width="19.6" height="21" fill="#04084A"/>
            <rect x="40.6" y="1" width="9.8" height="21" fill="#E3DCDC"/>
            <rect x="50.4" y="1" width="7.7" height="21" fill="#A3CEEB"/>
            <rect x="58.1" y="1" width="9.8" height="21" fill="#E3DCDC"/>
            <rect x="67.9" y="1" width="19.6" height="21" fill="#04084A"/>
            <rect x="87.5" y="1" width="20" height="21" fill="#9F090C"/>
            <rect x="0.5" y="0.5" width="107" height="22" stroke="#817F75"/>
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
          מלחמת ששת הימים
        </span>
      </div>
    </>
  );
}

export default BottomFlag; 