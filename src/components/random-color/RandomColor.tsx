import { useState } from "react";
import "./RandomColor.scss";

const RandomColor = () => {
  const [color, setColor] = useState<string>("#000000");
  const [colorType, setColorType] = useState<string>(ColorType.RGB);

  const randomNumGenerator = (length: number) => {
    let randomNum = Math.floor(Math.random() * length);

    return randomNum;
  };

  const handleGenerateHex = () => {
    setColorType(ColorType.HEX);
    let code = "";
    const characters = [
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

    for (let i = 0; i < 6; i++) {
      code += characters[randomNumGenerator(characters.length)];
    }

    setColor(`#${code}`);
  };

  const handleGenerateRbg = () => {
    setColorType(ColorType.RGB);

    // Passing 256, as this is the max length we can pass
    let r = randomNumGenerator(256);
    let g = randomNumGenerator(256);
    let b = randomNumGenerator(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <>
      <div className="parent-wrap" style={{ backgroundColor: color }}>
        <div className="flex">
          <button onClick={handleGenerateHex}>CREATE HEX COLOR</button>
          <button onClick={handleGenerateRbg}>CREATE RGB COLOR</button>
          <button
            onClick={
              colorType === ColorType.RGB
                ? handleGenerateRbg
                : handleGenerateHex
            }
          >
            GENERATE RANDOM COLOR
          </button>
        </div>

        <div className="text-wrap">
          <h2> {colorType} Colors</h2>

          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
};

enum ColorType {
  RGB = "RGB",
  HEX = "HEX",
}

export default RandomColor;
