import { useState } from "react";
import DocNav from "../../components/DocNav";
const Doctorsdb = () => {
  const [appointment, setAppointment] = useState([
    { id: 1, patient: "john Doe", time: "10:00 AM", status: "pending" },
    { id: 2, patient: "john Doe", time: "10:00 AM", status: "pending" },
    { id: 2, patient: "john Doe", time: "10:00 AM", status: "pending" },
    { id: 2, patient: "mateo morez", time: "12:00 AM", status: "pending" },
    { id: 2, patient: "john Doe", time: "10:00 AM", status: "pending" },
    { id: 2, patient: "john Doe", time: "10:00 AM", status: "pending" },
    { id: 2, patient: "john Doe", time: "11:00 AM", status: "pending" },
  ]);
  const [patient, setPatient] = useState([
    { id: 1, name: "john Doe", age: 45, condition: "Diabetes" },
    { id: 1, name: "john Doe", age: 45, condition: "Diabetes" },
  ]);

  return (
    <>
      <DocNav />
      <div className="container mt-5">
        <div className="row g-4" id="appointments">
          {/*upcoming apppoint ment*/}
          <div className="card shadow rounded">
            <div className="card-body">
              <h5 className="card-title mb-3">Upcoming Appointment</h5>
              <ul className="list-group">
                {appointment.map((apo) => (
                  <li
                    key={apo.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div className="mb-1 fw-semibold">{apo.patient}</div>
                    <small className="text-muted">{apo.time}</small>
                    <button className="btn btn-outline-primary btn-sm">
                      {apo.status}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/*patient record*/}
        <div className="col-md-4 row g-4" id="patients">
          <div className="card shadow rounded">
            <div className="card-body">
              <h5 className="card-title mb-3">Patient Records</h5>
              <ul className="list-group">
                {patient.map((patient) => (
                  <li key={patient.id} className="list-group-item">
                    <p className="mb-1 fw-semibold">{patient.name}</p>
                    <small className="text-muted">
                      Age:{patient.age} | consition:{patient.condition}
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 row" id="lab">
          <div className="card shadow rounded">
            <div className="card-body">
              <h5 className="card-title mb-3">Lab Test Requests</h5>
              <p className="text-muted">
                No new lab test requests at the moment
              </p>
            </div>
          </div>
        </div>
        {/*quick action*/}
        <div className="col-md-8">
          <div className="card shadow rounded">
            <div className="card-body">
              <h5 className="card-title mb-3" id="QuickActions">
                Quick Action
              </h5>
              <div className="d-flex gap-2">
                <button className="btn btn-primary">Add prescription</button>
                <button className="btn btn-outline-secondary">
                  Order Lab Test
                </button>
                <button className="btn btn-secondary">
                  View Patient History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctorsdb;
