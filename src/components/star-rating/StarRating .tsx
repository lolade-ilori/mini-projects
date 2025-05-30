import { FaStar } from "react-icons/fa";
import "./StarRating.scss";
import { useState } from "react";

const StarRating = ({ noOfStars = 5 }) => {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index: number) {
    setCount(index);
  }

  function handleHover(index: number) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(count);
  }

  return (
    <div className="star-wrap">
      <div className="flex-wrap">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={(hover || count) >= index ? "star active " : "star"}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
