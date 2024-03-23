import { createClient } from '@/utils/supabase/client';
import { useQuery } from '@tanstack/react-query';
const supabase = createClient();

export type Todo = {
  id: string;
  title: string;
  section_index: number;
};

export async function fetchTodos(options?: { sectionIndex?: number }) {
  if (options?.sectionIndex !== undefined) {
    const res = await supabase
      .from('todos')
      .select('*')
      .eq('section_index', options.sectionIndex);
    return res.data;
  }
  const res = await supabase.from('todos').select('*');
  return res.data;
}

/**
 * TODO: next13 initialData로 서버에서 prefetch
 * https://tanstack.com/query/v4/docs/framework/react/guides/ssr#using-initialdata
 */
export function useTodos(options?: { sectionIndex?: number }) {
  return useQuery({
    queryKey: ['useTodos', options?.sectionIndex],
    queryFn: () => fetchTodos(options),
  });
}

export async function createTodos({
  title,
  sectionIndex,
}: {
  title: string;
  sectionIndex: number;
}) {
  const { data, error } = await supabase
    .from('todos')
    .insert([{ title, section_index: sectionIndex }])
    .select();
  if (error) {
    throw error;
  }
  return data;
}
