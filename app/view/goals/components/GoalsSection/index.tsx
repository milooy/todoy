import Section from "@/components/layouts/Section";
import React from "react";
import GoalListRow from "./GoalListRow";

const GOALS = [
  { label: "히히", tags: ["tag1", "tag2"], status: "status1" },
  { label: "히히2", tags: ["tag1", "tag2"], status: "status 2" },
];

function Goals() {
  return (
    <Section>
      <Section.Heading>Goals</Section.Heading>
      <Section.MainInputForm onSubmit={() => 1} />
      <ul>
        {GOALS.map((goal) => (
          <GoalListRow label={goal.label} status={goal.status} />
        ))}
      </ul>
    </Section>
  );
}

export default Goals;
