import { createClient } from '@/utils/supabase/client';
import { useQuery } from '@tanstack/react-query';

// TODO: supabase/client, supabase/server iso하게 쓰려면 어떻게 해야할지 고민
const supabase = createClient();

export async function fetchUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export function useUser() {
  return useQuery({ queryKey: ['useUser'], queryFn: fetchUser });
}

export async function postSignOut() {
  await supabase.auth.signOut();
}
