import React from "react";

const GoalListRow = ({ label, tags, status, focused }: { label: string; status: string; focused?: boolean; tags?: string[] }) => {
  return (
    <li className={`flex justify-between items-center mb-2 ${focused ? "bg-slate-100" : ""}`}>
      <span>{label}</span>
      <span>{tags?.map((tag) => tag).join(", ")}</span>
      <span className="bg-green-200 p-1 rounded">{status}</span>
    </li>
  );
};

export default GoalListRow;
