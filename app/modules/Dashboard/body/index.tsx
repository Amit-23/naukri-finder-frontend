/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";

type User = {
  id: number;
  email: string;
  fullName: string;
  // Add any other user properties you need
};

export default function DashboardBody() {

  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [recentJobs, setRecentJobs] = useState([
    { id: 1, title: "Website Redesign", status: "In Progress", budget: "$2,500", freelancer: "Sarah Johnson", dueDate: "2024-01-15" },
    { id: 2, title: "Mobile App Development", status: "Completed", budget: "$5,000", freelancer: "Mike Chen", dueDate: "2024-01-10" },
    { id: 3, title: "Logo Design", status: "Pending", budget: "$500", freelancer: "Emily Brown", dueDate: "2024-01-20" },
  ]);

  const [stats, setStats] = useState({
    totalProjects: 12,
    activeProjects: 3,
    completedProjects: 8,
    totalSpent: "$25,400",
    freelancers: 7,
    rating: 4.8
  });

  useEffect(() => {
    
    const userData = localStorage.getItem("user");
    if (userData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back, {user?.fullName || "User"}! 👋
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here&apos;s what&apos;s happening with your projects today.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
    
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-white/20 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-blue-100 text-sm">+12% from last month</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">{stats.activeProjects}</h3>
          <p className="text-blue-100">Active Projects</p>
        </div>

        
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-white/20 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5h6" />
              </svg>
            </div>
            <span className="text-green-100 text-sm">+8% from last month</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">{stats.completedProjects}</h3>
          <p className="text-green-100">Completed Projects</p>
        </div>

        
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-white/20 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-purple-100 text-sm">This month</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">{stats.totalSpent}</h3>
          <p className="text-purple-100">Total Spent</p>
        </div>

        {/* Rating */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-white/20 rounded-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <span className="text-orange-100 text-sm">Excellent</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">{stats.rating}</h3>
          <p className="text-orange-100">Rating</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg mb-8">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {["overview", "projects", "freelancers", "payments"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition ${
                  activeTab === tab
                    ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "overview" && (
            <div>
              {/* Recent Activity */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Recent Projects
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500 dark:text-gray-400 border-b dark:border-gray-700">
                      <th className="pb-3 font-medium">Project</th>
                      <th className="pb-3 font-medium">Freelancer</th>
                      <th className="pb-3 font-medium">Budget</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentJobs.map((job) => (
                      <tr key={job.id} className="border-b dark:border-gray-700">
                        <td className="py-4 text-gray-900 dark:text-white font-medium">
                          {job.title}
                        </td>
                        <td className="py-4 text-gray-600 dark:text-gray-400">
                          {job.freelancer}
                        </td>
                        <td className="py-4 text-gray-900 dark:text-white">
                          {job.budget}
                        </td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            job.status === "Completed" 
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : job.status === "In Progress"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          }`}>
                            {job.status}
                          </span>
                        </td>
                        <td className="py-4 text-gray-600 dark:text-gray-400">
                          {job.dueDate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                All Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                You have {stats.totalProjects} total projects.
              </p>
            </div>
          )}

          {activeTab === "freelancers" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Your Freelancers
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                You&apos;re working with {stats.freelancers} freelancers.
              </p>
            </div>
          )}

          {activeTab === "payments" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Payment History
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Total spent: {stats.totalSpent}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Post a New Job */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Post a New Job</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Find the perfect freelancer for your project</p>
            </div>
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            Create Job Post
          </button>
        </div>

        {/* Browse Freelancers */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Browse Freelancers</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Discover talented professionals</p>
            </div>
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Browse Now
          </button>
        </div>
      </div>
    </div>
  );
}