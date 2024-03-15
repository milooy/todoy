import { createClient } from '@/utils/supabase/server';

export default async function Daily() {
  const supabase = createClient();
  const { data: todos } = await supabase.from("todos").select('*');
  console.log(todos)

  return <>
    <h1>Daily</h1>
    <pre>{JSON.stringify(todos, null, 2)}</pre>
  </>
}