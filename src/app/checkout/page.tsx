import React from "react";
import FormCard from "@/app/components/FormCard";
import PersonIcon from "@/app/icons/PersonIcon";
import ChevronLeft from "@/app/icons/ChevronLeft";
function Checkout() {
  return (
    <FormCard className="md:w-[40%] m-auto my-4 px-10">
      <div className="w-full flex justify-center relative">
        <a
          href="#"
          className="flex absolute left-0 text-[#3163E2] font-semibold"
        >
          <ChevronLeft />
          Volver
        </a>
        <h1 className="font-semibold">Checkout</h1>
      </div>
      <div className="shadow-md shadow-gray-500 rounded-full p-6">
        <PersonIcon size={42} />
      </div>

      <section className="w-full flex flex-col gap-4">
        <h2 className="font-semibold text-lg">Personal Details</h2>
        <h3 className="text-sm">Email Address</h3>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="someemail@mail.com"
          className="p-4 border-[1px] border-[#c8c8c8] rounded-lg shadow-sm"
        />
        <h3 className="text-sm">Password</h3>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="*********"
          className="p-4 border-[1px] border-[#c8c8c8] rounded-lg shadow-sm"
        />
      </section>

      <section className="w-full flex flex-col gap-4 after:border-[0.5px] after:border-[#C4C4C4] after:w-[80%] after:mx-auto before:border-[0.5px] before:border-[#C4C4C4] before:w-[80%] before:mx-auto py-4">
        <h2 className="font-semibold text-lg">Business Address Details</h2>
        <h3 className="text-sm">Adress</h3>
        <input
          type="text"
          name="adress"
          id="adress"
          placeholder="Junin, 1250"
          className="p-4 border-[1px] border-[#c8c8c8] rounded-lg shadow-sm"
        />
        <h3 className="text-sm">City</h3>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Corrientes Capital"
          className="p-4 border-[1px] border-[#c8c8c8] rounded-lg shadow-sm"
        />
        <h3 className="text-sm">Provincia</h3>
        <select
          className="p-4 border-[1px] border-[#c8c8c8] rounded-lg shadow-sm"
          name="provincia"
          id="provincia"
          defaultValue={"Corrientes"}
        >
          <option value="Chaco">Chaco</option>
          <option value="Corrientes" selected>
            Corrientes
          </option>
          <option value="Buenos Aires">Buenos Aires</option>
        </select>
        <h3 className="text-sm">Country</h3>
        <input
          type="text"
          name="country"
          id="country"
          placeholder="Argentina"
          className="p-4 border-[1px] border-[#c8c8c8] rounded-lg shadow-sm"
        />
      </section>

      <section className="w-full flex flex-col gap-4">
        <h2 className="font-semibold text-lg">Card Account</h2>
        <h3 className="text-sm">Bank Account Number</h3>
        <input
          type="number"
          name="card-number"
          id="card-number"
          placeholder="203456XXXXXX"
          className="p-4 border-[1px] border-[#c8c8c8] rounded-lg shadow-sm"
        />
        <h3 className="text-sm">Account Holder&apos;s Name</h3>
        <input
          type="text"
          name="card-name"
          id="card-name"
          placeholder="Juan Perez"
          className="p-4 border-[1px] border-[#c8c8c8] rounded-lg shadow-sm"
        />
        <h3 className="text-sm">CVC Code</h3>
        <input
          type="number"
          name="cvc-code"
          id="cvc-code"
          placeholder="123"
          className="p-4 border-[1px] border-[#c8c8c8] rounded-lg shadow-sm"
        />
      </section>
      <button className="p-3 text-white bg-[#F83758] rounded-md text-xs md:text-sm w-full">
        Save
      </button>
    </FormCard>
  );
}

export default Checkout;
