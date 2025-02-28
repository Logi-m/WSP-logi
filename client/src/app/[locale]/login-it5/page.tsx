'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
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

  const isFormValid = email.length > 0 && password.length > 0;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, password, rememberMe });
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  return (
    <div className="flex min-h-screen w-full p-4">
      {/* Left Column - Hidden on mobile */}
      <div className="hidden md:flex md:w-[40%] relative flex-col rounded-[var(--round-6)] overflow-hidden max-w-[480px]">
        <div className="absolute inset-0 bg-[url('/signin.png')] bg-cover bg-top bg-no-repeat" />
        <div className="absolute inset-0 bg-signIn" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-90" />
        
        {/* Logo */}
        <div className="relative p-6">
          <Image
            src="/Logo.webp"
            alt="Logo"
            width={164}
            height={39}
            className="object-contain"
          />
        </div>

        {/* Bottom Text */}
        <div className="relative mt-auto p-6 text-white">
          <h1 className={`${fontBigTypoDesktop} mb-4`}>Service Panel</h1>
          <p className={fontBodyNormal}>
            Streamline your restaurant operations with BMS. Manage reservations, orders, inventory, and staff effortlessly, and focus on delivering exceptional dining experiences.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-[60%] flex justify-center items-center">
        <div className="w-full max-w-[480px]">
          <div className="text-center">
            <h2 className={`${fontTitle1} mb-2`}>Welcome Back</h2>
            <p className={`${fontBodyNormal} text-black/60`}>
              Manage, streamline, and thrive effortlessly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <label className={`${fontCaptionBold} text-gray-700 pl-4 block`}>
                Email
              </label>
              <Input
                type="email"
                variant="signin"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter email address"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className={`${fontCaptionBold} text-gray-700 pl-4 block`}>
                Password
              </label>
              <PasswordInput
                variant="signin"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
              />
            </div>

            {/* Remember Me & Login with Code */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <Checkbox
                  checked={rememberMe}
                  onClick={() => setRememberMe(!rememberMe)}
                  size="small"
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
              variant="primary"
              disabled={!isFormValid}
              className="w-full py-3 px-4 rounded-[30px] mt-4"
            >
              Sign In
            </MainButton>
          </form>
        </div>
      </div>
    </div>
  );
}
