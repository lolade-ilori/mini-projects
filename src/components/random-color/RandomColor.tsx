import { useState } from "react";
import "./RandomColor.scss";

const RandomColor = () => {
  const [colour, setColour] = useState<string>("");
  const [colorType, setColorType] = useState<string>("hex");

  const randomColorUtility = (value: number) => {
    return Math.floor(Math.random() * value);
  };

  const values: string[] = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const randomHex = () => {
    let hex = "#";

    for (let i = 0; i <= 5; i++) {
      const rand = Math.floor(Math.random() * values.length);

      hex += values[rand];
    }

    setColour(hex);
    setColorType("hex");
  };

  const randomRgb = () => {
    // NB: 256 is the max length we can pass
    let r = randomColorUtility(256);
    let g = randomColorUtility(256);
    let b = randomColorUtility(256);

    setColour(`rgb(${r}, ${g}, ${b})`);
    setColorType("rgb");
  };

  return (
    <div className="parent-wrap" style={{ backgroundColor: colour }}>
      <div className="flex">
        <button onClick={randomHex}>Create HEX Color</button>

        <button onClick={randomRgb}>Create RGB Color</button>

        <button
          onClick={() => (colorType === "hex" ? randomHex() : randomRgb())}
        >
          Generate Random Color
        </button>
      </div>

      <div className="text-wrap">
        <div className="">
          <h1> {colorType} Color</h1>
        </div>

        <div className="">
          <h2>{colour}</h2>
        </div>
      </div>
    </div>
  );
};

export default RandomColor;
