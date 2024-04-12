import React from "react";
import "../styles/CustomerList.css";

function CustomerList({ users }) {
  console.log("Users:", users);
  const emptyRows = Array.from({ length: 5 - users.length }).map((_, index) => (
    <tr key={index + users.length}>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
  ));

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.location}</td>
            </tr>
          ))}
          {emptyRows}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
