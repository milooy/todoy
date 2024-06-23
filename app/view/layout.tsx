import SideNav from "@/components/layouts/SideNav";
import TopNavBar from "@/components/layouts/TopNavbar";
import { GoalsPage } from "@/app/view/goals/GoalsPage";

export default function ViewLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNavBar />
      <div className="flex h-screen">
        <SideNav />
        <main>{children}</main>
      </div>
    </>
  );
}
