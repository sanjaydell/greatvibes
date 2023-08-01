import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import axios from "axios";
import JobModal from "./JobModal";
import { getAllJobs } from "../api/api";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [jobId, setJobId] = useState();

  function onEditClick(id) {
    setModalOpen(true);
    setJobId(id);
  }

  useEffect(() => {
    getJobs();
  }, []);

  async function getJobs() {
    const allJobs = await getAllJobs();
    setJobs(allJobs.reverse());
  }
  
  return (
    <div className="flex flex-col gap-8">
      <button
        className="mt-4 w-32 flex-1 border-0.5 px-2 py-2 ml-20 bg-blue-500 text-white rounded-lgv justify-start"
        onClick={() => {setModalOpen(true)}}
      >
        Create a job
      </button>
      <JobModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        jobId={jobId}
        getJobs={getJobs}
      />
      <div className="flex flex-row flex-wrap justify-evenly gap-8 mb-16">
        {/* <div className="grid grid-cols-2 gap-62 overflow-x-scroll"> */}
        {jobs.map((job) => {
          return <Card job={job} setJobId={onEditClick} getJobs={getJobs} />;
        })}
      </div>
    </div>
  );
}

export default Home;
