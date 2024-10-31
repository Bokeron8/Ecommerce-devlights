import React from "react";
import FormCard from "@/app/components/FormCard";
import InputWithIcons from "@/app/components/LoginInput";
import PasswordInput from "@/app/components/PasswordInput";
import PersonIcon from "@/app/icons/PersonIcon";
function Login() {
  return (
    <FormCard>
      <FormCard.Header title="Login" />
      <form action="" className="w-10/12 flex flex-none flex-col gap-5">
        <InputWithIcons
          id="username"
          placeholder="Username or Email"
          StartIcon={<PersonIcon />}
        />

        <PasswordInput placeholder="Password" id="password" />
        <p className="text-sm text-end text-rose-700">Forgot password?</p>
        <button
          type="submit"
          id="login"
          className="bg-[#3163E2] text-white py-3 text-xl rounded-lg"
        >
          Login
        </button>
      </form>
      <p>
        Don&apos;t have an account yet?<b> Register</b>
      </p>
    </FormCard>
  );
}

export default Login;
