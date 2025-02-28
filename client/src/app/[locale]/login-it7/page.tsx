'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/input';
import { PasswordInput } from '@/components/passwordInput';
import Checkbox from '@/components/checkbox';
import { MainButton } from '@/components/mainButton';
import {
  fontBigTypoDesktop,
  fontTitle1,
  fontBodyNormal,
  fontCaptionBold,
} from '@/styles/typography';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const isFormValid = email && password;

  return (
    <div className="flex min-h-screen w-full p-4 font-dm-sans">
      {/* Left Column - Hidden on mobile */}
      <div className="relative hidden md:block md:w-[40%] max-w-[480px] rounded-[var(--round-6)] overflow-hidden">
        {/* Background Image and Overlays */}
        <div className="absolute inset-0 bg-[url('/signin.png')] bg-cover bg-top bg-no-repeat" />
        <div className="absolute inset-0 bg-signIn" />
        <div className="absolute inset-0 h-[50%] opacity-60 self-end bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_50%,#000_100%)]" />
        
        {/* Content Container with Flex */}
        <div className="relative h-full flex flex-col">
          {/* Logo */}
          <div className="p-6">
            <Image
              src="/Logo.webp"
              alt="Logo"
              width={164}
              height={39}
              className="object-contain"
            />
          </div>

          {/* Bottom Text Section - Pushed to bottom with mt-auto */}
          <div className="p-6 mt-auto text-white">
            <h1 className={`${fontBigTypoDesktop} mb-6`}>Service Panel</h1>
            <p className={fontBodyNormal}>
              Streamline your restaurant operations with BMS. Manage reservations, orders, inventory, and staff effortlessly, and focus on delivering exceptional dining experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-[60%] flex justify-center items-center">
        <div className="w-full max-w-[480px]">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className={`${fontTitle1} mb-2`}>Welcome Back</h2>
            <p className={`${fontBodyNormal} text-black/60`}>
              Manage, streamline, and thrive effortlessly.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Email Field */}
            <div>
              <label className={`${fontCaptionBold} text-gray-700 block mb-2 pl-4`}>
                Email
              </label>
              <Input
                type="email"
                variant="signin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className={`${fontCaptionBold} text-gray-700 block mb-2 pl-4`}>
                Password
              </label>
              <PasswordInput
                variant="signin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>

            {/* Remember Me Row */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <Checkbox
                  variant="custom"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="h-5 w-5 data-[state=checked]:bg-[#00A82D]"
                />
                <label className={`${fontBodyNormal} text-gray-700 ml-2`}>
                  Remember me
                </label>
              </div>
              <Link
                href="/login-with-code"
                className="font-dm-sans font-bold text-black underline"
              >
                Login with Code
              </Link>
            </div>

            {/* Sign In Button */}
            <MainButton
              type="submit"
              className={`w-full py-3 px-4 rounded-[30px] mt-4 ${
                isFormValid
                  ? 'bg-black text-white hover:opacity-90'
                  : 'bg-black/5 text-black/40 cursor-not-allowed'
              }`}
              disabled={!isFormValid}
            >
              Sign In
            </MainButton>
          </form>
        </div>
      </div>
    </div>
  );
}
