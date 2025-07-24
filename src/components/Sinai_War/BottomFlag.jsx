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
            <rect x="1" y="1" width="26.5" height="21" fill="#E0981B"/>
            <rect x="27.5" y="1" width="9.4" height="21" fill="#04084A"/>
            <rect x="36.9" y="1" width="6.4" height="21" fill="#9F090C"/>
            <rect x="43.3" y="1" width="22.2" height="21" fill="#A3CEEB"/>
            <rect x="65.5" y="1" width="6.4" height="21" fill="#9F090C"/>
            <rect x="71.9" y="1" width="9.4" height="21" fill="#04084A"/>
            <rect x="81.3" y="1" width="26.5" height="21" fill="#E0981B"/>
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
          מלחמת סיני
        </span>
      </div>
    </>
  );
}

export default BottomFlag; 