'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import { Users, Package, BookOpen, MessageCircle, Activity, Download } from "lucide-react"
import BookingTicketModal, { BookingTicketData } from "@/components/booking/BookingTicketModal"

const Dashboard = () => {
  const [stats, setStats] = useState({ users: 0, packages: 0, bookings: 0, contacts: 0 });
  const [activity, setActivity] = useState<Array<{ message: string; created_at: string }>>([]);
  const [bookings, setBookings] = useState<Array<Record<string, unknown>>>([]);
  const [selectedBooking, setSelectedBooking] = useState<BookingTicketData | null>(null);

  const headers = { Authorization: `Bearer ${typeof window !== 'undefined' ? localStorage.getItem("access_token") : ''}` };

  useEffect(() => {
    axios.get("https://travellingwebsite-2.onrender.com/api/dashboard/stats/", { headers }).then(res => setStats(res.data)).catch(console.log);
    axios.get("https://travellingwebsite-2.onrender.com/api/dashboard/recent-activity/", { headers }).then(res => setActivity(res.data)).catch(console.log);
    
    // Fetch bookings for voucher generation
    axios.get("https://travellingwebsite-2.onrender.com/api/bookings/", { headers })
      .then(res => {
        const data = Array.isArray(res.data) ? res.data : (res.data?.results || []);
        setBookings(data);
      })
      .catch(console.log);
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
        {/* Bookings & Vouchers Table */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Bookings & Travel Vouchers</h2>
            </div>
            <span className="text-xs bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full font-semibold">
              {bookings.length} Total
            </span>
          </div>

          <div className="overflow-x-auto">
            {bookings.length === 0 ? (
              <p className="text-gray-400 py-6 text-center">No bookings found yet.</p>
            ) : (
              <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
                <thead className="bg-gray-50 dark:bg-gray-700/50 text-xs uppercase text-gray-500 dark:text-gray-400">
                  <tr>
                    <th className="px-4 py-3">Traveler</th>
                    <th className="px-4 py-3">Package / Details</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {bookings.map((b: any) => (
                    <tr key={b.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition">
                      <td className="px-4 py-3">
                        <p className="font-semibold text-gray-900 dark:text-white">{b.name}</p>
                        <p className="text-xs text-gray-400">{b.email}</p>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-gray-800 dark:text-gray-200">
                            {b.package_details?.title || b.package?.title || "Custom Package"}
                          </p>
                          {(b.package_details?.package_code || b.package?.package_code) && (
                            <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300">
                              {b.package_details?.package_code || b.package?.package_code}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400">
                          {b.number_of_people} guests • {b.travel_month}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 uppercase">
                          {b.status || "confirmed"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          onClick={() =>
                            setSelectedBooking({
                              id: b.id,
                              name: b.name,
                              email: b.email,
                              phone: b.phone,
                              country: b.country,
                              number_of_people: b.number_of_people,
                              travel_month: b.travel_month,
                              budget_per_person: b.budget_per_person,
                              special_requirements: b.special_requirements,
                              status: b.status || "CONFIRMED",
                              created_at: b.created_at,
                              package_code: b.package_details?.package_code || b.package?.package_code || `PKG-${b.package_details?.id || b.package?.id || b.package}`,
                              package_title: b.package_details?.title || b.package?.title || "Custom Tour",
                              package_location: b.package_details?.location || b.package?.location,
                              duration_days: b.package_details?.duration_days,
                              duration_nights: b.package_details?.duration_nights,
                            })
                          }
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-semibold shadow transition"
                        >
                          <Download size={13} />
                          Voucher / PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 sm:p-6">
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

      {/* Ticket / Voucher Modal with 1-Click PDF Download */}
      <BookingTicketModal
        booking={selectedBooking}
        onClose={() => setSelectedBooking(null)}
      />
    </div>
  );
};

export default Dashboard;
