"use client";

import { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const stored = Cookies.get("userCredentials");
    if (!stored) {
      setError("No account found. Please signup first.");
      return;
    }

    const { email: storedEmail, password: storedPassword } = JSON.parse(stored);

    if (email === storedEmail && password === storedPassword) {
      Cookies.set("isAuthenticated", "true", { expires: 1 });
      router.push("/");
      router.refresh();
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center p-8 bg-gradient-to-br from-red-100 via-white to-orange-200 min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Section - Welcome */}
        <div className="hidden md:flex flex-col justify-center items-center bg-orange-100 p-12 md:w-1/2">
          <div alt="Vishranti Sweets logo" width={120} height={120} />
          <h2 className="mt-6 text-3xl font-bold text-center text-gray-800">
            Welcome to BlogHub 
          </h2>
          <p className="mt-4 text-center text-gray-600 px-8">
            Login to continue reading your favourite blogs!
          </p>
        </div>

        {/* Right Section - Login Form */}
        <div className="p-8 md:p-12 md:w-1/2 w-full">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Login to Your Account
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 text-gray-600  py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition"
                />
                {password.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-600 hover:text-gray-800"
                  >
                    {showPassword ? "hide" : "show"}
                  </button>
                )}
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-center text-red-600 text-sm -mt-3">{error}</p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition duration-200"
            >
              Login
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-red-600 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
