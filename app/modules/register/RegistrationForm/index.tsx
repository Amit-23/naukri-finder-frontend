import Link from "next/link";


export default function RegistrationForm() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">

     
      <h1 className="text-2xl font-semibold mb-6 text-black dark:text-white">
        Mini Upwork
      </h1>

     
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl shadow-lg p-8 w-full max-w-md">

       
        <div className="flex mb-6 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
          <button className="w-1/2 py-2 bg-indigo-600 text-white font-medium">
            I am a Client
          </button>
          <button className="w-1/2 py-2 text-gray-600 dark:text-gray-300">
            I am a Freelancer
          </button>
        </div>

       
        <h2 className="text-xl font-semibold mb-6 text-center">
          Create Client Account
        </h2>

       
        <div className="flex flex-col gap-4">

          
          <div>
            <label className="text-sm">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 mt-1 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

         
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 mt-1 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

         
          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 mt-1 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          
          <label className="flex items-center gap-2 text-sm mt-2">
            <input type="checkbox" />
            I agree to the{" "}
            <span className="text-indigo-600 dark:text-indigo-400 cursor-pointer">
              Terms of Service
            </span>
          </label>

         
          <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition">
            Create Account
          </button>

         
          <p className="text-center text-sm mt-2">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-600 dark:text-indigo-400">
              Log in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}