"use client"

import React, { useState } from "react"
import Image from "next/image"
import { MainButton } from "@/components/mainButton"
import { Input } from "@/components/input"
import { fontTitle1, fontBodyNormal, fontBodyLinkNormal, fontCaptionNormal, fontCaptionBold, fontBigTypoDesktop } from "@/styles/typography"
import { Checkbox } from "@/components/ui/checkbox"
import { PasswordInput } from "@/components/passwordInput"
import { AlertCircle } from "lucide-react"

const ErrorIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 18C9.77778 18 9.58333 17.9653 9.41667 17.8958C9.25 17.8264 9.09028 17.7153 8.9375 17.5625L2.4375 11.0625C2.28472 10.9097 2.17361 10.75 2.10417 10.5833C2.03472 10.4167 2 10.2222 2 10C2 9.77778 2.03472 9.58333 2.10417 9.41667C2.17361 9.25 2.28264 9.09236 2.43125 8.94375L8.9375 2.4375C9.09028 2.28472 9.25 2.17361 9.41667 2.10417C9.58333 2.03472 9.77778 2 10 2C10.2222 2 10.4167 2.03472 10.5833 2.10417C10.75 2.17361 10.9097 2.28472 11.0625 2.4375L17.5625 8.9375C17.7153 9.09028 17.8264 9.25 17.8958 9.41667C17.9653 9.58333 18 9.77778 18 10C18 10.2222 17.9653 10.4167 17.8958 10.5833C17.8264 10.75 17.7153 10.9097 17.5625 11.0625L11.0563 17.5688C10.9076 17.7174 10.75 17.8264 10.5833 17.8958C10.4167 17.9653 10.2222 18 10 18ZM9.25 10.5H10.75V6H9.25V10.5ZM9.99563 13C10.2069 13 10.3854 12.9285 10.5312 12.7856C10.6771 12.6427 10.75 12.4656 10.75 12.2544C10.75 12.0431 10.6785 11.8646 10.5356 11.7188C10.3927 11.5729 10.2156 11.5 10.0044 11.5C9.79313 11.5 9.61458 11.5715 9.46875 11.7144C9.32292 11.8573 9.25 12.0344 9.25 12.2456C9.25 12.4569 9.32146 12.6354 9.46438 12.7812C9.60729 12.9271 9.78438 13 9.99563 13Z" fill="#E10E0E"/>
  </svg>
  
)

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")

  const handleSignIn = () => {
    if (!email.includes('@') || !email.includes('.')) {
      setError('Email or password is incorrect')
      return
    }
    // Handle sign in
    setError('')
  }

  return (
    <div className=" flex flex-col min-h-screen w-full font-dm-sans bg-body-gradient-2" >
    <div className="mb-6 flex flex-col items-center justify-center lg:hidden p-4">
              <div className="flex items-center mb-2">
                <Image
                  src="/logo-icon.png"
                  alt="Orderific Logo"
                  width={50}
                  height={50}
                  className="w-[50px] h-auto"
                  priority
                /> <span className="ml-2 text-xl font-bold text-brand">Orderific</span>
                </div>
                <h2 className={`${fontTitle1}`}>Service Panel</h2>
      </div>
      <div className="flex flex-1 md:flex-row">
      {/* Left Section - Image */}
      <div className="relative hidden lg:flex w-full w-1/4 min-w-[480px] max-w-[480px] p-2">
        <div 
          className="relative h-[400px] w-full md:h-[calc(100vh-1rem)] rounded-[20px] overflow-hidden"
          style={{
            backgroundImage: "url('/signin.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Brand orange overlay */}
          <div className="absolute inset-0 bg-brand opacity-50" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-50" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 50%, #000 100%)" }} />
          {/* Orderific Logo */}
          <div className="absolute top-6 left-6 z-10">
            <Image
              src="/Logo.webp"
              alt="Orderific Logo"
              width={150}
              height={40}
              className="w-auto h-auto"
              priority
            />
          </div>

          {/* Overlay text */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black-100/60 to-transparent p-6 text-white-100 z-10">
            <h1 className={`mb-4 ${fontBigTypoDesktop}`}>Service Panel</h1>
            <p className={`${fontBodyNormal} max-w-[90%]`}>
              Streamline your restaurant operations with BMS. Manage reservations,
              orders, inventory, and staff effortlessly, and focus on delivering
              exceptional dining experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Sign In Form */}
      <div className="flex w-full items-center justify-center px-4 py-4">
        
        <div className="w-full max-w-[360px] space-y-2">
          <div className="space-y-2 text-center">
            <h2 className={`${fontTitle1} text-black-100`}>Welcome Back</h2>
            <p className={`${fontBodyNormal} text-black-60`}>
              Manage, streamline, and thrive effortlessly.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className={`${fontCaptionBold} text-black-60 px-3`}>
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="signin"
              />
            </div>

            <div className="space-y-2">
              <label className={`${fontCaptionBold} text-black-60 px-3`}>
                Password
              </label>
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                variant="signin"
              />
            </div>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-2">
              <div className="relative h-[20px]">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked: boolean) => setRememberMe(checked)}
                  variant="custom"
                />
              </div>
              <label
                htmlFor="remember"
                className={`${fontCaptionNormal} text-black-100`}
              >
                Remember me
              </label>
            </div>
            <button
              className={`${fontCaptionBold} text-black-100 underline hover:text-black-100`}
            >
              Login with Code
            </button>
          </div>

          <MainButton
            variant="primary"
            className="w-full"
            disabled={!email || !password}
            onClick={handleSignIn}
          >
            Sign In
          </MainButton>

          {error && (
            <div className="flex pt-2 items-center">
              <ErrorIcon /> 
              <p className={`${fontCaptionNormal} text-semantic-red pl-1`}>
              {error}
              </p>
            </div>
          )}
        </div>
      </div>
      </div>
          
    </div>
  )
}
