'use client'
import axios from 'axios'
import { useState } from "react"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import FadeUp from '@/components/ui/FadeUp';

const LoginPage = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({ message: "" });
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://travellingwebsite-2.onrender.com/api/accounts/login/', formData);
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("username", response.data.username);
      alert("Login Successfully");
      router.push('/');
    } catch (error: any) {
      setErrors({ message: error.response?.data?.message || "Login failed" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex justify-center items-center px-4 py-20 bg-gray-50 dark:bg-gray-950">
      <FadeUp className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400 text-center mb-6">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {errors.message && (
              <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 text-red-700 dark:text-red-300 px-4 py-2 rounded">
                {errors.message}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter your username"
                className="w-full py-2.5 px-4 border rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password"
                className="w-full py-2.5 px-4 border rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <button type="submit" className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition duration-300">
              Login
            </button>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
            </p>
          </form>
        </div>
      </FadeUp>
    </section>
  );
};

export default LoginPage;
