'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/input';
import { PasswordInput } from '@/components/passwordInput';
import Checkbox from '@/components/checkbox';
import { cn } from '@/lib/utils';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex min-h-screen w-full p-4 font-dm-sans">
      {/* Left Column - Hidden on mobile */}
      <div className="hidden md:flex md:w-[40%] max-w-[480px] relative flex-col rounded-[var(--round-6)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/signin.png')] bg-cover bg-top bg-no-repeat" />
        <div className="absolute inset-0 bg-signIn" />
        <div className="absolute inset-0 h-[50%] opacity-60 self-end bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_50%,#000_100%)]" />
        
        <div className="relative p-6">
          <Image
            src="/Logo.webp"
            alt="Orderific Logo"
            width={164}
            height={39}
            className="object-contain"
          />
        </div>

        <div className="relative mt-auto p-6 text-white">
          <h1 className={cn(fontBigTypoDesktop, "mb-6")}>Service Panel</h1>
          <p className={fontBodyNormal}>
            Streamline your restaurant operations with BMS. Manage reservations, orders, inventory, and staff effortlessly, and focus on delivering exceptional dining experiences.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-1 justify-center items-center">
        <div className="w-full max-w-[480px]">
          <div className="text-center mb-8">
            <h2 className={cn(fontTitle1, "mb-2")}>Welcome Back</h2>
            <p className={cn(fontBodyNormal, "text-black/60")}>
              Manage, streamline, and thrive effortlessly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={cn(fontCaptionBold, "text-gray-700 mb-2 pl-4 block")}>
                Email
              </label>
              <Input
                type="email"
                variant="signin"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="Enter email address"
              />
            </div>

            <div>
              <label className={cn(fontCaptionBold, "text-gray-700 mb-2 pl-4 block")}>
                Password
              </label>
              <PasswordInput
                variant="signin"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <Checkbox
                  checked={rememberMe}
                  onClick={() => setRememberMe(!rememberMe)}
                  size="small"
                />
                <span className={cn(fontBodyNormal, "text-gray-700 ml-2")}>
                  Remember me
                </span>
              </div>
              <Link
                href="/login-with-code"
                className="font-dm-sans font-bold text-black underline"
              >
                Login with Code
              </Link>
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={cn(
                'w-full py-3 px-4 rounded-[30px] mt-4 transition-all',
                isFormValid
                  ? 'bg-black text-white hover:opacity-90'
                  : 'bg-black/5 text-black/40 cursor-not-allowed'
              )}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
