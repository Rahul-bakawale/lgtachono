import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
const StarRating = ({ starColor }) => {
  const [rating, setRating] = useState(0); 
  };

  return (
    <div>
      <div style={{ fontSize: "1rem" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              cursor: "pointer",
              color: star <= rating ? starColor : "black",
            }}
          >
            {star <= rating ? <FaStar /> : <FaRegStar />}{" "}
            {/* Filled or empty star */}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
