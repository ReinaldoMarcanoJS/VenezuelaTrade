import type { Metadata } from "next";
import Dashboard from "./pages/Dashboard";

export default function IndexPage() {
  return (
    <main className="max-w-[1500px] m-auto">
      <Dashboard />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Venezuela Trade",
};
