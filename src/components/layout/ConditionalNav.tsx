"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

// Routes where the global Navbar + Footer should be hidden
const hideNavRoutes = ["/dashboard", "/login", "/signup", "/success"];

export function ConditionalNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNav = hideNavRoutes.some((route) => pathname?.startsWith(route));

  return (
    <>
      {!hideNav && <Navbar />}
      <main id="main-content" role="main">
        {children}
      </main>
      {!hideNav && <Footer />}
    </>
  );
}
