import React from "react";

function FormHeader({ title }: { title: string }) {
  return (
    <>
      <h1 className="text-2xl">
        <b>{title}</b>
      </h1>
      <h3>Access to our dashboard</h3>
    </>
  );
}

function FormCard({
  children,
  className,
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={`w-9/12 flex justify-center items-center flex-col bg-white p-6 shadow-[0_2px_8px_0px_rgba(0,0,0,0.15)] rounded-md gap-4 ${className}`}
    >
      {children}
    </div>
  );
}

FormCard.Header = FormHeader;

export default FormCard;
