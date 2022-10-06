import "./App.css";
import Employee from "./Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Craete an array of employees
// This can be replaced with an API data

const ShowEmployees = true;
function App() {
  // useState Hook
  const employees = [
    {
      img: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg",
      firstName: "John",
      lastName: "Doe",
      role: "Manager",
      department: "IT Department",
    },
    {
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg",
      firstName: "Nmrod",
      lastName: "Allan",
      role: "Senior Dev",
      department: "IT Department",
    },
    {
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
      firstName: "Mike",
      lastName: "Moja",
      role: "",
      department: "",
    },
    {
      img: "https://images.pexels.com/photos/4662950/pexels-photo-4662950.jpeg",
      firstName: "Mary",
      lastName: "Poper",
      role: "HR Manager",
      department: "Admin Department",
    },
    {
      img: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg",
      firstName: "Jane",
      lastName: "Doe",
      role: "Receptionist",
      department: "Admin Department",
    },
    {
      img: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg",
      firstName: "Philip",
      lastName: "Salazar",
      role: "CTO",
      department: "IT Department",
    },
  ];

  const [role, setRole] = useState("dev");

  return (
    <div>
      {ShowEmployees ? (
        <>
          <input
            type="text"
            className="form-control mx-auto mt-5"
            style={{ maxWidth: "1000px" }}
            placeholder="Enter role"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="container">
            <div className="row row-cols-lg-3 cols-md-2 cols-sm-1">
              {employees.map((employee) => {
                console.log(employee);
                return (
                  <>
                    <Employee
                      key={uuidv4()}
                      firstName={employee.firstName}
                      lastName={employee.lastName}
                      img={employee.img}
                      role={employee.role}
                      department={employee.department}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <h4>No Employees Available</h4>
      )}
    </div>
  );
}

export default App;
