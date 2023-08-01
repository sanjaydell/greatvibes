import React from "react";

function MiniTextField({ label, value, placeholder, onChange, hideLabel }) {
  return (
    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
      <div className="self-stretch h-[60px] flex-col justify-start items-start gap-1 flex">
        <div className="justify-between items-center gap-2 inline-flex">
          <div className={`${!hideLabel ? "text-neutral-800" : "text-white"} text-sm font-medium leading-tight`}>
            {label}
          </div>
        </div>
        <div className="self-stretch px-3 py-2 bg-white rounded-[5px] border border-neutral-200 justify-start items-start gap-2.5 inline-flex">
          <div className="grow shrink basis-0 h-5 justify-start items-center flex">
            <input
              className="text-neutral-500 text-sm font-normal leading-tight flex align-middle flex-1 focus:outline-none"
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
  );
}

export default MiniTextField;
