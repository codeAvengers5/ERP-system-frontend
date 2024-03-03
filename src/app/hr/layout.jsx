import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ReduxProvider from "@/store/ReduxProvider";

export default function DashboardLayout({ children }) {
  return (
    <ReduxProvider>
    <section>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Navbar />
          <main>
            <div className="mt-[10px]">{children}</div>
          </main>
        </div>
      </div>
    </section>
    </ReduxProvider>
  );
}
