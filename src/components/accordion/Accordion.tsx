import { useState } from "react";
import data from "./data";
import "./Accordion.scss";

const Accordion = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [enableMultiple, setEnableMultiple] = useState<boolean>(false);
  const [multiple, setMultiple] = useState<number[]>([]);

  const handleSingleSelection = (value: number) => {
    setSelected(selected == value ? null : value);
  };

  // const handleMultipleSelection = (value: number) => {
  //   let cpyMultiple: number[] = [...multiple];

  //   const currentIdIndex = cpyMultiple.indexOf(value);

  //   if (currentIdIndex === -1) {
  //     cpyMultiple.push(value);
  //   } else cpyMultiple.splice(currentIdIndex, 1);

  //   setMultiple(cpyMultiple);
  // };

  const handleMultipleSelection = (value: number) => {
    let cpyMultiple = [...multiple];
    if (cpyMultiple.includes(value)) {
      // Filter the items into the array, where the item is not equal to the value
      let newArr = cpyMultiple.filter((item) => item !== value);
      setMultiple(newArr);
    } else {
      cpyMultiple.push(value);
      setMultiple(cpyMultiple);
    }
  };

  return (
    <div className="wrapper">
      <button
        className="multiple-enable"
        onClick={() => setEnableMultiple(!enableMultiple)}
      >
        {enableMultiple ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>

      <div className="accordion">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div key={item.id} className="accordion-box">
              <div className="header">
                <h3>{item.headerText}</h3>

                <button
                  onClick={
                    enableMultiple
                      ? () => handleMultipleSelection(item.id)
                      : () => handleSingleSelection(item.id)
                  }
                >
                  {selected === item.id ? "-" : "+"}
                </button>
              </div>
              {enableMultiple
                ? multiple.includes(item.id) && (
                    <div className="content">
                      <p>{item.bodyText}</p>
                    </div>
                  )
                : selected === item.id && (
                    <div className="content">
                      <p>{item.bodyText}</p>
                    </div>
                  )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Accordion;
