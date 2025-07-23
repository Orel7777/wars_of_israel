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

function RibbonLeft() {
  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity">
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
  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity">
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
  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity">
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
  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity">
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
  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity">
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
  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity">
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
  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity">
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
  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity">
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
      <svg width="280" height="60" viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="60" fill="#817F75" fillOpacity="0.29" />
      </svg>
    </div>
  );
}

function FourthRowCenter() {
  return (
    <div className="cursor-pointer hover:opacity-80 transition-opacity">
      <svg width="282" height="62" viewBox="0 0 282 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="281" height="61" stroke="#817F75" />
      </svg>
    </div>
  );
}

function App() {
  // const [selectedRibbon, setSelectedRibbon] = useState(null);

  // const handleRibbonClick = (ribbonName) => {
  //   setSelectedRibbon(ribbonName);
  //   console.log(`נלחץ על ${ribbonName}`);
  // };

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


{/* קבצי SVG */}
      <main className="flex flex-col items-center justify-center mt-20">
        {/* שורה ראשונה */}
        <div className="flex justify-center gap-56">
          <div onClick={() => { /* סרט שמאל - שורה שנייה */ }}>
            <RibbonLeft />
          </div>
          <div onClick={() => { /* סרט אמצע - שורה שנייה */ }}>
            <RibbonCenter />
          </div>
          <div onClick={() => { /* סרט ימין - שורה שנייה */ }}>
            <RibbonRight />
          </div>
        </div>
  
        {/* שורה שנייה */}
        <div className="flex justify-center gap-56 mt-32">
          <div onClick={() => { /* סרט שמאל - שורה שנייה */ }}> 
            <SecondRowLeft />
          </div>
          <div onClick={() => { /* סרט אמצע - שורה שנייה */ }}> 
            <SecondRowCenter />
          </div>
          <div onClick={() => { /* סרט ימין - שורה שנייה */ }}> 
            <SecondRowRight />
          </div>
        </div>

        {/* שורה שלישית */}
        <div className="flex justify-center gap-56 mt-32">
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
        <div className="flex justify-center gap-56 mt-32">
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

export default App;
