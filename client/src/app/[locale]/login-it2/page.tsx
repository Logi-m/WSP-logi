'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from "@/components/input";
import { PasswordInput } from "@/components/passwordInput";
import { Checkbox } from "@/components/ui/checkbox";
import { fontBigTypoDesktop, fontBodyNormal, fontTitle1, fontCaptionBold } from "@/styles/typography";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Check if both email and password have values
  const isFormValid = email.length > 0 && password.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      // Handle form submission
    }
  };

  return (
    <div className="flex min-h-screen p-4" style={{ fontFamily: '"DM Sans", sans-serif' }}>
      {/* Left Column - Hidden on mobile, visible on lg */}
      <div 
        className="hidden lg:flex lg:w-[40%] relative rounded-[var(--round-6)] overflow-hidden"
        style={{
          backgroundImage: 'url("/signin.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-[#FF5634] opacity-50" />
        
        {/* Logo */}
        <div className="absolute top-0 left-0 p-8">
          <Image
            src="/Logo.webp"
            alt="Logo"
            width={164}
            height={39}
            priority
            className="object-contain"
          />
        </div>
        
        {/* Bottom Text */}
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h2 className={`${fontBigTypoDesktop} mb-4`}>Service Panel</h2>
          <p className={fontBodyNormal}>
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
            <h1 className={`${fontTitle1} mb-2`}>Welcome Back</h1>
            <p className={`${fontBodyNormal} text-black/60`}>Manage, streamline, and thrive effortlessly.</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label htmlFor="email" className={`block ${fontCaptionBold} text-gray-700 mb-2 pl-4`}>
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="signin"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className={`block ${fontCaptionBold} text-gray-700 mb-2 pl-4`}>
                Password
              </label>
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="signin"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked)}
                  variant="custom"
                />
                <label htmlFor="remember" className={`ml-2 block ${fontBodyNormal} text-gray-700`}>
                  Remember me
                </label>
              </div>
              <Link href="/login-with-code" className="text-black underline text-sm font-bold">
                Login with Code
              </Link>
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3 px-4 rounded-[30px] transition-colors mt-4 text-white
                ${isFormValid 
                  ? 'bg-black hover:bg-black/90 text-white' 
                  : 'bg-black/5 text-black/40 cursor-not-allowed'}`}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
