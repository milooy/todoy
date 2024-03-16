import { createClient } from '@/utils/supabase/client';
import { useQuery } from '@tanstack/react-query';
const supabase = createClient();

export async function fetchTodos() {
  const res = await supabase.from('todos').select('*');
  return res.data;
}

/**
 * TODO: next13 initialData로 서버에서 prefetch
 * https://tanstack.com/query/v4/docs/framework/react/guides/ssr#using-initialdata
 */
export function useTodos() {
  return useQuery({ queryKey: ['todos'], queryFn: fetchTodos });
}

export async function createTodos({
  title,
  categoryIndex,
}: {
  title: string;
  categoryIndex: number;
}) {
  const { data, error } = await supabase
    .from('todos')
    .insert([{ title, category_index: categoryIndex }])
    .select();
  if (error) {
    throw error;
  }
  return data;
}
