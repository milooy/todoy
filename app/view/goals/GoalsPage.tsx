"use client";

import ActionsSection from "./components/ActionsSection";
import GoalsSection from "./components/GoalsSection";
import TodaySection from "./components/TodaySection";

export function GoalsPage() {
  return (
    <div className="flex flex-grow">
      <GoalsSection />
      <ActionsSection />
      <TodaySection />
    </div>
  );
}
