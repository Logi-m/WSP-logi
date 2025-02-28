'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/input';
import { PasswordInput } from '@/components/passwordInput';
import { Checkbox } from '@/components/ui/checkbox';
import { MainButton } from '@/components/mainButton';
import {
  fontBigTypoDesktop,
  fontTitle1,
  fontBodyNormal,
  fontCaptionBold,
  fontBodyBold,
} from '@/styles/typography';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const isFormValid = email && password;

  return (
    <div className="min-h-screen flex p-4">
      {/* Left Column - Hidden on mobile */}
      <div className="hidden md:flex md:w-[40%] relative flex-col overflow-hidden" 
           style={{ borderRadius: 'var(--round-6)' }}>
        <div className="absolute inset-0 bg-[url('/signin.png')] bg-cover bg-top bg-no-repeat" />
        <div className="absolute inset-0 bg-signIn" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2" 
          style={{ 
            opacity: 0.5,
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 50%, #000 100%)'
          }} 
        />
        
        {/* Logo */}
        <div className="relative p-8">
          <Image 
            src="/Logo.webp"
            width={164}
            height={39}
            alt="Orderific Logo"
            className="object-contain"
          />
        </div>

        {/* Bottom Text */}
        <div className="relative mt-auto p-8 text-white">
          <h1 className={`${fontBigTypoDesktop} mb-4`}>Service Panel</h1>
          <p className={fontBodyNormal}>
            Streamline your restaurant operations with BMS. Manage reservations, orders, inventory, and staff effortlessly, and focus on delivering exceptional dining experiences.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex justify-center items-center p-4">
        <div className="w-full max-w-[480px] space-y-8">
          {/* Header */}
          <div className="text-center">
            <h2 className={`${fontTitle1} mb-2`}>Welcome Back</h2>
            <p className={`${fontBodyNormal} text-black/60`}>
              Manage, streamline, and thrive effortlessly.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className={`${fontCaptionBold} text-gray-700 pl-4 block`}>
                Email
              </label>
              <Input
                type="email"
                variant="signin"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className={`${fontCaptionBold} text-gray-700 pl-4 block`}>
                Password
              </label>
              <PasswordInput
                variant="signin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  variant="custom"
                  className="h-5 w-5 border-2 border-gray-300 data-[state=checked]:bg-[#00A82D] data-[state=checked]:border-[#00A82D]"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label className={`${fontBodyNormal} text-gray-700 ml-2`}>
                  Remember me
                </label>
              </div>
              <a href="#" className="font-dm-sans font-bold text-black underline">
                Login with Code
              </a>
            </div>

            <MainButton
              type="submit"
              variant="primary"
              disabled={!isFormValid}
              className={`w-full mt-4 py-3 px-4 rounded-[30px] ${
                isFormValid
                  ? 'bg-black text-white hover:opacity-90'
                  : 'bg-black/5 text-black/40 cursor-not-allowed'
              }`}
            >
              Sign In
            </MainButton>
          </form>
        </div>
      </div>
    </div>
  );
}
