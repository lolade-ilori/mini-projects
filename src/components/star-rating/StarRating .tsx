import { useState } from "react";
import "./StarRating.scss";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars }: { noOfStars: number }) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleClick = (currentIndex: number) => {
    setRating(currentIndex);
  };

  const handleMouseEnter = (currentIndex: number) => {
    setHover(currentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <>
      <div className="star-wrap">
        <h1>Rate this project</h1>
        <div className="flex-wrap">
          {[...Array(noOfStars)].map((_, index) => {
            index += 1;

            return (
              <FaStar
                className={index <= (hover || rating) ? "star active" : "star"}
                key={index}
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                size={40}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StarRating;
