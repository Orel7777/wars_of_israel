import React, { useState } from "react";

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

export default ToggleButton; 