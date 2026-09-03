'use client'
import axios from 'axios'
import { useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/navigation";
import FadeUp from '@/components/ui/FadeUp';

const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState({ username: "", email: "", password: "" });
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://travellingwebsite-2.onrender.com/api/accounts/register/', formData);
      alert("Registration Successful");
      router.push("/login");
    } catch (error: any) {
      setError({
        username: error.response?.data?.username?.[0] || "",
        email: error.response?.data?.email?.[0] || "",
        password: error.response?.data?.password?.[0] || "",
      });
    }
  };

  const inputClass = "w-full py-2.5 px-4 border rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500";
  const errorClass = "bg-red-100 dark:bg-red-900/30 border border-red-200 text-red-700 dark:text-red-300 px-4 py-1.5 text-sm rounded mt-1";

  return (
    <section className="relative w-full min-h-screen flex justify-center items-center px-4 py-20 bg-gray-50 dark:bg-gray-950">
      <FadeUp className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400 text-center mb-6">Sign Up</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" className={inputClass} required />
              {error.username && <p className={errorClass}>{error.username}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className={inputClass} required />
              {error.email && <p className={errorClass}>{error.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" className={inputClass} required />
              {error.password && <p className={errorClass}>{error.password}</p>}
            </div>
            <button type="submit" className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition duration-300">
              Register
            </button>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
            </p>
          </form>
        </div>
      </FadeUp>
    </section>
  );
};

export default RegisterPage;
