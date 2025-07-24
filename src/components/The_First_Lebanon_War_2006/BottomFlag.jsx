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
      <div className="absolute bottom-8 right-16 flex flex-col items-center gap-2">
        <svg
          width="108"
          height="23"
          viewBox="0 0 108 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.7">
            <rect x="1" y="1" width="21.3" height="21" fill="#9F090C"/>
            <rect x="22.3" y="1" width="5.1" height="21" fill="#E3DCDC"/>
            <rect x="27.4" y="1" width="10.7" height="21" fill="#04084A"/>
            <rect x="38.1" y="1" width="5.1" height="21" fill="#E3DCDC"/>
            <rect x="43.2" y="1" width="8.5" height="21" fill="#044929"/>
            <rect x="51.7" y="1" width="5.1" height="21" fill="#9F090C"/>
            <rect x="56.8" y="1" width="8.5" height="21" fill="#044929"/>
            <rect x="65.3" y="1" width="5.1" height="21" fill="#E3DCDC"/>
            <rect x="70.4" y="1" width="10.7" height="21" fill="#04084A"/>
            <rect x="81.1" y="1" width="5.1" height="21" fill="#E3DCDC"/>
            <rect x="86.2" y="1" width="21.3" height="21" fill="#9F090C"/>
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
          מלחמת לבנון הראשונה
        </span>
      </div>
    </>
  );
}

export default BottomFlag; 