import { useState } from "react";
import "./ImageSlider.scss";
import data from "./data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageSlider = () => {
  const [currentId, setCurrentId] = useState<number>(1);

  function handleClickRight() {
    setCurrentId((id) => (id === data.length ? id : id + 1));
  }

  function handleClickLeft() {
    setCurrentId((id) => (id > 1 ? id - 1 : id));
  }

  return (
    <div className="container">
      <div className="slider-wrap">
        <div className="image-wrap">
          {data.map((item) => {
            return (
              <img
                key={item.id}
                src={item.image}
                alt={item.header}
                className={item.id === currentId ? "" : "inactive"}
              />
            );
          })}
        </div>

        <div className="icons-wrap">
          <div className="arrows-wrap">
            <div className="arrow-circle">
              <FaArrowLeft onClick={() => handleClickLeft()} />
            </div>

            <div className="arrow-circle">
              <FaArrowRight onClick={handleClickRight} />
            </div>
          </div>

          <div className="buttons-wrap">
            {data.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentId(item.id)}
                  className={
                    item.id === currentId ? "radio-btns active" : "radio-btns"
                  }
                ></button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
