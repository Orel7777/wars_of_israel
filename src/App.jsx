import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import WarOfIndependence from "./components/The_War_of_Independence 1948/War_of_Independence";
import SecondLebanonWar from "./components/The_Second_Lebanon_War_2006/Second_Lebanon_War";
import FirstLebanonWar from "./components/The_First_Lebanon_War_2006/First_Lebanon_War";
import SixDayWar from "./components/The Six-Day_War/Six_Day_War";
import SinaiWar from "./components/Sinai_War/Sinai_War";
import ProtectiveEdgeWar from "./components/Protective_Edge_War/Protective_Edge_War";
import WarOfAttrition from "./components/The_War_of_Attrition/War_of_Attrition";
import YomKippurWar from "./components/Yom_Kippur_War/Yom_Kippur_War";

function ToggleButton() {
  const [on, setOn] = useState(false);
  return (
    <div
      onClick={() => setOn((prev) => !prev)}
      className="cursor-pointer select-none"
    >
      <svg
        width="52"
        height="26"
        viewBox="0 0 52 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="52" height="26" rx="13" fill="transparent" stroke="#817F75" strokeWidth="1" />
        <circle
          cx={on ? 39 : 13}
          cy="13"
          r="9"
          fill="#817F75"
          stroke="#817F75"
          strokeWidth="1"
          style={{ transition: "all 0.3s" }}
        />
      </svg>
    </div>
  );
}

function RibbonLeft() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/independence");
  };

  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={handleClick}>
      <svg
        width="282"
        height="62"
        viewBox="0 0 282 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="35.84" height="60" fill="#04084A" />
        <rect x="36.84" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="50.28" y="1" width="13.44" height="60" fill="#A3CEEB" />
        <rect x="63.72" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="77.16" y="1" width="57.12" height="60" fill="#04084A" />
        <rect x="134.28" y="1" width="13.44" height="60" fill="#9F090C" />
        <rect x="147.72" y="1" width="57.12" height="60" fill="#04084A" />
        <rect x="204.84" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="218.28" y="1" width="13.44" height="60" fill="#A3CEEB" />
        <rect x="231.72" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="245.16" y="1" width="35.84" height="60" fill="#04084A" />
        <rect x="0.5" y="0.5" width="281" height="61" stroke="#817F75" />
      </svg>
    </div>
  );
}

function RibbonCenter() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sinai");
  };

  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={handleClick}>
      <svg
        width="282"
        height="62"
        viewBox="0 0 282 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="69.44" height="60" fill="#E0981B" />
        <rect x="70.44" y="1" width="24.64" height="60" fill="#04084A" />
        <rect x="95.08" y="1" width="16.8" height="60" fill="#9F090C" />
        <rect x="111.88" y="1" width="58.24" height="60" fill="#A3CEEB" />
        <rect x="170.12" y="1" width="16.8" height="60" fill="#9F090C" />
        <rect x="186.92" y="1" width="24.64" height="60" fill="#04084A" />
        <rect x="211.56" y="1" width="69.44" height="60" fill="#E0981B" />
        <rect x="0.5" y="0.5" width="281" height="61" stroke="#817F75" />
      </svg>
    </div>
  );
}

function RibbonRight() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sixday");
  };

  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={handleClick}>
      <svg
        width="282"
        height="62"
        viewBox="0 0 282 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="52.64" height="60" fill="#9F090C" />
        <rect x="53.6399" y="1" width="51.52" height="60" fill="#04084A" />
        <rect x="105.16" y="1" width="25.76" height="60" fill="#E3DCDC" />
        <rect x="130.92" y="1" width="20.16" height="60" fill="#A3CEEB" />
        <rect x="151.08" y="1" width="25.76" height="60" fill="#E3DCDC" />
        <rect x="176.84" y="1" width="51.52" height="60" fill="#04084A" />
        <rect x="228.36" y="1" width="52.64" height="60" fill="#9F090C" />
        <rect x="0.5" y="0.5" width="281" height="61" stroke="#817F75" />
      </svg>
    </div>
  );
}

