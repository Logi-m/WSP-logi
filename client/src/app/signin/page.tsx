'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SignIn() {
  return (
    <div className="flex min-h-screen p-4" style={{ fontFamily: '"DM Sans", sans-serif' }}>
      {/* Left Column - Hidden on mobile, visible on lg */}
      <div className="hidden lg:flex lg:w-[40%] relative rounded-[50px] overflow-hidden">
        <Image
          src="/signin.png"
          alt="Sign In Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#FF5634] opacity-50" />
        
        {/* Logo */}
        <div className="absolute top-0 left-0 p-8">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={150}
            height={40}
            priority
          />
        </div>
        
        {/* Bottom Text */}
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Service Panel</h2>
          <p className="text-lg opacity-90">
            Streamline your restaurant operations with BMS.
            Manage reservations, orders, inventory, and staff
            effortlessly, and focus on delivering exceptional dining
            experiences.
          </p>
        </div>
      </div>

      {/* Right Column - Full width on mobile, 60% on lg */}
      <div className="w-full lg:w-[60%] flex items-center justify-center">
        <div className="w-full max-w-[480px] space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-600">Manage, streamline, and thrive effortlessly.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF5634] focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF5634] focus:border-transparent"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="h-4 w-4 text-[#FF5634] focus:ring-[#FF5634] border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <Link href="/login-with-code" className="text-[#FF5634] text-sm font-medium hover:underline">
                Login with Code
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF5634] text-white py-3 px-4 rounded-lg hover:bg-[#e64a2e] transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 