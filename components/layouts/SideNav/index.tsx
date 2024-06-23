"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const ROUTES = [
  { label: "Day", path: "/view/daily" },
  { label: "Goals", path: "/view/goals" },
  { label: "Review", path: "/view/review" },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-1/6 bg-gray-200 p-4">
      <div className="flex flex-col items-center">
        <div className="bg-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl">J</div>
        <nav className="mt-8">
          <ul className="space-y-4 text-lg">
            {ROUTES.map(({ label, path }) => (
              <li key={label} className={pathname === path ? "font-bold" : ""}>
                <Link href={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
