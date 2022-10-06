import React from "react";
import EditEmployee from "./EditEmployee";

function Employee(props) {
  return (
    <div className="col-md-6 col-12 mx-auto mt-5">
      <div className="card shadow-lg mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.img}
              className="img-fluid rounded-start img-fluid"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {props.firstName} {props.lastName}
              </h5>
              <p className="card-text">
                {props.role ? props.role : "No Role Assigned"}
              </p>
              <p className="card-text">
                Department:{" "}
                <small className="text-muted">
                  {props.department ? props.department : "General Staff"}
                </small>
              </p>
              <EditEmployee />
              <button
                className="card-btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
