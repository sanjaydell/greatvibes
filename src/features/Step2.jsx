import React from "react";
import MiniTextField from "../components/MiniTextField";
import TextField from "../components/TextField";
import CloseIcon from "../icons/CloseIcon";

function Step2({ jobInformation, setJobInformation, setModalOpen }) {
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
      <div className="flex flex-row gap-6">
        <MiniTextField
          label="Experience"
          value={jobInformation?.experienceMinimum}
          placeholder="Minimum"
          onChange={(event) =>
            handleChange("experienceMinimum", event.target.value)
          }
        />
        <MiniTextField
          label="Experience"
          hideLabel
          value={jobInformation?.experienceMaximum}
          placeholder="Maximum"
          onChange={(event) =>
            handleChange("experienceMaximum", event.target.value)
          }
        />
      </div>
      <div className="flex flex-row gap-6">
        <MiniTextField
          label="Salary"
          value={jobInformation?.salaryMinimum}
          placeholder="Minimum"
          onChange={(event) =>
            handleChange("salaryMinimum", event.target.value)
          }
        />
        <MiniTextField
          label="Salary"
          hideLabel
          value={jobInformation?.salaryMaximum}
          placeholder="Maximum"
          onChange={(event) =>
            handleChange("salaryMaximum", event.target.value)
          }
        />
      </div>
      <TextField
        label="Total employee"
        value={jobInformation?.totalEmployees}
        placeholder="ex. UX UI 100"
        onChange={(event) => handleChange("totalEmployees", event.target.value)}
      />
      <div className="w-[214px] justify-start items-center gap-2 inline-flex">
        <label className="text-neutral-800 text-sm font-medium leading-tight">
          Apply type
        </label>
      </div>
      <div className="flex flex-row flex-1 gap-1">
        <input
          name="applyType"
          onChange={(event) => handleChange("applyType", event.target.value)}
          checked={jobInformation?.applyType === "QUICK_APPLY"}
          id="QUICK_APPLY"
          type="radio"
          value="QUICK_APPLY"
        />
        <label className="text-neutral-500 text-sm font-normal leading-tight">
          Quick Apply
        </label>
        <input
          name="applyType"
          onChange={(event) => handleChange("applyType", event.target.value)}
          checked={jobInformation?.applyType === "EXTERNAL_APPLY"}
          id="EXTERNAL_APPLY"
          type="radio"
          value="EXTERNAL_APPLY"
        />
        <label className="text-neutral-500 text-sm font-normal leading-tight">
          External Apply
        </label>
      </div>
    </div>
  );
}

export default Step2;
