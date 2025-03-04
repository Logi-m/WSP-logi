'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { fontTitle1, fontTitle2, fontHeadline, fontButtonSmall } from '@/styles/typography';
import { cn } from '@/lib/utils';
import { useFullscreen } from "@/providers/FullscreenProvider";

// Mock data - replace with actual data source
const preparingOrders = Array(31).fill('3885');
const readyOrders = Array(18).fill('3885');

export default function OrderStatus() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { isFullscreen, setIsFullscreen } = useFullscreen();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="mt-1 h-screen flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h1 className={cn(fontTitle1, "text-black-100")}>Order Status</h1>
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className={cn(fontButtonSmall, "flex items-center gap-2 text-black-100 border border-black-10 rounded-full px-4 py-2")}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10V5H1.5V8.5H5V10H0ZM8.5 5V1.5H5V0H10V5H8.5Z" fill="black"/>
            </svg>

          FullScreen
        </button>
      </div>

      {/* Brand Header */}
      <div className="mx-4 bg-black-5 rounded-lg p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#DA291C] rounded-lg flex items-center justify-center">
            <Image
              src="/mcdonalds-logo.png"
              alt="McDonald's"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <span className={cn(fontHeadline, "text-black-100 font-normal")}>McDonald's</span>
        </div>
        <span className={cn(fontTitle1, "text-black-100")}>
          {format(currentTime, 'HH:mm')}
        </span>
      </div>

      {/* Status Sections Container */}
      <div className="m-4 flex gap-4 flex-1 min-h-0">
        {/* Preparing Section */}
        <section className="flex-1 bg-white rounded-lg p-6 flex flex-col h-full">
          <h2 className={cn(fontTitle1, "text-center mb-6")}>Preparing</h2>
          <div className="overflow-y-auto masonry-scroll-container flex-1 text-center">
            {preparingOrders.map((order, index) => (
              <div
                key={index}
                className="inline-block h-16 min-w-[160px] px-3 mb-2 mr-2 bg-black-10 rounded-lg text-center leading-[64px]"
              >
                <span className={cn(fontTitle2, "text-black-100")}>{order}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Ready Section */}
        <section className="w-[385px] bg-white rounded-lg p-6 flex flex-col h-full">
          <h2 className={cn(fontTitle1, "text-center mb-6")}>Ready</h2>
            <div className="overflow-y-auto masonry-scroll-container flex-1 text-center ">
          <div className="h-32 w-full bg-status-accepted rounded-lg flex items-center justify-center mb-4">
            <span className={cn(fontTitle2, "text-white-100")}>3885</span>
          </div>
          <div className="flex-1 items-center justify-center">
            {readyOrders.map((order, index) => (
              <div
                key={index}
                className="inline-block h-16 min-w-[100px] px-3 mb-2 mr-2 bg-status-accepted rounded-lg text-center leading-[64px]"
              >
                <span className={cn(fontTitle2, "text-white-100")}>{order}</span>
              </div>
            ))}
          </div>
        </div>
        </section>
      </div>
    </main>
  );
}
