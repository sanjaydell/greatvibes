import React from "react";

function TextField({ label, value, placeholder, onChange, mandatory=false }) {
  return (
    <>
      <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch h-[60px] flex-col justify-start items-start gap-1 flex">
          <div className="w-[214px] justify-start items-center gap-2 inline-flex">
            <label className="text-neutral-800 text-sm font-medium leading-tight">
              {label}
              {mandatory && <span className="text-red-400 text-sm font-medium leading-tight">*</span>}
            </label>
          </div>
          <div className="self-stretch px-3 py-2 bg-white rounded-[5px] border border-neutral-200 justify-start items-start gap-2 inline-flex">
            <div className="grow shrink basis-0 h-5 justify-start align-middle flex">
              <input
                className="text-neutral-500 text-sm font-normal leading-tight flex flex-1 focus:outline-none"
                type="text"
                id="text-field"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextField;
