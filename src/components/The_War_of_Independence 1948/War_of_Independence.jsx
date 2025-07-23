import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
          cx={on ? 11 : 34}
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
  const navigate = useNavigate();

  const handleSignalsClick = () => {
    navigate('/');
  };

  return (
    <div className="bg-[#262626] w-full h-full min-h-screen">
      <div className="w-full flex flex-row items-start justify-between pt-[101px] px-28 select-none">
        {/* כפתור והטקסטים מתחתיו */}
        <div className="flex flex-col items-center gap-6">
        <ToggleButton />
          <div className="flex flex-col items-center gap-6 mt-8">
            <span
              className="text-[#817F75] cursor-pointer hover:text-white transition-colors"
              style={{
                fontFamily: "80-kb",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                opacity: 1,
                width: "82px",
                height: "11px"
              }}
              onClick={() => console.log("משך המלחמה clicked")}
            >
              משך המלחמה
            </span>
            
            <span
              className="text-[#817F75] cursor-pointer hover:text-white transition-colors"
              style={{
                fontFamily: "80-kb",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                opacity: 1,
                width: "85px",
                height: "11px"
              }}
              onClick={() => console.log("חזית clicked")}
            >
              חזית
            </span>
            
            <span
              className="text-[#817F75] cursor-pointer hover:text-white transition-colors"
              style={{
                fontFamily: "80-kb",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                opacity: 1,
                width: "85px",
                height: "11px"
              }}
              onClick={() => console.log("נפגעים clicked")}
            >
              נפגעים
            </span>
            
            <span
              className="text-[#817F75] cursor-pointer hover:text-white transition-colors"
              style={{
                fontFamily: "80-kb",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                opacity: 1,
                width: "84px",
                height: "11px"
              }}
              onClick={() => console.log("אות המערכה clicked")}
            >
              אות המערכה
            </span>
          </div>
        </div>

        {/* טקסט בצד ימין */}
        <div className="flex flex-row-reverse items-center justify-end gap-36">
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
              cursor: "pointer"
            }}
                        className="hover:text-white transition-colors"
            onClick={handleSignalsClick}           
          >
            אותות
          </span>

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

      <main className="flex flex-col items-center justify-center mt-20">
        {/* קו אופקי במרכז */}
        <div 
          style={{
            width: '777px',
            height: '1px',
            backgroundColor: '#817F75',
            opacity: 1,
            marginTop: '138px'
          }}
        />

        
        
        {/* קו אנכי צמוד לקו האופקי בצד ימין */}
        <div 
          style={{
            width: '1px',
            height: '207px',
            backgroundColor: '#817F75',
            opacity: 1,
            position: 'absolute',
            left: 'calc(50% + 388.5px)',
            top: '57.2%', // שנה ל-'30%' להזזה למעלה, ל-'70%' להזזה למטה, ל-'100px' מהחלק העליון, או השאר '50%' למרכז
            transform: 'translateY(-50%)'
          }}
        />
        
        {/* קו אנכי צמוד לקו האופקי בצד שמאל */}
        <div 
          style={{
            width: '1px',
            height: '207px',
            backgroundColor: '#817F75',
            opacity: 1,
            position: 'absolute',
            left: 'calc(50% - 388.5px)',
            top: '57.2%', // שנה ל-'30%' להזזה למעלה, ל-'70%' להזזה למטה, ל-'100px' מהחלק העליון, או השאר '50%' למרכז
            transform: 'translateY(-50%)'
          }}
        />
        
        {/* קו אופקי תחתון להשלמת המלבן */}
        <div 
          style={{
            width: '777px',
            height: '1px',
            backgroundColor: '#817F75',
            opacity: 1,
            position: 'absolute',
            left: '50%',
            top: 'calc(57.2% + 103.5px)', // 57.2% + חצי גובה הקווים האנכיים (207/2 = 103.5px)
            transform: 'translateX(-50%)'
          }}
        />
        
        {/* 10 קווים אנכיים בתוך המלבן - 4 שמאל, 2 אמצע, 4 ימין */}
        
        {/* קבוצה שמאלית - 4 קווים */}
        <div style={{ position: 'absolute', left: 'calc(50% - 320px)', top: '57.2%', width: '1px', height: '207px', backgroundColor: '#817F75', transform: 'translateY(-50%)' }} />
        <div style={{ position: 'absolute', left: 'calc(50% - 280px)', top: '57.2%', width: '1px', height: '207px', backgroundColor: '#817F75', transform: 'translateY(-50%)' }} />
        <div style={{ position: 'absolute', left: 'calc(50% - 240px)', top: '57.2%', width: '1px', height: '207px', backgroundColor: '#817F75', transform: 'translateY(-50%)' }} />
        <div style={{ position: 'absolute', left: 'calc(50% - 200px)', top: '57.2%', width: '1px', height: '207px', backgroundColor: '#817F75', transform: 'translateY(-50%)' }} />
        
        {/* קבוצה אמצעית - 2 קווים */}
        <div style={{ position: 'absolute', left: 'calc(50% - 20px)', top: '57.2%', width: '1px', height: '207px', backgroundColor: '#817F75', transform: 'translateY(-50%)' }} />
        <div style={{ position: 'absolute', left: 'calc(50% + 20px)', top: '57.2%', width: '1px', height: '207px', backgroundColor: '#817F75', transform: 'translateY(-50%)' }} />
        
        {/* קבוצה ימנית - 4 קווים */}
        <div style={{ position: 'absolute', left: 'calc(50% + 200px)', top: '57.2%', width: '1px', height: '207px', backgroundColor: '#817F75', transform: 'translateY(-50%)' }} />
        <div style={{ position: 'absolute', left: 'calc(50% + 240px)', top: '57.2%', width: '1px', height: '207px', backgroundColor: '#817F75', transform: 'translateY(-50%)' }} />
        <div style={{ position: 'absolute', left: 'calc(50% + 280px)', top: '57.2%', width: '1px', height: '207px', backgroundColor: '#817F75', transform: 'translateY(-50%)' }} />
        <div style={{ position: 'absolute', left: 'calc(50% + 320px)', top: '57.2%', width: '1px', height: '207px', backgroundColor: '#817F75', transform: 'translateY(-50%)' }} />
      </main>






      {/* טור מתחת למילה אותות - עטוף בדיב אחד */}
      <div className="absolute" style={{ 
        right: 'calc(50% - 820px)', // מיקום במרכז המילה "אותות" - שנה את הערך הזה לשליטה במיקום
        top: '330px' // שנה את הערך הזה לשליטה במיקום האנכי
      }}>
        {/* ריבוע ראשון למעלה */}
        <div style={{ width: '22px', height: '24px', backgroundColor: '#817F75', marginBottom: '8px' }} />
        
        {/* 6 פסים עם מרווחים */}
        <div style={{ width: '22px', height: '1px', backgroundColor: '#817F75', border: '1px solid #44433E', marginBottom: '6px' }} />
        <div style={{ width: '22px', height: '1px', backgroundColor: '#817F75', border: '1px solid #44433E', marginBottom: '6px' }} />
        <div style={{ width: '22px', height: '1px', backgroundColor: '#817F75', border: '1px solid #44433E', marginBottom: '6px' }} />
        <div style={{ width: '22px', height: '1px', backgroundColor: '#817F75', border: '1px solid #44433E', marginBottom: '6px' }} />
        <div style={{ width: '22px', height: '1px', backgroundColor: '#817F75', border: '1px solid #44433E', marginBottom: '6px' }} />
        <div style={{ width: '22px', height: '1px', backgroundColor: '#817F75', border: '1px solid #44433E', marginBottom: '8px' }} />
        
        {/* ריבוע קטן */}
        <div style={{ width: '22px', height: '5px', backgroundColor: '#817F75', marginBottom: '8px' }} />
        
        {/* 15 פסים - הגדלתי מ-10 ל-15 */}
        {Array.from({ length: 10 }, (_, i) => (
          <div key={`line1-${i}`} style={{ width: '22px', height: '1px', backgroundColor: '#817F75', border: '1px solid #44433E', marginBottom: '6px' }} />
        ))}
        
        {/* ריבוע */}
        <div style={{ width: '22px', height: '5px', backgroundColor: '#817F75', marginBottom: '8px' }} />
        
        {/* ריבוע גבוה */}
        <div style={{ width: '22px', height: '28px', backgroundColor: '#817F75', marginBottom: '8px' }} />
        
        {/* 2 פסים */}
        <div style={{ width: '22px', height: '1px', backgroundColor: '#817F75', border: '1px solid #44433E', marginBottom: '6px' }} />
        <div style={{ width: '22px', height: '1px', backgroundColor: '#817F75', border: '1px solid #44433E', marginBottom: '8px' }} />
        
        {/* ריבוע */}
        <div style={{ width: '22px', height: '5px', backgroundColor: '#817F75', marginBottom: '8px' }} />
        
        {/* 10 פסים - הגדלתי מ-6 ל-10 */}
        {Array.from({ length: 8 }, (_, i) => (
          <div key={`line2-${i}`} style={{ width: '22px', height: '1px', backgroundColor: '#817F75', border: '1px solid #44433E', marginBottom: '6px' }} />
        ))}
        
        {/* ריבוע */}
        <div style={{ width: '22px', height: '5px', backgroundColor: '#817F75', marginBottom: '8px' }} />
        
        {/* 30 פסים - הגדלתי מ-23 ל-30 */}
        {Array.from({ length: 24 }, (_, i) => (
          <div key={`line3-${i}`} style={{ width: '22px', height: '1px', backgroundColor: '#817F75', border: '1px solid #44433E', marginBottom: '4px' }} />
        ))}
        
        {/* ריבוע */}
        <div style={{ width: '22px', height: '5px', backgroundColor: '#817F75', marginBottom: '8px' }} />
        
        {/* 12 פסים - הגדלתי מ-7 ל-12 */}
        {Array.from({ length: 7 }, (_, i) => (
          <div key={`line4-${i}`} style={{ width: '22px', height: '1px', backgroundColor: '#817F75', border: '1px solid #44433E', marginBottom: '6px' }} />
        ))}
        
        {/* ריבוע בינוני */}
        <div style={{ width: '22px', height: '18px', backgroundColor: '#817F75', marginBottom: '8px' }} />
        
        {/* ריבוע קטן תחתון */}
        <div style={{ width: '22px', height: '4px', backgroundColor: '#817F75' }} />
      </div>





      

      {/* SVG וטקסט בצד שמאל למטה */}
      <div className="absolute bottom-24 left-28 flex items-center gap-4">
        <svg width="108" height="23" viewBox="0 0 108 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.7">
            <rect width="13.7387" height="23" fill="#04084A"/>
            <rect x="13.7383" width="5.152" height="23" fill="#E3DCDC"/>
            <rect x="18.8906" width="5.152" height="23" fill="#A3CEEB"/>
            <rect x="24.043" width="5.152" height="23" fill="#E3DCDC"/>
            <rect x="29.1953" width="21.896" height="23" fill="#04084A"/>
            <rect x="51.0908" width="5.152" height="23" fill="#9F090C"/>
            <rect x="56.2422" width="21.896" height="23" fill="#04084A"/>
            <rect x="78.1377" width="5.152" height="23" fill="#E3DCDC"/>
            <rect x="83.29" width="5.152" height="23" fill="#A3CEEB"/>
            <rect x="88.4424" width="5.152" height="23" fill="#E3DCDC"/>
            <rect x="93.5947" width="13.7387" height="23" fill="#04084A"/>
          </g>
        </svg>
        
        <span
          style={{
            fontFamily: '80-kb',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '16px',
            color: '#817F75',
            width: '114px',
            height: '12px'
          }}
        >
          מלחמת העצמאות
        </span>
      </div>
    </div>
  );
}

export default WarOfIndependence;