function SecondRowLeft() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/attrition");
  };

  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={handleClick}>
      <svg
        width="282"
        height="62"
        viewBox="0 0 282 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="35.84" height="60" fill="#E0981B" />
        <rect
          x="21.1602"
          y="5.83871"
          width="1.93548"
          height="5.6"
          transform="rotate(90 21.1602 5.83871)"
          fill="#E3DCDC"
        />
        <rect
          x="21.1602"
          y="22.2903"
          width="1.93548"
          height="5.6"
          transform="rotate(90 21.1602 22.2903)"
          fill="#E3DCDC"
        />
        <rect
          x="21.1602"
          y="37.7742"
          width="1.93548"
          height="5.6"
          transform="rotate(90 21.1602 37.7742)"
          fill="#E3DCDC"
        />
        <rect
          x="21.1602"
          y="53.2581"
          width="1.93548"
          height="5.6"
          transform="rotate(90 21.1602 53.2581)"
          fill="#E3DCDC"
        />
        <rect
          x="30.1201"
          y="13.5806"
          width="1.93548"
          height="5.6"
          transform="rotate(90 30.1201 13.5806)"
          fill="#E3DCDC"
        />
        <rect
          x="30.1201"
          y="30.0323"
          width="1.93548"
          height="5.6"
          transform="rotate(90 30.1201 30.0323)"
          fill="#E3DCDC"
        />
        <rect
          x="30.1201"
          y="45.5161"
          width="1.93548"
          height="5.6"
          transform="rotate(90 30.1201 45.5161)"
          fill="#E3DCDC"
        />
        <rect
          x="12.2002"
          y="13.5806"
          width="1.93548"
          height="5.6"
          transform="rotate(90 12.2002 13.5806)"
          fill="#E3DCDC"
        />
        <rect
          x="12.2002"
          y="30.0323"
          width="1.93548"
          height="5.6"
          transform="rotate(90 12.2002 30.0323)"
          fill="#E3DCDC"
        />
        <rect
          x="12.2002"
          y="45.5161"
          width="1.93548"
          height="5.6"
          transform="rotate(90 12.2002 45.5161)"
          fill="#E3DCDC"
        />
        <rect x="36.84" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="50.28" y="1" width="13.44" height="60" fill="#A3CEEB" />
        <rect x="63.72" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="77.16" y="1" width="57.12" height="60" fill="#E0981B" />
        <rect x="134.28" y="1" width="13.44" height="60" fill="#9F090C" />
        <rect x="147.72" y="1" width="57.12" height="60" fill="#E0981B" />
        <rect x="204.84" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="218.28" y="1" width="13.44" height="60" fill="#A3CEEB" />
        <rect x="231.72" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="245.16" y="1" width="35.84" height="60" fill="#E0981B" />
        <rect
          x="165.64"
          y="5.83871"
          width="1.93548"
          height="5.6"
          transform="rotate(90 165.64 5.83871)"
          fill="#E3DCDC"
        />
        <rect
          x="107.4"
          y="5.83871"
          width="1.93548"
          height="5.6"
          transform="rotate(90 107.4 5.83871)"
          fill="#E3DCDC"
        />
        <rect
          x="107.4"
          y="22.2903"
          width="1.93548"
          height="5.6"
          transform="rotate(90 107.4 22.2903)"
          fill="#E3DCDC"
        />
        <rect
          x="107.4"
          y="37.7742"
          width="1.93548"
          height="5.6"
          transform="rotate(90 107.4 37.7742)"
          fill="#E3DCDC"
        />
        <rect
          x="107.4"
          y="53.2581"
          width="1.93548"
          height="5.6"
          transform="rotate(90 107.4 53.2581)"
          fill="#E3DCDC"
        />
        <rect
          x="116.36"
          y="13.5806"
          width="1.93548"
          height="5.6"
          transform="rotate(90 116.36 13.5806)"
          fill="#E3DCDC"
        />
        <rect
          x="116.36"
          y="30.0323"
          width="1.93548"
          height="5.6"
          transform="rotate(90 116.36 30.0323)"
          fill="#E3DCDC"
        />
        <rect
          x="116.36"
          y="45.5161"
          width="1.93548"
          height="5.6"
          transform="rotate(90 116.36 45.5161)"
          fill="#E3DCDC"
        />
        <rect
          x="98.4399"
          y="13.5806"
          width="1.93548"
          height="5.6"
          transform="rotate(90 98.4399 13.5806)"
          fill="#E3DCDC"
        />
        <rect
          x="98.4399"
          y="30.0323"
          width="1.93548"
          height="5.6"
          transform="rotate(90 98.4399 30.0323)"
          fill="#E3DCDC"
        />
        <rect
          x="98.4399"
          y="45.5161"
          width="1.93548"
          height="5.6"
          transform="rotate(90 98.4399 45.5161)"
          fill="#E3DCDC"
        />
        <rect
          x="183.56"
          y="5.83871"
          width="1.93548"
          height="5.6"
          transform="rotate(90 183.56 5.83871)"
          fill="#E3DCDC"
        />
        <rect
          x="173.48"
          y="13.5806"
          width="1.93548"
          height="5.6"
          transform="rotate(90 173.48 13.5806)"
          fill="#E3DCDC"
        />
        <rect
          x="191.4"
          y="13.5806"
          width="1.93548"
          height="5.6"
          transform="rotate(90 191.4 13.5806)"
          fill="#E3DCDC"
        />
        <rect
          x="183.56"
          y="22.2903"
          width="1.93548"
          height="5.6"
          transform="rotate(90 183.56 22.2903)"
          fill="#E3DCDC"
        />
        <rect
          x="191.4"
          y="30.0323"
          width="1.93548"
          height="5.6"
          transform="rotate(90 191.4 30.0323)"
          fill="#E3DCDC"
        />
        <rect
          x="183.56"
          y="37.7742"
          width="1.93548"
          height="5.6"
          transform="rotate(90 183.56 37.7742)"
          fill="#E3DCDC"
        />
        <rect
          x="191.4"
          y="45.5161"
          width="1.93548"
          height="5.6"
          transform="rotate(90 191.4 45.5161)"
          fill="#E3DCDC"
        />
        <rect
          x="183.56"
          y="53.2581"
          width="1.93548"
          height="5.6"
          transform="rotate(90 183.56 53.2581)"
          fill="#E3DCDC"
        />
        <rect
          x="165.64"
          y="22.2903"
          width="1.93548"
          height="5.6"
          transform="rotate(90 165.64 22.2903)"
          fill="#E3DCDC"
        />
        <rect
          x="173.48"
          y="30.0323"
          width="1.93548"
          height="5.6"
          transform="rotate(90 173.48 30.0323)"
          fill="#E3DCDC"
        />
        <rect
          x="165.64"
          y="37.7742"
          width="1.93548"
          height="5.6"
          transform="rotate(90 165.64 37.7742)"
          fill="#E3DCDC"
        />
        <rect
          x="173.48"
          y="45.5161"
          width="1.93548"
          height="5.6"
          transform="rotate(90 173.48 45.5161)"
          fill="#E3DCDC"
        />
        <rect
          x="165.64"
          y="53.2581"
          width="1.93548"
          height="5.6"
          transform="rotate(90 165.64 53.2581)"
          fill="#E3DCDC"
        />
        <rect
          x="257.48"
          y="5.83871"
          width="1.93548"
          height="5.6"
          transform="rotate(90 257.48 5.83871)"
          fill="#E3DCDC"
        />
        <rect
          x="275.4"
          y="5.83871"
          width="1.93548"
          height="5.6"
          transform="rotate(90 275.4 5.83871)"
          fill="#E3DCDC"
        />
        <rect
          x="265.32"
          y="13.5806"
          width="1.93548"
          height="5.6"
          transform="rotate(90 265.32 13.5806)"
          fill="#E3DCDC"
        />
        <rect
          x="275.4"
          y="22.2903"
          width="1.93548"
          height="5.6"
          transform="rotate(90 275.4 22.2903)"
          fill="#E3DCDC"
        />
        <rect
          x="275.4"
          y="37.7742"
          width="1.93548"
          height="5.6"
          transform="rotate(90 275.4 37.7742)"
          fill="#E3DCDC"
        />
        <rect
          x="275.4"
          y="53.2581"
          width="1.93548"
          height="5.6"
          transform="rotate(90 275.4 53.2581)"
          fill="#E3DCDC"
        />
        <rect
          x="257.48"
          y="22.2903"
          width="1.93548"
          height="5.6"
          transform="rotate(90 257.48 22.2903)"
          fill="#E3DCDC"
        />
        <rect
          x="265.32"
          y="30.0323"
          width="1.93548"
          height="5.6"
          transform="rotate(90 265.32 30.0323)"
          fill="#E3DCDC"
        />
        <rect
          x="257.48"
          y="37.7742"
          width="1.93548"
          height="5.6"
          transform="rotate(90 257.48 37.7742)"
          fill="#E3DCDC"
        />
        <rect
          x="265.32"
          y="45.5161"
          width="1.93548"
          height="5.6"
          transform="rotate(90 265.32 45.5161)"
          fill="#E3DCDC"
        />
        <rect
          x="257.48"
          y="53.2581"
          width="1.93548"
          height="5.6"
          transform="rotate(90 257.48 53.2581)"
          fill="#E3DCDC"
        />
        <rect x="0.5" y="0.5" width="281" height="61" stroke="#817F75" />
      </svg>
    </div>
  );
}

