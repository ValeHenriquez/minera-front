'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/auth/login' || pathname === '/auth/signup' || pathname === '/req-access') {

      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [pathname]);


  //setShowSidebar(false); Para que no se muestre el sidebar

  return (
    <html lang="en">
      <body
      >
        <div className='flex h-screen'>
          {showSidebar && (
            <Sidebar
              collapsed={collapsed}
              setCollapsed={setSidebarCollapsed}
              shown={showSidebar}
            />
          )}
          {children}
        </div>
      </body>
    </html>
  );
}
