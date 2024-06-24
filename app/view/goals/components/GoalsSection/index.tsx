import Section from "@/components/layouts/Section";
import React from "react";
import GoalListRow from "./GoalListRow";
import { useGoals, createGoal } from "@/remotes/goals";

function GoalsSection() {
  const { data: goals, refetch: refetchGoals } = useGoals();
  return (
    <Section>
      <Section.Heading>Goals</Section.Heading>
      <Section.MainInputForm
        onSubmit={async (e, { value }) => {
          e.preventDefault();
          await createGoal({ title: value });
          refetchGoals();
        }}
      />
      <ul>{goals?.map((goal) => <GoalListRow label={goal.title} status={goal.status} />)}</ul>
    </Section>
  );
}

export default GoalsSection;
