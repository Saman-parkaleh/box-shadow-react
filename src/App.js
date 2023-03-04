import "./App.css";
import React, { useState } from "react";

function App() {
  const [hori, setHori] = useState(10);
  const [veri, setVeri] = useState(10);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(10);
  const [color, setColor] = useState("black");

  console.log(hori, veri, blur, spread, color);

  return (
    <>
      <div className="flex justify-center flex-col  w-full  	content-center	grid">
        <div className=" 	flex-col flex justify-center w-[500px]	 h-[200px]  grid my-32 ">
          <div className="w-[400px] flex justify-between">
            <label>طول عمودی</label>
            <input
              type="range"
              min="-200"
              max="200"
              value={veri}
              onChange={(e) => setVeri(e.target.value)}
            />
          </div>
          <div className="w-[400px]  flex justify-between">
            <label>طول  افقی</label>
            <input
              type="range"
              min="-200"
              max="200"
              value={hori}
              onChange={(e) => setHori(e.target.value)}
            />
          </div>
          <div className="w-[400px]  flex justify-between">
            <label>تاری </label>
            <input
              type="range"
              min="0"
              max="100"
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
            />
          </div>
          <div className="w-[400px] flex justify-between">
            <label>گسترش رنگ</label>
            <input
              type="range"
              min="0"
              max="100"
              value={spread}
              onChange={(e) => setSpread(e.target.value)}
            />
          </div>
          <div className="w-[400px] flex justify-between">
            <label>رنگ</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </div>
        <div className="output w-[500px] h-[300px] bg-red-500 flex justify-center content-center grid" style={{boxShadow: `${hori}px ${veri}px ${blur}px ${spread}px ${color}`}}>
          <div className="box">
            <p className="border p-5 bg-rose-100">
              box-shadow: {veri}px {hori}px {blur}px {spread}px {color}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
