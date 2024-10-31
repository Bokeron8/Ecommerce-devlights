import React from "react";

function InputWithIcons({
  id,
  placeholder,
  type = "text",
  StartIcon,
  EndIcon,
}: {
  id: string;
  placeholder: string;
  type?: "text" | "password";
  StartIcon?: React.ReactElement;
  EndIcon?: React.ReactElement;
}) {
  return (
    <div className="w-full relative">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full p-4 pl-11 rounded-lg bg-[#F3F3F3]"
      />
      {StartIcon && (
        <div className="h-fit absolute left-3 top-0 bottom-0 my-auto">
          {StartIcon}
        </div>
      )}
      {EndIcon && (
        <div className="h-fit absolute right-3 top-0 bottom-0 my-auto">
          {EndIcon}
        </div>
      )}
    </div>
  );
}

export default InputWithIcons;