function SecondRowCenter() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/yom-kippur");
  };

  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={handleClick}>
      <svg
        width="282"
        height="62"
        viewBox="0 0 282 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="58.24" height="60" fill="#04084A" />
        <rect x="59.24" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="72.68" y="1" width="13.44" height="60" fill="#04084A" />
        <rect x="86.12" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="99.56" y="1" width="82.88" height="60" fill="#9F090C" />
        <rect x="182.44" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="209.32" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="195.88" y="1" width="13.44" height="60" fill="#04084A" />
        <rect x="222.76" y="1" width="58.24" height="60" fill="#04084A" />
        <rect x="0.5" y="0.5" width="281" height="61" stroke="#817F75" />
      </svg>
    </div>
  );
}

function SecondRowRight() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/lebanon1982");
  };

  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={handleClick}>
      <svg
        width="282"
        height="62"
        viewBox="0 0 282 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="56" height="60" fill="#9F090C" />
        <rect x="57" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="70.4399" y="1" width="28" height="60" fill="#04084A" />
        <rect x="98.4399" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="111.88" y="1" width="22.4" height="60" fill="#044929" />
        <rect x="134.28" y="1" width="13.44" height="60" fill="#9F090C" />
        <rect x="147.72" y="1" width="22.4" height="60" fill="#044929" />
        <rect x="170.12" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="183.56" y="1" width="28" height="60" fill="#04084A" />
        <rect x="211.56" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="225" y="1" width="56" height="60" fill="#9F090C" />
        <rect x="0.5" y="0.5" width="281" height="61" stroke="#817F75" />
      </svg>
    </div>
  );
}

