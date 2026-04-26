"use client";
import { useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function LoginForm() {


    type FormData = {
        email: string;
        password: string;
    };

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const form: FormData = {
            email: formData.email,
            password: formData.password
        };

        const user = localStorage.getItem("user");
        if (user) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.email === form.email && parsedUser.password === form.password) {
                
                redirect("/dashboard");
            } else {
                alert("Invalid email or password.");
            }
        } else {
            alert("No user found.");
        }

    };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">

      <h1 className="text-2xl font-semibold mb-6 text-black dark:text-white">
        Mini Upwork
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email" value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 mt-1 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="text-sm">Password</label>
            <input
              type="password" value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 mt-1 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

         
          <button type="submit" className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition">
            Log In
          </button>

          <p className="text-center text-sm mt-2">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-indigo-600 dark:text-indigo-400">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
