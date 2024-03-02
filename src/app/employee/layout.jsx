
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
              {children}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
