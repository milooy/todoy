'use client';

import TopNavBar from '@/components/layouts/TopNavbar';
import TodoSections from '../components/TodoSections.tsx';

export function DailyPage() {
  return (
    <main>
      <TopNavBar />
      <TodoSections />
    </main>
  );
}
