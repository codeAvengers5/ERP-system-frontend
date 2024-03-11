import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ReduxProvider from "@/store/ReduxProvider";

export default function DashboardLayout({ children }) {
  return (
    <ReduxProvider>
      <section>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <Navbar />
            <main>
              <div className="absolute left-0 mx-auto mt-[10px] max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
              </div>
            </main>
          </div>
        </div>
      </section>
    </ReduxProvider>
  );
}
