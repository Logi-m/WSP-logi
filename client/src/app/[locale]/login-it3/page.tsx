'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/input';
import { PasswordInput } from '@/components/passwordInput';
import { Checkbox } from '@/components/ui/checkbox';
import { MainButton } from '@/components/mainButton';
import { 
  fontTitle1, 
  fontBodyNormal, 
  fontCaptionBold, 
  fontBigTypoDesktop 
} from '@/styles/typography';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const isFormValid = email.length > 0 && password.length > 0;

  return (
    <div className="flex min-h-screen font-dm-sans p-2">
      {/* Left Column */}
      <div className="relative hidden w-[40%] lg:block">
        <div 
          className="absolute inset-0 bg-[url('/signin.png')] bg-cover bg-top bg-no-repeat rounded-[var(--round-6)] overflow-hidden"
        >
          {/* Dark overlay with linear gradient */}
          <div 
            className="absolute inset-0"
            style={{ 
              background: 'linear-gradient(to top, hsla(0, 0%, 0%, 0.5) 0%, transparent 100%)' 
            }}
          ></div>
          {/* Brand color overlay using signIn-background variable */}
          <div className="absolute inset-0 bg-[var(--signIn-background)] mix-blend-multiply"></div>
          
          <div className="relative z-10 p-8">
            <Image
              src="/Logo.webp"
              width={164}
              height={39}
              alt="Logo"
              className="object-contain"
            />
          </div>
          
          <div className="absolute bottom-0 p-8 text-white z-10">
            <h1 className={`${fontBigTypoDesktop} mb-4`}>Service Panel</h1>
            <p className={fontBodyNormal}>
              Streamline your restaurant operations with BMS.<br />
              Manage reservations, orders, inventory, and staff<br />
              effortlessly, and focus on delivering exceptional dining<br />
              experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-[480px] space-y-8">
          <div className="text-center">
            <h2 className={`${fontTitle1} mb-2`}>Welcome Back</h2>
            <p className={`${fontBodyNormal} text-black/60`}>
              Manage, streamline, and thrive effortlessly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className={`${fontCaptionBold} text-gray-700 block pl-4 mb-2`}>
                Email
              </label>
              <Input
                variant="signin"
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className={`${fontCaptionBold} text-gray-700 block pl-4 mb-2`}>
                Password
              </label>
              <PasswordInput
                variant="signin"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <Checkbox
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked)}
                  variant="custom"
                  className="h-5 w-5"
                />
                <span className={`${fontBodyNormal} text-gray-700 ml-2`}>
                  Remember me
                </span>
              </div>
              <Link
                href="/login-with-code"
                className="font-dm-sans font-bold text-black text-[16px] underline"
              >
                Login with Code
              </Link>
            </div>

            <MainButton
              type="submit"
              disabled={!isFormValid}
              className={`
                w-full py-3 px-4 rounded-[30px] mt-4 transition-opacity
                ${isFormValid 
                  ? 'bg-black text-white hover:opacity-90'
                  : 'bg-black/5 text-black/40 cursor-not-allowed'
                }
              `}
            >
              Sign In
            </MainButton>
          </form>
        </div>
      </div>
    </div>
  );
}
