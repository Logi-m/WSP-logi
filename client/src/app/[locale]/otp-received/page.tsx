"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  fontTitle1,
  fontTitle2,
  fontTitle3,
  fontBodyBold,
  fontBodyNormal,
  fontCaptionBold,
  fontCaptionNormal,
  fontBodyLinkNormal,
} from "@/styles/typography"
import SearchInput from "@/components/SearchInput/SearchInput"

interface Rider {
  id: string
  name: string
  time: string
  avatar?: string
  otp?: string
  amount?: number
}

export default function OTPConfirmationPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRider, setSelectedRider] = useState<Rider | null>(null)

  // Sample data - replace with actual data source
  const riders: Rider[] = [
    {
      id: "296571905",
      name: "Nasser Alsubai",
      time: "9 Feb 2024 — 10:24",
      otp: "674951",
      amount: 86.60,
    },
    // Add more sample riders as needed
  ]

  return (
    <main className="h-screen w-full flex flex-col overflow-hidden">
      <header className={cn(fontTitle1, "h-16 flex items-center px-6")}>
        OTP Confirmation
      </header>

      <div className="flex flex-1 overflow-hidden p-4">
        <section className="flex h-full w-full overflow-hidden rounded-[25px] bg-white/60">
          {/* Left Panel */}
          <div className="flex h-full w-[360px] flex-col border-r border-black-10">
            {/* Search Header */}
            <div className="h-[60px] px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={cn(fontBodyBold, "text-black-100")}>Pending</span>
                <div className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-black px-1.5">
                  <span className={cn(fontCaptionBold, "text-white")}>
                    {riders.length}
                  </span>
                </div>
              </div>

              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search riders..."
              />
            </div>

            {/* Riders List */}
            <div className="custom-scrollbar flex-1 overflow-y-auto divide-y divide-black-10">
              {riders.map((rider) => (
                <div
                  key={rider.id}
                  className="p-4 hover:bg-black-5 cursor-pointer transition-colors"
                  onClick={() => setSelectedRider(rider)}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-black-5 flex items-center justify-center">
                      {rider.avatar ? (
                        <Image
                          src={rider.avatar}
                          alt={rider.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      ) : (
                        <span className={cn(fontCaptionBold, "text-black-100")}>
                          {rider.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col">
                        <span
                          className={cn(fontBodyBold, "text-black-100 truncate")}
                        >
                          {rider.name}
                        </span>
                        <span
                          className={cn(fontCaptionNormal, "text-black-60")}
                        >
                          {rider.time}
                        </span>
                      </div>
                    </div>
                    {rider.otp && (
                      <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-semantic-red-100" />
                        <span className={cn(fontBodyBold, "text-black-100")}>
                          {rider.otp}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex-1 h-full flex flex-col">
            {selectedRider && (
              <div className="h-[60px] px-4 flex items-center border-b border-black-10">
                <button
                  className={cn(
                    fontBodyLinkNormal,
                    "text-black-100 hover:text-black-60 transition-colors underline"
                  )}
                  onClick={() => setSelectedRider(null)}
                >
                  Close
                </button>
              </div>
            )}
            
            <div className="custom-scrollbar flex-1 overflow-y-auto">
              {selectedRider ? (
                <div className="flex flex-col items-center max-w-[600px] mx-auto px-2 py-3">
                  <div className="h-[120px] w-[120px] rounded-full bg-black-5 flex items-center justify-center mb-1">
                    {selectedRider.avatar ? (
                      <Image
                        src={selectedRider.avatar}
                        alt={selectedRider.name}
                        width={120}
                        height={120}
                        className="rounded-full"
                      />
                    ) : (
                      <span className={cn(fontTitle2, "text-black-100")}>
                        {selectedRider.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  <h2 className={cn(fontTitle3, "text-black-100 mb-1")}>
                    {selectedRider.name}
                  </h2>
                  <p className={cn(fontBodyNormal, "text-black-60 mb-2")}>
                    ID: {selectedRider.id}
                  </p>

                  {selectedRider.otp && (
                    <p className={cn(fontTitle1, "text-brand-orange mb-1")}>
                      {selectedRider.otp}
                    </p>
                  )}

                  <p
                    className={cn(
                      fontBodyNormal,
                      "text-black-100 text-center mb-1.5"
                    )}
                  >
                    The OTP code has been entered correctly. Now, collect the cash
                    and click on the "Accept Cash Transfer" button.
                  </p>

                  <div className="mb-1.5">
                    <p className={cn(fontBodyNormal, "text-center")}>
                      The amount you should receive:
                    </p>
                    <p className={cn(fontTitle1, "text-black-100 text-center")}>
                      ${selectedRider.amount?.toFixed(2)}
                    </p>
                  </div>

                  <button
                    className={cn(
                      fontBodyBold,
                      "rounded-full bg-black-5 hover:bg-black-10 px-6 py-3 transition-colors"
                    )}
                  >
                    Accept Cash Transfer
                  </button>
                </div>
              ) : (
                <div className="flex h-full items-center justify-center px-2">
                  <p className={cn(fontBodyNormal, "text-black-60")}>
                    Select a rider to see info
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
