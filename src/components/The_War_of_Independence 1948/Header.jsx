import React from "react";
import { useNavigate } from "react-router-dom";
import ToggleButton from "./ToggleButton";

function Header() {
  const navigate = useNavigate();

  const handleSignalsClick = () => {
    navigate("/");
  };

  return (
    <div className="w-full flex flex-row items-start justify-between pt-[101px] px-28 select-none">
      {/* כפתור והטקסטים מתחתיו */}
      <div className="flex flex-col items-center gap-6">
        <ToggleButton />
      </div>

      {/* טקסט בצד ימין */}
      <div className="flex flex-row-reverse items-center justify-end gap-36">
        <div style={{ position: "relative", display: "inline-block" }}>
          {/* הטקסט הראשון (צללית) - בצבע בהיר יותר */}
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
              cursor: "pointer",
              position: "absolute",
              top: "0px",
              right: "-4px",
              width: "101.90471649169922px",
              height: "21px",
              display: "inline-block",
              zIndex: 1,
            }}
            className="hover:opacity-90 transition-opacity"
            onClick={handleSignalsClick}
          >
            אותות
          </span>
          
          {/* הטקסט השני (עיקרי) - בצבע כהה יותר */}
          <span
            style={{
              fontFamily: "80-kb",
              fontWeight: 400,
              fontSize: "30px",
              lineHeight: "106%",
              letterSpacing: "17%",
              textAlign: "right",
              opacity: 0.25,
              color: "#817F75",
              cursor: "pointer",
              display: "inline-block",
              width: "101.90471649169922px",
              height: "21px",
              position: "relative",
              zIndex: 2,
            }}
            className="hover:text-white transition-colors"
            onClick={handleSignalsClick}
          >
            אותות
          </span>
        </div>

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
  );
}

export default Header; 