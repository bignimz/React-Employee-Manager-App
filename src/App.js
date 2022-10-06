import "./App.css";
import Employees from "./Employees";
import { useState } from "react";

// Craete an array of employees
// This can be replaced with an API data
const employees = [
  { Name: "John", Email: "john@example.com", Role: "Developer" },
  { Name: "Mary", Email: "Mary@example.com", Role: "Intern" },
  { Name: "Jack", Email: "jack@example.com", Role: "Senior Developer" },
  { Name: "Brian", Email: "brian@example.com", Role: "Junior Developer" },
  { Name: "Andrew", Email: "Andrew@example.com", Role: "Lead Developer" },
];
const ShowEmployees = true;

function App() {
  // useState Hook
  const [role, setRole] = useState("dev");
  return (
    <div>
      {ShowEmployees ? (
        <>
          <input
            type="text"
            placeholder="Enter role"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <Employees name="Brian" role={role} />
        </>
      ) : (
        <h4>No Employees Available</h4>
      )}
    </div>
  );
}

export default App;