function SecondRowRibbons() {
  return (
    <div className="flex justify-center gap-16 mt-16">
      <SecondRowLeft />
      <SecondRowCenter />
      <SecondRowRight />
    </div>
  );
}

function ThirdRowLeft() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/lebanon2006");
  };

  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={handleClick}>
      <svg
        width="282"
        height="62"
        viewBox="0 0 282 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="14.44" y="1" width="28" height="60" fill="#04084A" />
        <rect x="42.44" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="55.88" y="1" width="33.6" height="60" fill="#DA6803" />
        <rect x="89.48" y="1" width="22.4" height="60" fill="#044929" />
        <rect x="111.88" y="1" width="58.24" height="60" fill="#9F090C" />
        <rect x="170.12" y="1" width="22.4" height="60" fill="#044929" />
        <rect x="192.52" y="1" width="33.6" height="60" fill="#DA6803" />
        <rect x="226.12" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="239.56" y="1" width="28" height="60" fill="#04084A" />
        <rect x="267.56" y="1" width="13.44" height="60" fill="#E3DCDC" />
        <rect x="0.5" y="0.5" width="281" height="61" stroke="#817F75" />
      </svg>
    </div>
  );
}

function ThirdRowCenter() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/protective-edge");
  };

  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={handleClick}>
      <svg
        width="282"
        height="62"
        viewBox="0 0 282 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="31.36" height="60" fill="#DA6803" />
        <rect x="32.36" y="1" width="31.36" height="60" fill="#FFCC0F" />
        <rect x="63.72" y="1" width="31.36" height="60" fill="#9F090C" />
        <rect x="95.08" y="1" width="22.4" height="60" fill="#E3DCDC" />
        <rect x="117.48" y="1" width="47.04" height="60" fill="#04084A" />
        <rect x="164.52" y="1" width="22.4" height="60" fill="#E3DCDC" />
        <rect x="186.92" y="1" width="31.36" height="60" fill="#9F090C" />
        <rect x="218.28" y="1" width="31.36" height="60" fill="#FFCC0F" />
        <rect x="249.64" y="1" width="31.36" height="60" fill="#DA6803" />
        <rect x="0.5" y="0.5" width="281" height="61" stroke="#817F75" />
      </svg>
    </div>
  );
}

function ThirdRowRight() {
  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity">
      <svg
        width="282"
        height="62"
        viewBox="0 0 282 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="281"
          height="61"
          fill="#4A4A4A"
          stroke="#817F75"
        />
      </svg>
    </div>
  );
}

function ThirdRowRibbons() {
  return (
    <div className="flex justify-center gap-16 mt-16">
      <ThirdRowLeft />
      <ThirdRowCenter />
      <ThirdRowRight />
    </div>
  );
}

