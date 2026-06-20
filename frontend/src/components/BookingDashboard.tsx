// 'use client'

// import { useEffect, useState } from "react"
// import axios from "axios"
// import { Trash2, Eye, Search } from "lucide-react"

// type Booking = {
//     id: number
//     name: string
//     email: string
//     phone: string
//     country: string
//     number_of_people: number
//     travel_month: string
//     budget_per_person: string
//     created_at: string
// }

// const BookingManager = () => {

//     const [bookings, setBookings] = useState<Booking[]>([])
//     const [search, setSearch] = useState("")
//     const [loading, setLoading] = useState(true)
//     const [selected, setSelected] = useState<Booking | null>(null)

//     const token =
//         typeof window !== "undefined"
//             ? localStorage.getItem("access_token")
//             : null

//     // FETCH BOOKINGS
//     const fetchBookings = async () => {
//         try {
//             const res = await axios.get(
//                 "http://127.0.0.1:8000/api/bookings/",
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 }
//             )
//             setBookings(res.data)
//         } catch (err) {
//             console.log(err)
//         } finally {
//             setLoading(false)
//         }
//     }

//     useEffect(() => {
//         fetchBookings()
//     }, [])

//     // DELETE BOOKING
//     const deleteBooking = async (id: number) => {
//         try {
//             await axios.delete(
//                 `http://127.0.0.1:8000/api/bookings/${id}/`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 }
//             )

//             setBookings(prev => prev.filter(b => b.id !== id))

//         } catch (err) {
//             console.log(err)
//         }
//     }

//     // FILTER SEARCH
//     const filtered = bookings.filter(b =>
//         b.name.toLowerCase().includes(search.toLowerCase()) ||
//         b.email.toLowerCase().includes(search.toLowerCase())
//     )

//     if (loading) {
//         return (
//             <div className="min-h-screen flex items-center justify-center">
//                 Loading bookings...
//             </div>
//         )
//     }

//     return (
//         <div className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-blue-50 mt-20">

//             {/* HEADER */}
//             <div className="flex justify-between items-center mb-6">

//                 <h1 className="text-2xl font-bold text-gray-800">
//                     Booking Management
//                 </h1>

//                 <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow">
//                     <Search size={18} />
//                     <input
//                         type="text"
//                         placeholder="Search name or email..."
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         className="outline-none"
//                     />
//                 </div>

//             </div>

//             {/* TABLE */}
//             <div className="bg-white shadow-lg rounded-2xl overflow-hidden">

//                 <table className="w-full text-sm">

//                     <thead className="bg-gray-100 text-gray-700">
//                         <tr>
//                             <th className="p-3 text-left">Name</th>
//                             <th className="text-left">Email</th>
//                             <th className="text-left">Country</th>
//                             <th className="text-left">People</th>
//                             <th className="text-left">Budget</th>
//                             <th className="text-left">Date</th>
//                             <th className="text-left">Actions</th>
//                         </tr>
//                     </thead>

//                     <tbody>

//                         {filtered.map((b) => (
//                             <tr
//                                 key={b.id}
//                                 className="border-b hover:bg-gray-50 transition"
//                             >

//                                 <td className="p-3 font-medium">{b.name}</td>
//                                 <td>{b.email}</td>
//                                 <td>{b.country}</td>
//                                 <td>{b.number_of_people}</td>
//                                 <td>₹{b.budget_per_person}</td>
//                                 <td>
//                                     {new Date(b.created_at).toLocaleDateString()}
//                                 </td>

//                                 <td className="flex gap-3 p-3">

//                                     {/* VIEW */}
//                                     <button
//                                         onClick={() => setSelected(b)}
//                                         className="text-blue-600 hover:scale-110 transition"
//                                     >
//                                         <Eye size={18} />
//                                     </button>

//                                     {/* DELETE */}
//                                     <button
//                                         onClick={() => deleteBooking(b.id)}
//                                         className="text-red-600 hover:scale-110 transition"
//                                     >
//                                         <Trash2 size={18} />
//                                     </button>

//                                 </td>

//                             </tr>
//                         ))}

//                     </tbody>

//                 </table>

//             </div>

//             {/* MODAL */}
//             {selected && (
//                 <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

//                     <div className="bg-white p-6 rounded-xl w-[400px]">

//                         <h2 className="text-xl font-bold mb-4">
//                             Booking Details
//                         </h2>

//                         <p><b>Name:</b> {selected.name}</p>
//                         <p><b>Email:</b> {selected.email}</p>
//                         <p><b>Phone:</b> {selected.phone}</p>
//                         <p><b>Country:</b> {selected.country}</p>
//                         <p><b>People:</b> {selected.number_of_people}</p>
//                         <p><b>Budget:</b> ₹{selected.budget_per_person}</p>

//                         <button
//                             onClick={() => setSelected(null)}
//                             className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
//                         >
//                             Close
//                         </button>

//                     </div>

//                 </div>
//             )}

//         </div>
//     )
// }

// export default BookingManager