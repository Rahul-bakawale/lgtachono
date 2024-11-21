import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; // Import stars from react-icons

const StarRating = () => {
  const [rating, setRating] = useState(0); // State to hold the rating (0 to 5)

  const handleRating = (value) => {
    setRating(value); // Set the rating when a star is clicked
  };

  return (
    <div>
      <h3>Rate Us</h3>
      <div style={{ fontSize: "2rem" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRating(star)}
            style={{
              cursor: "pointer",
              color: star <= rating ? "#FFD700" : "#ddd",
            }} // Gold color for selected stars
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
