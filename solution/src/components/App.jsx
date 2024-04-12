import React, { useState } from "react";
import "../styles/App.css";
import NameInput from "./NameInput";
import LocationDropdown from "./LocationDropdown";
import CustomerList from "./CustomerList";

function App() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("Canada");
  const [users, setUsers] = useState([]);
  const [usedNames, setUsedNames] = useState([]);
  const [isNameValid, setIsNameValid] = useState(false);

  const addUser = () => {
    if (isNameValid && name && location) {
      console.log("Adding user:", name, location);
      setUsers([...users, { name, location }]);
      setUsedNames([...usedNames, name]);
      setName("");
      setLocation("Canada");
    }
  };

  const clearInputs = () => {
    setName("");
    setLocation("Canada");
  };

  return (
    <div className="container">
      <NameInput
        name={name}
        setName={setName}
        setIsNameValid={setIsNameValid}
        usedNames={usedNames}
        setUsedNames={setUsedNames}
      />
      <LocationDropdown location={location} setLocation={setLocation} />
      <div className="button-container">
        <button onClick={clearInputs}>Clear</button>
        <button onClick={addUser} disabled={!isNameValid || !name}>
          Add
        </button>
      </div>
      <CustomerList users={users} />
    </div>
  );
}

export default App;
