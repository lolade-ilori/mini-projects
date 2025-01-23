import { useState } from "react";
import "./Tabs.scss";

interface Props {
  data: { id: number; title: string; content: string }[];
}

const Tabs = ({ data }: Props) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <>
      <div className="buttons-wrap">
        {data.map((item, index) => {
          return (
            <button
              className={currentTabIndex === index ? "active" : ""}
              key={item.id}
              onClick={() => setCurrentTabIndex(index)}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      <div className="content-wrap">
        {data[currentTabIndex] && data[currentTabIndex].content}
      </div>
    </>
  );
};

export default Tabs;
