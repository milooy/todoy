// import { createClient } from '@/utils/supabase/server';
import { DailyPage } from './DailyPage';

export default async function Daily() {
  // const supabase = createClient();
  // const { data: todos } = await supabase.from('todos').select('*');
  // console.log(todos);

  // const submitTodo = async (formData: FormData) => {
  //   'use server';
  //   const supabase = createClient();

  //   const todo = formData.get('todo') as string;
  //   const { data, error } = await supabase
  //     .from('todos')
  //     .insert([{ title: todo, category_index: 1 }])
  //     .select();
  //   console.log({ data });
  // };

  return (
    <>
      <DailyPage />
    </>
  );
}
