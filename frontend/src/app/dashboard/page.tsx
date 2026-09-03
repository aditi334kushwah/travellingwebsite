'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import { Users, Package, BookOpen, MessageCircle, Activity } from "lucide-react"

const Dashboard = () => {
  const [stats, setStats] = useState({ users: 0, packages: 0, bookings: 0, contacts: 0 });
  const [activity, setActivity] = useState<any[]>([]);

  const headers = { Authorization: `Bearer ${typeof window !== 'undefined' ? localStorage.getItem("access_token") : ''}` };

  useEffect(() => {
    axios.get("https://travellingwebsite-2.onrender.com/api/dashboard/stats/", { headers }).then(res => setStats(res.data)).catch(console.log);
    axios.get("https://travellingwebsite-2.onrender.com/api/dashboard/recent-activity/", { headers }).then(res => setActivity(res.data)).catch(console.log);
  }, []);

  const cards = [
    { title: "Users", value: stats.users, icon: Users, gradient: "from-blue-500 to-indigo-600" },
    { title: "Packages", value: stats.packages, icon: Package, gradient: "from-purple-500 to-pink-500" },
    { title: "Bookings", value: stats.bookings, icon: BookOpen, gradient: "from-green-500 to-emerald-600" },
    { title: "Contacts", value: stats.contacts, icon: MessageCircle, gradient: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 p-4 sm:p-6 mt-20">
      <div className="mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">Admin Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Welcome back. Here is your system overview</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className={`bg-gradient-to-r ${card.gradient} text-white p-5 sm:p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-80">{card.title}</p>
                  <h2 className="text-3xl font-bold mt-1">{card.value}</h2>
                </div>
                <Icon size={36} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="text-purple-600 dark:text-purple-400" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Recent Activity</h2>
          </div>
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {activity.length === 0 ? (
              <p className="text-gray-400">No recent activity</p>
            ) : (
              activity.map((item, index) => (
                <div key={index} className="p-3 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                  <p className="text-gray-700 dark:text-gray-200 text-sm font-semibold">{item.message}</p>
                  <span className="text-xs text-gray-400">{new Date(item.created_at).toLocaleString()}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
