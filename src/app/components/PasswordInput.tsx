import React from "react";
import Lock from "@/app/icons/Lock";
import Eye from "@/app/icons/Eye";
import InputWithIcons from "./LoginInput";
function PasswordInput({
  id,
  placeholder,
}: {
  id: string;
  placeholder: string;
}) {
  return (
    <InputWithIcons
      id={id}
      placeholder={placeholder}
      StartIcon={<Lock />}
      EndIcon={<Eye />}
      type="password"
    />
  );
}

export default PasswordInput;
