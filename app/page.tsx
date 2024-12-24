import type { Metadata } from "next";
import { Navbar } from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

export default function IndexPage() {
  return (
    <main className="max-w-[1500px] m-auto">
      <Dashboard />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
