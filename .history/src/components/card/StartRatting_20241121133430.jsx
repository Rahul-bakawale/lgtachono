import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
const StarRating = ({ starColor, ratings }) => {
  const [rating, setRating] = useState(ratings);

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
              padding: "2px",
                width:"138px"
              color: star <= rating ? starColor : "black",
            }}
          >
            {star <= rating ? <FaStar /> : <FaRegStar />}
          </span>
        ))}
        <span
          style={{
            font: "Heebo",
            fontSize: "15px",
            color: "rgba(15,33,55 , 1)",
            paddingLeft: "10px",
          }}
        >
          {"5.0 (392 reviews)"}
        </span>
      </div>
    </div>
  );
};

export default StarRating;
