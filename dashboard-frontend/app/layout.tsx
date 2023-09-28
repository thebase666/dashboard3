import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";

import Login from "@/components/Login";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className='flex'>
              <div className=' bg-gray-100 w-[180px] h-screen md:min-w-[240px]'>
                <Sidebar />
              </div>

              <div className='w-full h-screen'>
                <main>{children}</main>
              </div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
