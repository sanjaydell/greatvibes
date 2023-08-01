import React from "react";
import EditIcon from "../icons/EditIcon";

function EditButton({ onClick }) {
  return (
    <div onClick={onClick} className="relative flex flex-col items-center group">
      <EditIcon />
      <div class="absolute hidden flex-col items-center mb-6 group-hover:flex">
        <span class="relative top-6 z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
          Edit
        </span>
        <div class="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
      </div>
    </div>
  );
}

export default EditButton;