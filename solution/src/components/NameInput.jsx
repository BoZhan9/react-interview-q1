import React, { useState, useEffect } from "react";
import { isNameValid } from "../mock-api/apis";
import "../styles/NameInput.css";

function NameInput({ name, setName, setIsNameValid, usedNames, setUsedNames }) {
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    const validateName = async () => {
      if (!name) {
        setIsNameValid(false);
        return;
      }

      setIsChecking(true);
      const valid = await isNameValid(name);
      setIsChecking(false);
      const isNameUsed = usedNames.includes(name);
      const currentValid = valid && !isNameUsed;
      setIsNameValid(currentValid);
    };

    validateName();
  }, [name, usedNames, setIsNameValid]);

  return (
    <div className="input">
      <label
        htmlFor="nameInput"
        style={{ display: "inline-block", marginRight: "5px" }}
      >
        Name
      </label>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="mock name"
      />
      {isChecking && <p className="checking-message">Checking...</p>}
      {!isChecking && usedNames.includes(name) && (
        <p
          className="error-message"
          style={{ color: "red", marginTop: "10px", textAlign: "left" }}
        >
          this name has already been taken
        </p>
      )}
    </div>
  );
}

export default NameInput;
