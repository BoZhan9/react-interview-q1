import React, { useState, useEffect } from "react";
import { getLocations } from "../mock-api/apis";
import "../styles/LocationDropdown.css";

function LocationDropdown({ location, setLocation }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const locations = await getLocations();
      setOptions(locations);
    };

    fetchLocations();
  }, []);

  return (
    <div className="dropdown">
      <label
        htmlFor="locationSelect"
        style={{ display: "inline-block", marginRight: "5px" }}
      >
        Location
      </label>
      <select
        id="locationSelect"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{ display: "inline-block" }}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LocationDropdown;
