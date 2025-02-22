import { useState, useEffect } from "react";
import axios from "axios";

const GratitudeList = () => {
  const [gratitudes, setGratitudes] = useState([]);

  useEffect(() => {
    const fetchGratitudes = async () => {
      try {
        const response = await axios.get("/api/gratitudes");
        setGratitudes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGratitudes();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <ul>
      {gratitudes.map((gratitude) => (
        <li key={gratitude._id}>{gratitude.text}</li>
      ))}
    </ul>
  );
};

export default GratitudeList;
