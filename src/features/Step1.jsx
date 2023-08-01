import React, { useEffect } from "react";
import TextField from "../components/TextField";
import MiniTextField from "../components/MiniTextField";
import CloseIcon from "../icons/CloseIcon";

function Step1({ jobInformation, setJobInformation, setErrors, setModalOpen }) {
  useEffect(() => {
    const { jobTitle, companyName, industry } = jobInformation || {};
    setErrors(!jobTitle || !companyName || !industry);
  }, [jobInformation, setErrors]);

  const handleChange = (field, value) => {
    setJobInformation((prevJobInfo) => ({
      ...prevJobInfo,
      [field]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row justify-between">
        <h3 className="grow shrink basis-0 text-zinc-900 text-xl font-normal leading-7">
          Create a job
        </h3>
        <div className="flex flex-row cursor-pointer">
          <h2 className="grow shrink basis-0 text-right text-zinc-900 text-base font-medium leading-normal">
            step 1
          </h2>
          <div
            onClick={() => {
              setModalOpen(false);
            }}
          >
            <CloseIcon />
          </div>
        </div>
      </div>
      <TextField
        label="Job title"
        mandatory
        value={jobInformation?.jobTitle}
        placeholder="ex. UX UI Designer"
        onChange={(event) => handleChange("jobTitle", event.target.value)}
      />
      <TextField
        label="Company name"
        mandatory
        value={jobInformation?.companyName}
        placeholder="ex. Google"
        onChange={(event) => handleChange("companyName", event.target.value)}
      />
      <TextField
        label="Industry"
        mandatory
        value={jobInformation?.industry}
        placeholder="ex. Information Technology"
        onChange={(event) => handleChange("industry", event.target.value)}
      />
      <div className="flex flex-row gap-6">
        <MiniTextField
          label="Location"
          value={jobInformation?.location}
          placeholder="ex. Chennai"
          onChange={(event) => handleChange("location", event.target.value)}
        />
        <MiniTextField
          label="Remote type"
          value={jobInformation?.remoteType}
          placeholder="ex. in-office"
          onChange={(event) => handleChange("remoteType", event.target.value)}
        />
      </div>
    </div>
  );
}

export default Step1;
