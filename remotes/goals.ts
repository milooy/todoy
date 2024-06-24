import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";
const supabase = createClient();

export type Goal = {
  id: string;
  title: string;
  section_index: number;
};

export async function fetchGoals() {
  const res = await supabase.from("goals").select("*");
  return res.data;
}

export function useGoals() {
  return useQuery({
    queryKey: ["useGoals"],
    queryFn: () => fetchGoals(),
  });
}

export async function createGoal({ title }: { title: string }) {
  const { data, error } = await supabase.from("goals").insert([{ title }]).select();
  if (error) {
    throw error;
  }
  return data;
}
