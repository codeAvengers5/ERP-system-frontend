import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ReduxProvider from "@/store/ReduxProvider";

export default function DashboardLayout({ children }) {
  return (
    <ReduxProvider>
      <section>
        <div className="flex bg-[#F5F8FA]">
          <Sidebar />
          <div className="flex-0 flex w-[100dvw] flex-col">
            <Navbar />
            <main>
              <div className="relative overflow-y-auto">{children}</div>
            </main>
          </div>
        </div>
      </section>
    </ReduxProvider>
  );
}
