"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { LayoutDashboard, FolderKanban, Users, FileText, Settings, LogOut } from "lucide-react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col hidden md:flex min-h-screen sticky top-0">
        <div className="p-6 border-b border-slate-800 bg-white m-4 rounded-xl">
          <img src="/logo.jpeg" alt="Kairos Interior Logo" className="w-full object-contain" />
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin/dashboard" className="flex items-center gap-3 bg-blue-600/20 text-blue-400 px-4 py-3 rounded-lg font-medium transition">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/admin/projects" className="flex items-center gap-3 text-slate-300 hover:bg-slate-800 hover:text-white px-4 py-3 rounded-lg font-medium transition">
            <FolderKanban size={20} /> Projects
          </Link>
          <Link href="/admin/leads" className="flex items-center gap-3 text-slate-300 hover:bg-slate-800 hover:text-white px-4 py-3 rounded-lg font-medium transition">
            <Users size={20} /> Leads
          </Link>
          <Link href="/admin/blog" className="flex items-center gap-3 text-slate-300 hover:bg-slate-800 hover:text-white px-4 py-3 rounded-lg font-medium transition">
            <FileText size={20} /> Blog Posts
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 text-slate-300 hover:bg-slate-800 hover:text-white px-4 py-3 rounded-lg font-medium transition mt-auto">
            <Settings size={20} /> Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button onClick={() => signOut()} className="flex items-center gap-3 w-full text-slate-300 hover:bg-slate-800 hover:text-white px-4 py-3 rounded-lg font-medium transition text-left">
            <LogOut size={20} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">Welcome, {session?.user?.name}</span>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold border border-blue-200">
              {session?.user?.name?.charAt(0)}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 flex-1 overflow-y-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="bg-blue-100 p-4 rounded-xl text-blue-600"><Users size={28} /></div>
              <div>
                <p className="text-sm text-gray-500 font-medium">New Leads</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="bg-green-100 p-4 rounded-xl text-green-600"><FolderKanban size={28} /></div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Active Projects</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="bg-purple-100 p-4 rounded-xl text-purple-600"><FileText size={28} /></div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Blog Posts</p>
                <p className="text-2xl font-bold text-gray-900">48</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="bg-yellow-100 p-4 rounded-xl text-yellow-600"><Settings size={28} /></div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Views Today</p>
                <p className="text-2xl font-bold text-gray-900">1,204</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Recent Form Submissions</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-sm text-gray-500">
                    <th className="pb-3 font-medium">Name</th>
                    <th className="pb-3 font-medium">Email</th>
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-50 hover:bg-gray-50 transition">
                    <td className="py-4 font-medium text-gray-900">Budi Santoso</td>
                    <td className="py-4 text-gray-600">budi@example.com</td>
                    <td className="py-4 text-gray-600">Today, 10:30 AM</td>
                    <td className="py-4"><span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs font-semibold">New</span></td>
                    <td className="py-4"><button className="text-blue-600 hover:text-blue-800 font-medium">View</button></td>
                  </tr>
                  <tr className="border-b border-gray-50 hover:bg-gray-50 transition">
                    <td className="py-4 font-medium text-gray-900">Siti Aminah</td>
                    <td className="py-4 text-gray-600">siti.a@gmail.com</td>
                    <td className="py-4 text-gray-600">Yesterday, 14:15 PM</td>
                    <td className="py-4"><span className="bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-full text-xs font-semibold">Contacted</span></td>
                    <td className="py-4"><button className="text-blue-600 hover:text-blue-800 font-medium">View</button></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-4 font-medium text-gray-900">Agus Pratama</td>
                    <td className="py-4 text-gray-600">agus_p@yahoo.com</td>
                    <td className="py-4 text-gray-600">Oct 24, 2023</td>
                    <td className="py-4"><span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-semibold">Closed</span></td>
                    <td className="py-4"><button className="text-blue-600 hover:text-blue-800 font-medium">View</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center">
              <Link href="/admin/leads" className="text-sm font-medium text-blue-600 hover:text-blue-800">View All Submissions &rarr;</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
