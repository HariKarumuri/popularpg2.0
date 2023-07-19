import React from "react";
import { useParams } from "react-router-dom";
import Data from "./EmployeeApi"; 
import "./Employee.css"


const Employee = () => {
  const { uniqueId } = useParams();
  const employee = Data.find((employee) => employee["Unique-Id"] === uniqueId);
  

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div className="Employee container my-3">
      <h2 className="text-center">Certificate of Internship</h2>
      <p className="text-center">This certificate provided by PopularPg is proof of the sheer grit, hard work, & dedication of Mr/Ms <span>{employee.name}</span> . Popularpg congratulates them on achieving yet another milestone.</p>
      <div className="row m-3 p-3 d-flex justify-content-center align-items-center">
        <div className="col-lg-10 "><img src={employee.certificate} alt="" className="img-fluid"/></div>
        
      </div>
    </div>
  );
};

export default Employee;
