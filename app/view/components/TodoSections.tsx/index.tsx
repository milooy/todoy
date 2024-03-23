import { useSections } from '@/remotes/sections';
import TodoSection from './TodoSection';

export default function TodoSections() {
  const { data: sections } = useSections();
  return (
    <>
      {sections?.map(section => (
        <TodoSection
          key={section.index}
          index={section.index}
          title={section.title}
        />
      ))}
    </>
  );
}
