'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import {
  fontBigTypoDesktop,
  fontTitle1,
  fontTitle2,
  fontBodyNormal,
  fontCaptionBold,
} from '@/styles/typography'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const isFormValid = email.length > 0 && password.length > 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ email, password, rememberMe })
  }

  return (
    <div className="flex min-h-screen w-full font-dm-sans p-4">
      {/* Mobile Header - Only visible on lg screens and below */}
      <div className="w-full flex flex-col lg:hidden">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo-icon.png"
              alt="Orderific Logo"
              width={53.2}
              height={38.97}
              priority
            />
            <span className={`${fontTitle2} text-brand`}>Orderific</span>
          </div>
          <h1 className={`${fontTitle1} text-black-100 mt-2`}>Service Panel</h1>
        </div>

        {/* Right Column Content for Mobile */}
        <div className="flex items-center justify-center mt-8">
          <div className="w-full max-w-[480px]">
            <div className="text-center space-y-4">
              <h2 className={`${fontTitle1}`}>Welcome Back</h2>
              <p className={`${fontBodyNormal} text-black/60`}>
                Manage, streamline, and thrive effortlessly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Form content */}
              <div>
                <label 
                  className={`${fontCaptionBold} mb-2 block pl-4 text-gray-700`}
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  variant="signin"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label 
                  className={`${fontCaptionBold} mb-2 block pl-4 text-gray-700`}
                  htmlFor="password"
                >
                  Password
                </label>
                <PasswordInput
                  variant="signin"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    variant="custom"
                  />
                  <label 
                    className={`${fontBodyNormal} text-gray-700 select-none cursor-pointer`}
                    htmlFor="remember"
                  >
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

              <Button
                type="submit"
                disabled={!isFormValid}
                className={`
                  mt-4 w-full rounded-[30px] px-4 py-3
                  ${isFormValid 
                    ? 'bg-black text-white hover:opacity-90' 
                    : 'cursor-not-allowed bg-black/5 text-black/40'
                  }
                `}
              >
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Left Column - Hidden on mobile */}
      <div className="relative hidden w-[40%] max-w-[480px] lg:block rounded-[var(--round-6)]">
        {/* Left column content */}
        <div 
          className="relative h-full rounded-[var(--round-6)] bg-[url('/signin.png')] bg-cover bg-top bg-no-repeat"
        >
          {/* Brand overlay */}
          <div className="absolute inset-0 bg-signIn rounded-[var(--round-6)]" />
          
          {/* Black gradient overlay */}
          <div 
            className="absolute inset-0 h-[50%] self-end opacity-60 rounded-[var(--round-6)]"
            style={{
              background: 'linear-gradient(180deg,rgba(0,0,0,0) 0%,#000 50%,#000 100%)'
            }}
          />

          {/* Content */}
          <div className="relative flex h-full flex-col">
            <div className="p-6">
              <Image
                src="/Logo.webp"
                alt="Orderific Logo"
                width={164}
                height={39}
                priority
              />
            </div>
            
            <div className="mt-auto p-6 text-white">
              <h1 className={`${fontBigTypoDesktop} mb-6`}>
                Service Panel
              </h1>
              <p className={fontBodyNormal}>
                Streamline your restaurant operations with BMS.
                Manage reservations, orders, inventory, and staff
                effortlessly, and focus on delivering exceptional dining
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Desktop Only */}
      <div className="hidden w-[60%] lg:flex items-center justify-center">
        <div className="w-full max-w-[480px]">
          <div className="text-center space-y-4">
            <h2 className={`${fontTitle1}`}>Welcome Back</h2>
            <p className={`${fontBodyNormal} text-black/60`}>
              Manage, streamline, and thrive effortlessly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Form content */}
            <div>
              <label 
                className={`${fontCaptionBold} mb-2 block pl-4 text-gray-700`}
                htmlFor="email"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                variant="signin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label 
                className={`${fontCaptionBold} mb-2 block pl-4 text-gray-700`}
                htmlFor="password"
              >
                Password
              </label>
              <PasswordInput
                variant="signin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  variant="custom"
                />
                <label 
                  className={`${fontBodyNormal} text-gray-700 select-none cursor-pointer`}
                  htmlFor="remember"
                >
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

            <Button
              type="submit"
              disabled={!isFormValid}
              className={`
                mt-4 w-full rounded-[30px] px-4 py-3
                ${isFormValid 
                  ? 'bg-black text-white hover:opacity-90' 
                  : 'cursor-not-allowed bg-black/5 text-black/40'
                }
              `}
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
