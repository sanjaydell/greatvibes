import React, { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { InitialJobState } from "../constants/InitialJobState";
import { createJob, getJobById, updateJobById } from "../api/api";

export default function JobModal({ modalOpen, setModalOpen, jobId, getJobs }) {
  const [displayStep, setDisplayStep] = useState(0);
  const [jobInformation, setJobInformation] = useState(InitialJobState);
  const [errors, setErrors] = useState(true);

  useEffect(() => {
    if (jobId) {
      getJob();
    }
  }, [jobId]);

  const handleClose = () => {
    setJobInformation(InitialJobState);
    setModalOpen(false);
    setDisplayStep(0);
  };

  function goToNext() {
    if (!errors) {
      setDisplayStep(1);
    } else {
      alert("Fill all the mandatory fields");
    }
    console.log("11111111111", jobInformation);
  }

  async function getJob() {
    try {
      const jobData = await getJobById(jobId);
      setJobInformation(jobData);
    } catch (error) {
      console.error(error);
    }
  }

  async function updateJob() {
    try {
      await updateJobById(jobId, jobInformation);
      handleClose();
      getJobs();
    } catch (error) {
      console.log(error);
    }
  }

  function createNewJob() {
    createJob(jobInformation)
      .then(() => {
        handleClose();
        getJobs();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center z-50 ${
        modalOpen ? "visible" : "invisible"
      }`}
      handleClickOutside={() => setModalOpen(false)}
    >
      <div className="bg-white w-[577px] h-[564px] p-4 mx-auto rounded-lg shadow-lg flex-col justify-start gap-24 flex">
        <div>
          {displayStep === 0 ? (
            <Step1
              jobInformation={jobInformation}
              setJobInformation={setJobInformation}
              setErrors={setErrors}
              setModalOpen={setModalOpen}
            />
          ) : (
            <Step2
              jobInformation={jobInformation}
              setJobInformation={setJobInformation}
              setModalOpen={setModalOpen}
            />
          )}
        </div>
        <div className="self-stretch justify-end items-center inline-flex">
          <div className="justify-start items-start gap-6 flex">
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={
                displayStep === 0 ? goToNext : jobId ? updateJob : createNewJob
              }
            >
              {displayStep === 0 ? "Next" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
