import React from "react";

import FormCard from "@/app/components/FormCard";
import LoginInput from "@/app/components/LoginInput";
import PasswordInput from "@/app/components/PasswordInput";
import PersonIcon from "@/app/icons/PersonIcon";

function Register() {
  return (
    <FormCard>
      <FormCard.Header title="Register" />
      <form action="" className="w-10/12 flex flex-none flex-col gap-5">
        <LoginInput
          id="username"
          placeholder="Username or Email"
          StartIcon={<PersonIcon />}
        />

        <PasswordInput placeholder="Password" id="password" />
        <PasswordInput placeholder="Confirm Password" id="confirm-password" />
        <button
          type="submit"
          id="register"
          className="bg-[#3163E2] text-white py-3 text-xl rounded-lg"
        >
          Register
        </button>
      </form>
      <p>
        Already have an account?<b> Login</b>
      </p>
    </FormCard>
  );
}

export default Register;
