import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Navbar />
          <main>
            <div className="hideScrollbar  fixed top-[100px] h-full  overflow-x-auto pb-20 md:top-[56px] lg:left-[240px]">
              {children}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
