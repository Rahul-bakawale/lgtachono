import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
const StarRating = ({ starColor, rating }) => {
  const [rating, setRating] = useState(rating);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div>
      <div style={{ fontSize: "1rem" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRating(star)}
            style={{
              cursor: "pointer",
              color: star <= rating ? starColor : "black",
            }}
          >
            {star <= rating ? <FaStar /> : <FaRegStar />}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
