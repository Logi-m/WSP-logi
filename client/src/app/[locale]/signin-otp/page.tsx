'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { InputError } from '@/components/ui/input-error'
import { MainButton } from '@/components/mainButton'
import {
  fontBigTypoDesktop,
  fontTitle1,
  fontTitle2,
  fontBodyNormal,
} from '@/styles/typography'

export default function SignInOTPPage() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''))
  const [error, setError] = useState<string | null>(null)
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null))

  const isFormValid = otp.every(digit => digit !== '')

  const focusInput = (index: number) => {
    if (index >= 0 && index < 6) {
      inputRefs.current[index]?.focus()
    }
  }

  const handleChange = (index: number, value: string) => {
    if (error) setError(null)
    
    const newOtp = [...otp]
    newOtp[index] = value

    setOtp(newOtp)

    if (value && index < 5) {
      focusInput(index + 1)
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      e.preventDefault()
      focusInput(index - 1)
    } else if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault()
      focusInput(index - 1)
    } else if (e.key === 'ArrowRight' && index < 5) {
      e.preventDefault()
      focusInput(index + 1)
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, 6)
    
    const newOtp = [...otp]
    pastedData.split('').forEach((char, i) => {
      if (i < 6) newOtp[i] = char
    })
    setOtp(newOtp)

    if (pastedData.length > 0) {
      const focusIndex = Math.min(5, pastedData.length - 1)
      focusInput(focusIndex)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) {
      setError('Please enter all 6 digits')
      return
    }
    
    // TODO: Handle OTP verification here
    setError('Entered code is wrong!')
  }

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row p-2 font-dm-sans">
      {/* Left Column - Hidden on mobile */}
      <div className="hidden lg:flex lg:w-[40%] max-w-[480px] relative rounded-[var(--round-6)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/signin.png')] bg-cover bg-top bg-no-repeat" />
        <div className="absolute inset-0 bg-signIn" />
        <div className="absolute inset-0 h-[50%] opacity-60 self-end bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_50%,#000_100%)]" />
        <div className="relative flex flex-col min-h-full w-full">
          <div className="p-6">
            <Image src="/Logo.webp" alt="Logo" width={164} height={39} />
          </div>
          <div className="mt-auto p-6 text-white">
            <h1 className={`${fontBigTypoDesktop} mb-6`}>Service Panel</h1>
            <p className={fontBodyNormal}>
              Streamline your restaurant operations with BMS. Manage reservations, orders, inventory, and staff effortlessly, and focus on delivering exceptional dining experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col w-full lg:w-[60%] min-h-[inherit] lg:min-h-0">
        {/* Mobile Logo Section */}
        <div className="lg:hidden flex flex-col items-center pt-4">
          <div className="flex items-center space-x-2">
            <Image src="/OrangeLogo.svg" alt="Logo" width={53.2} height={38.97} />
            <span className={`${fontTitle2} text-brand`}>Orderific</span>
          </div>
          <h2 className={`${fontTitle1} text-black-100 mt-2`}>Service Panel</h2>
        </div>

        {/* Form Section */}
        <div className="flex-1 flex flex-col justify-center w-full max-w-[360px] mx-auto">
          <div className="text-center mb-4">
            <h1 className={`${fontTitle1} mb-2`}>Welcome Back</h1>
            <p className={`${fontBodyNormal} text-black/60`}>
              Manage, streamline, and thrive effortlessly.
            </p>
            <p className="mt-4">
              <span className="font-bold">Enter</span> 6 digit pin
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="flex justify-center gap-[10px]">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  type="text"
                  variant="otp"
                  value={digit}
                  ref={el => {
                    inputRefs.current[index] = el
                  }}
                  onChange={e => handleChange(index, e.target.value)}
                  onKeyDown={e => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  error={!!error}
                  hasValue={!!digit}
                />
              ))}
            </div>

            {error && (
              <InputError
                message={error}
                className="mt-4"
                variant="center"
              />
            )}

            <div className="text-center">
              <Link
                href="/login-it9"
                className="font-dm-sans font-bold text-black underline"
              >
                Login with Email
              </Link>
            </div>

            <MainButton
              variant="primary"
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
  )
}
