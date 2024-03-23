import { useQuery } from '@tanstack/react-query';

export async function fetchSections() {
  // const res = await supabase.from('sections').select('*');
  return [
    { index: 0, title: 'Grow' },
    { index: 1, title: 'Agile' },
    { index: 2, title: 'Chore' },
    { index: 3, title: 'Happy' },
  ];
}

export function useSections() {
  return useQuery({ queryKey: ['useSections'], queryFn: fetchSections });
}
