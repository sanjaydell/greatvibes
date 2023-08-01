import React from "react";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import { deleteJobById } from "../api/api";

function Card({ job, setJobId, getJobs }) {
  const {
    jobTitle,
    id,
    companyName,
    industry,
    location,
    remoteType,
    experienceMinimum,
    experienceMaximum,
    salaryMinimum,
    salaryMaximum,
    totalEmployees,
    applyType,
  } = job;

  async function deleteJob() {
    try {
      await deleteJobById(id);
      getJobs();
      alert("Job successfully deleted");
    } catch (error) {
      console.log(error);
      alert("Something went wrong! Please try again");
    }
  }

  return (
    <div className="w-2/5 h-80 flex flex-row justify-between gap-8 bg-white px-6 py-4">
      <div className="flex justify-start">
        <div className="flex justify-between gap-6">
          <img src="logo.png" alt="logo" className="h-12 w-12" />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="text-black text-2xl font-normal">{jobTitle}</div>
              <div className="text-black text-base font-normal">
                {companyName} - {industry}
              </div>
              <h4 className="text-neutral-500 text-base font-normal leading-normal">
                {location} ({remoteType})
              </h4>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-neutral-800 text-base font-normal leading-normal">
                Part-Time (9.00 am - 5.00 pm IST)
              </h4>
              <h4 className="text-neutral-800 text-base font-normal leading-normal">
                Experience ({experienceMinimum} - {experienceMaximum} years)
              </h4>
              <h4 className="text-neutral-800 text-base font-normal leading-normal">
                INR (₹) {salaryMinimum} - {salaryMaximum} / Month
              </h4>
              <h4 className="text-neutral-800 text-base font-normal leading-normal">
                {totalEmployees} employees
              </h4>
            </div>
            {applyType === "QUICK_APPLY" ? (
              <button className="block w-36 px-4 py-2 rounded-md bg-blue-500 text-white rounded-lgv">
                Apply now
              </button>
            ) : (
              <button className="border-blue-500 border block w-36 px-4 py-2 rounded-md text-blue-500 bg-white rounded-lgv">
                External apply
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <DeleteButton onClick={() => deleteJob()} />
        <EditButton onClick={() => setJobId(id)} />
      </div>
    </div>
  );
}

export default Card;
