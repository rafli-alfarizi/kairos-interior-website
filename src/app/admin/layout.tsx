"use client";

import { SessionProvider } from "next-auth/react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-gray-100 flex">
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
