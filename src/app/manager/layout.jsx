"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ReduxProvider from "@/store/ReduxProvider";
import {
  isAuthenticated,
  protectRouteByRole,
  isManager
} from "@/util/middleware";
import { ActivityIndicator } from "@/components/Activity_indicator";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const protectRoute = protectRouteByRole("manager", router);
    const checkAuthentication = async () => {
      setIsLoading(true); // Start loading

      if (!isAuthenticated()) {
        router.push("/");
      } else {
        // Check if the user has the "itadmin" role
        protectRoute();
      }

      setIsLoading(false); // Stop loading
    };

    checkAuthentication();
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <ActivityIndicator />
      </div>
    );
  }

  if (!isLoading && isAuthenticated() && isManager()) {
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

  // If not loading and user is not authenticated, do not render anything
  return null;
}
