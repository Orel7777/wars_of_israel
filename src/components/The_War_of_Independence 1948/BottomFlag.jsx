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
          right: "0px",
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
            <rect width="13.7387" height="23" fill="#04084A" />
            <rect x="13.7383" width="5.152" height="23" fill="#E3DCDC" />
            <rect x="18.8906" width="5.152" height="23" fill="#A3CEEB" />
            <rect x="24.043" width="5.152" height="23" fill="#E3DCDC" />
            <rect x="29.1953" width="21.896" height="23" fill="#04084A" />
            <rect x="51.0908" width="5.152" height="23" fill="#9F090C" />
            <rect x="56.2422" width="21.896" height="23" fill="#04084A" />
            <rect x="78.1377" width="5.152" height="23" fill="#E3DCDC" />
            <rect x="83.29" width="5.152" height="23" fill="#A3CEEB" />
            <rect x="88.4424" width="5.152" height="23" fill="#E3DCDC" />
            <rect x="93.5947" width="13.7387" height="23" fill="#04084A" />
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
          מלחמת העצמאות
        </span>
      </div>
    </>
  );
}

export default BottomFlag; 