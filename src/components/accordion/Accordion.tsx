import { useState } from "react";
import "./Accordion.scss";
import data from "./data";

const Accordion = () => {
  const [activenum, sectActiveNum] = useState<number>(0);
  const [activeArray, setActiveArray] = useState<number[]>([]);
  const [multiSelect, setMultiSelect] = useState(false);

  const handleBtnClick = (value: number) => {
    sectActiveNum(activenum === value ? 0 : value);
  };

  const handleMultipleSelect = (value: number) => {
    const index = activeArray.indexOf(value);

    if (index === -1) {
      setActiveArray((prev) => [...prev, value]);
    } else {
      const newArr = activeArray.filter((item) => item !== value);
      setActiveArray(newArr);
    }
  };

  return (
    <div className="wrapper">
      <button
        className="multiple-enable"
        onClick={() => setMultiSelect(!multiSelect)}
      >
        {multiSelect ? "Enable Single Selection" : "Enable Multi Selection"}
      </button>

      <div className="accordion">
        {data.map((item) => {
          return (
            <div key={item.id} className="accordion-box">
              <div className="header">
                <h3>{item.headerText}</h3>
                <button
                  onClick={() =>
                    multiSelect
                      ? handleMultipleSelect(item.id)
                      : handleBtnClick(item.id)
                  }
                >
                  +
                </button>
              </div>

              {!multiSelect && activenum === item.id && (
                <div className="content">
                  <p>{item.bodyText}</p>
                </div>
              )}

              {multiSelect && activeArray.includes(item.id) && (
                <div className="content">
                  <p>{item.bodyText}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
