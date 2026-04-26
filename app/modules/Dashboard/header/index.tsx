"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  
  const getUserData = () => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("user");
      return userData ? JSON.parse(userData) : null;
    }
    return null;
  };

  const user = getUserData();

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/dashboard" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              Mini Upwork
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/dashboard" 
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              Dashboard
            </Link>
            <Link 
              href="/jobs" 
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              Find Jobs
            </Link>
            <Link 
              href="/freelancers" 
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              Freelancers
            </Link>
            <Link 
              href="/messages" 
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition relative"
            >
              Messages
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </nav>

          {/* Profile & Logout */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {user?.fullName?.charAt(0)?.toUpperCase() || "U"}
                </div>
                <span className="font-medium">{user?.fullName || "User"}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                  <Link 
                    href="/profile" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    👤 My Profile
                  </Link>
                  <Link 
                    href="/settings" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    ⚙️ Settings
                  </Link>
                  <Link 
                    href="/my-jobs" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    💼 My Jobs
                  </Link>
                  <hr className="my-2 border-gray-200 dark:border-gray-700" />
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/dashboard" 
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 py-2"
              >
                Dashboard
              </Link>
              <Link 
                href="/jobs" 
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 py-2"
              >
                Find Jobs
              </Link>
              <Link 
                href="/freelancers" 
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 py-2"
              >
                Freelancers
              </Link>
              <Link 
                href="/messages" 
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 py-2"
              >
                Messages (3)
              </Link>
              <Link 
                href="/profile" 
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 py-2"
              >
                👤 My Profile
              </Link>
              <Link 
                href="/settings" 
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 py-2"
              >
                ⚙️ Settings
              </Link>
              <button
                onClick={handleLogout}
                className="text-left text-red-600 hover:text-red-700 py-2"
              >
                🚪 Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}