'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { PasswordInput } from '@/components/ui/password-input'
import { 
  fontBigTypoDesktop, 
  fontTitle1, 
  fontBodyNormal, 
  fontCaptionBold 
} from '@/styles/typography'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const isFormValid = email.length > 0 && password.length > 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="flex min-h-screen p-4 font-dm-sans">
      {/* Left Column - Hidden on mobile */}
      <div className="hidden md:flex md:w-[40%] max-w-[480px] relative rounded-[var(--round-6)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/signin.png')] bg-cover bg-top bg-no-repeat" />
        <div className="absolute inset-0 bg-signIn" />
        <div 
          className="absolute inset-0 h-[50%] opacity-60 self-end"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 50%, #000 100%)'
          }}
        />
        <div className="relative flex flex-col h-full w-full">
          <div className="p-6">
            <Image
              src="/Logo.webp"
              alt="Logo"
              width={164}
              height={39}
              className="object-contain"
            />
          </div>
          <div className="mt-auto p-6 text-white">
            <h2 className={`${fontBigTypoDesktop} mb-6`}>Service Panel</h2>
            <p className={fontBodyNormal}>
              Streamline your service operations with our comprehensive management platform.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-[480px]">
          <div className="text-center mb-8">
            <h1 className={`${fontTitle1} mb-2`}>Welcome Back</h1>
            <p className={`${fontBodyNormal} text-black/60`}>
              Manage, streamline, and thrive effortlessly
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`${fontCaptionBold} text-gray-700 block mb-2 pl-4`}>
                Email
              </label>
              <Input
                type="email"
                variant="signin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className={`${fontCaptionBold} text-gray-700 block mb-2 pl-4`}>
                Password
              </label>
              <PasswordInput
                variant="signin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <Checkbox
                  variant="custom"
                  className="bg-[#00A82D] text-white"
                  size="small"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
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

            <button
              type="submit"
              disabled={!isFormValid}
              className={`
                w-full py-3 px-4 mt-4 rounded-[30px] transition-opacity
                ${isFormValid 
                  ? 'bg-black text-white hover:opacity-90' 
                  : 'bg-black/5 text-black/40 cursor-not-allowed'}
              `}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 