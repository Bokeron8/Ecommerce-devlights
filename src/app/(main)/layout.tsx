import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "E-Commerce DevLights",
  description: "E-Commerce for devlight app",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#F7F7F7]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