function BottomRowRibbons() {
  return (
    <div className="flex justify-center gap-16 mt-16">
      {/* מלבן ריק */}
      <div className="cursor-pointer hover:opacity-80 transition-opacity">
        <svg
          width="200"
          height="62"
          viewBox="0 0 200 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="199"
            height="61"
            fill="#4A4A4A"
            stroke="#817F75"
          />
        </svg>
      </div>
      {/* מלבן ריק */}
      <div className="cursor-pointer hover:opacity-80 transition-opacity">
        <svg
          width="200"
          height="62"
          viewBox="0 0 200 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="199"
            height="61"
            fill="#4A4A4A"
            stroke="#817F75"
          />
        </svg>
      </div>
      <div></div> {/* ריק כדי לאזן */}
    </div>
  );
}

function NavItem({ text, size = "text-[15px]", onClick }) {
  return (
    <span
      className={`text-[#817F75] ${size} font-normal cursor-pointer hover:text-white transition-colors mr-16`}
      onClick={onClick}
    >
      {text}
    </span>
  );
}

function FourthRowLeft() {
  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity">
      <svg
        width="280"
        height="60"
        viewBox="0 0 280 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="280" height="60" fill="#817F75" fillOpacity="0.29" />
      </svg>
    </div>
  );
}

function FourthRowCenter() {
  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity">
      <svg
        width="282"
        height="62"
        viewBox="0 0 282 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="281" height="61" stroke="#817F75" />
      </svg>
    </div>
  );
}

function AppMain() {
  const navigate = useNavigate();

  const handleSignalsClick = () => {
    navigate('/');
  };

  return (
    <div className="bg-[#262626] w-full h-full min-h-screen">
      <div className="w-full flex flex-row items-center justify-between pt-[101px] px-28 select-none">
        {/* כפתור בצד שמאל */}
        <ToggleButton />

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

      {/* קו אופקי שמפריד בין הכותרת לבין החלק האמצעי - לאורך כל הרוחב */}
      <div style={{
        position: 'absolute',
        width: '100vw', // כל רוחב המסך
        height: '1px',
        left: '0px',
        top: '165px', // שנה את הערך הזה כדי להזיז את הקו למעלה/למטה
        background: '#817F75'
      }} />

      {/* קו אנכי שמאלי - מפריד בין הכפתור לחלק האמצעי */}
      <div style={{
        position: 'absolute',
        width: '1px',
        height: '100vh', // כל גובה המסך
        left: 'calc(33.33% + -400px)', // שליש מהרוחב + פיקסלים - שנה את הערך 0px כדי להזיז שמאלה (-) או ימינה (+)
        top: '0px',
        background: '#817F75'
      }} />

      {/* קו אנכי ימני - מפריד בין החלק האמצעי למילה "אותות" */}
      <div style={{
        position: 'absolute',
        width: '1px',
        height: '100vh', // כל גובה המסך
        left: 'calc(66.66% + 400px)', // שני שלישים מהרוחב + פיקסלים - שנה את הערך 0px כדי להזיז שמאלה (-) או ימינה (+)
        top: '0px',
        background: '#817F75'
      }} />

      <main className="flex flex-col items-center justify-center mt-20">
        {/* שורה ראשונה */}
        <div className="flex justify-center gap-38">
          <div onClick={() => navigate("/independence")}>
            {" "}
            {/* ניווט */}
            <RibbonLeft />
          </div>
          <div>
            <RibbonCenter />
          </div>
          <div>
            <RibbonRight />
          </div>
        </div>
        {/* שורה שנייה */}
        <div className="flex justify-center gap-38 mt-32">
          <div>
            <SecondRowLeft />
          </div>
          <div>
            <SecondRowCenter />
          </div>
          <div>
            <SecondRowRight />
          </div>
        </div>
        {/* שורה שלישית */}
        <div className="flex justify-center gap-38 mt-32">
          <div>
            <ThirdRowLeft />
          </div>
          <div>
            <ThirdRowCenter />
          </div>
          <div>
            <ThirdRowRight />
          </div>
        </div>
        {/* שורה רביעית */}
        <div className="flex justify-center gap-38 mt-32">
          <div>
            <FourthRowLeft />
          </div>
          <div>
            <FourthRowCenter />
          </div>
          <div className="w-[282px]"></div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppMain />} />
        <Route path="/independence" element={<WarOfIndependence />} />
        <Route path="/lebanon2006" element={<SecondLebanonWar />} />
        <Route path="/lebanon1982" element={<FirstLebanonWar />} />
        <Route path="/sixday" element={<SixDayWar />} />
        <Route path="/sinai" element={<SinaiWar />} />
        <Route path="/protective-edge" element={<ProtectiveEdgeWar />} />
        <Route path="/attrition" element={<WarOfAttrition />} />
        <Route path="/yom-kippur" element={<YomKippurWar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
