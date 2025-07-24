import React from "react";

function TimelineChart({ isLargeScreen }) {
  const TimelineContent = () => (
    <div style={{ marginLeft: "51px", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
      {/* 6 פסים עם מרווחים */}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={`top-lines-${i}`}
          style={{
            width: "22px",
            height: "1px",
            backgroundColor: "#817F75",
            border: "1px solid #44433E",
            marginBottom: "6px",
          }}
        />
      ))}

      {/* ריבוע קטן */}
      <div
        style={{
          width: "22px",
          height: "5px",
          backgroundColor: "#817F75",
          marginBottom: "8px",
        }}
      />

      {/* 15 פסים */}
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={`line1-${i}`}
          style={{
            width: "22px",
            height: "1px",
            backgroundColor: "#817F75",
            border: "1px solid #44433E",
            marginBottom: "6px",
          }}
        />
      ))}

      {/* ריבוע */}
      <div
        style={{
          width: "22px",
          height: "5px",
          backgroundColor: "#817F75",
          marginBottom: "8px",
        }}
      />

      {/* ריבוע גבוה */}
      <div
        style={{
          width: "22px",
          height: "28px",
          backgroundColor: "#817F75",
          marginBottom: "8px",
        }}
      />

      {/* 2 פסים */}
      {Array.from({ length: 2 }, (_, i) => (
        <div
          key={`middle-lines-${i}`}
          style={{
            width: "22px",
            height: "1px",
            backgroundColor: "#817F75",
            border: "1px solid #44433E",
            marginBottom: i === 1 ? "8px" : "6px",
          }}
        />
      ))}

      {/* ריבוע */}
      <div
        style={{
          width: "22px",
          height: "5px",
          backgroundColor: "#817F75",
          marginBottom: "8px",
        }}
      />

      {/* 10 פסים */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`line2-${i}`}
          style={{
            width: "22px",
            height: "1px",
            backgroundColor: "#817F75",
            border: "1px solid #44433E",
            marginBottom: "6px",
          }}
        />
      ))}

      {/* ריבוע */}
      <div
        style={{
          width: "22px",
          height: "5px",
          backgroundColor: "#817F75",
          marginBottom: "8px",
        }}
      />

      {/* 30 פסים */}
      {Array.from({ length: 24 }, (_, i) => (
        <div
          key={`line3-${i}`}
          style={{
            width: "22px",
            height: "1px",
            backgroundColor: "#817F75",
            border: "1px solid #44433E",
            marginBottom: "4px",
          }}
        />
      ))}

      {/* ריבוע */}
      <div
        style={{
          width: "22px",
          height: "5px",
          backgroundColor: "#817F75",
          marginBottom: "8px",
        }}
      />

      {/* 12 פסים */}
      {Array.from({ length: 7 }, (_, i) => (
        <div
          key={`line4-${i}`}
          style={{
            width: "22px",
            height: "1px",
            backgroundColor: "#817F75",
            border: "1px solid #44433E",
            marginBottom: "6px",
          }}
        />
      ))}

      {/* ריבוע בינוני */}
      <div
        style={{
          width: "22px",
          height: "18px",
          backgroundColor: "#817F75",
          marginBottom: "8px",
        }}
      />

      {/* ריבוע קטן תחתון */}
      <div
        style={{ width: "22px", height: "4px", backgroundColor: "#817F75" }}
      />
    </div>
  );

  return (
    <div
      className="absolute"
      style={{
        right: "calc(50% - 820px)",
        top: isLargeScreen ? "300px" : "200px",
      }}
    >
      {/* שורה עליונה עם המספר 1969 והריבוע החדש */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
        {/* המספר 1969 */}
        <span
          style={{
            fontFamily: "80-kb",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#D9D9D9",
            opacity: 1,
            width: "43px",
            height: "11px",
            whiteSpace: "nowrap",
          }}
        >
          1969
        </span>
        {/* ריבוע חדש לפי הדרישות */}
        <div
          style={{
            width: "38px",
            height: "5px",
            backgroundColor: "#D9D9D9",
            border: "1px solid #D9D9D9",
            opacity: 1,
          }}
        />
      </div>

      {/* כל העמוד מיושר לפי הריבוע - יישור לימין */}
      <TimelineContent />
    </div>
  );
}

export default TimelineChart; 