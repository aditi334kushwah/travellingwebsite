'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import { Users, Package, BookOpen, MessageCircle, Activity } from "lucide-react"
// import BookingDashboard from  "../../components/BookingDashboard"


const Dashboard = () => {
    const [stats, setStats] = useState({
        users: 0,
        packages: 0,
        bookings: 0,
        contacts: 0,
    });

    const [activity, setActivity] = useState<any[]>([]);

    const fetchStats = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/dashboard/stats/", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            });
            setStats(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const fetchActivity = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/dashboard/recent-activity/", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            });
            setActivity(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchStats();
        fetchActivity();
    }, []);

    const cards = [
        {
            title: "Users",
            value: stats.users,
            icon: Users,
            gradient: "from-blue-500 to-indigo-600"
        },
        {
            title: "Packages",
            value: stats.packages,
            icon: Package,
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "Bookings",
            value: stats.bookings,
            icon: BookOpen,
            gradient: "from-green-500 to-emerald-600"
        },
        {
            title: "Contacts",
            value: stats.contacts,
            icon: MessageCircle,
            gradient: "from-orange-500 to-red-500"
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-6 mt-20">

            {/* HEADER */}
            <div className="mb-8  text-center">
                <h1 className="text-3xl font-bold text-gray-800">
                    Admin Dashboard
                </h1>
                <p className="text-gray-500">
                    Welcome back  Here is your system overview
                </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

                {cards.map((card, i) => {
                    const Icon = card.icon;

                    return (
                        <div
                            key={i}
                            className={`bg-gradient-to-r ${card.gradient} text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300`}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm opacity-80">{card.title}</p>
                                    <h2 className="text-3xl font-bold mt-1">
                                        {card.value}
                                    </h2>
                                </div>
                                <Icon size={36} />
                            </div>
                        </div>
                    );
                })}

            </div>

            {/* CONTENT AREA */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* RECENT ACTIVITY */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">

                    <div className="flex items-center gap-2 mb-4">
                        <Activity className="text-purple-600" />
                        <h2 className="text-xl font-bold text-gray-800">
                            Recent Activity
                        </h2>
                    </div>

                    <div className="space-y-4 max-h-[400px] overflow-y-auto">

                        {activity.length === 0 ? (
                            <p className="text-gray-400">No recent activity</p>
                        ) : (
                            activity.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-3 border rounded-lg hover:bg-gray-50 transition"
                                >
                                    <p className="text-gray-700 text-md font-semibold">
                                        {item.message}
                                    </p>
                                    <span className="text-xs text-gray-400">
                                        {new Date(item.created_at).toLocaleString()}
                                    </span>
                                </div>
                            ))
                        )}

                    </div>
                </div>

                {/* QUICK PANEL
                <div className="bg-white rounded-2xl shadow-md p-6">

                    <h2 className="text-lg font-bold mb-4">Quick Actions</h2>

                    <div className="space-y-3">

                        <BookingDashboard />

                    </div>

                </div> */}

            </div>

        </div>
    );
};

export default Dashboard;