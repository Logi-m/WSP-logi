"use client"

import { StringDecoder } from "string_decoder"
import { useAuth } from "@/providers/AuthProvider/AuthProvider"

import { useGetBestSellers } from "@/lib/hooks/queries/reports/useGetBestSellers"
import { Card, CardContent } from "@/components/ui/card"
import Spinner from "@/components/spinner"
import { fontTitle1, fontCaptionBold , fontCaptionNormal } from "@/styles/typography"
import { cn } from "@/lib/utils"

interface MenuItem {
  name: string
  orderCount: number
}

interface PopularItemsProps {
  startDate: string
  endDate: string
  mockData?: { name: string; orders: number }[]
}

export function PopularItems({ startDate, endDate, mockData }: PopularItemsProps) {
  const { brandId } = useAuth()

  const { data: bestSellersData, isLoading } = useGetBestSellers({
    brand_id: brandId || "",
    time_frame: "day",
    start_date: startDate,
    end_date: endDate,
    page_limit: 10,
  })

  const menuItems: MenuItem[] = mockData
    ? mockData.map((item) => ({
        name: item.name,
        orderCount: item.orders,
      }))
    : bestSellersData?.data.data.map((item) => ({
        name: item.item_name,
        orderCount: item.order,
      })) || []

  return (
    <div className="flex h-full flex-col rounded-3xl bg-black-5 p-6">
      <h2 className={cn("mb-4 text-black-100", fontTitle1)}>Popular Items</h2>
      {isLoading && !mockData ? (
        <div className="flex h-full items-center justify-center">
          <Spinner />
        </div>
      ) : menuItems.length === 0 ? (
        <CardContent className="flex h-[32vh] items-center justify-center">
          <span className="text-muted-foreground">No data available yet</span>
        </CardContent>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="min-h-[115px] flex h-full flex-col justify-between rounded-2xl bg-white-60 p-4 shadow-sm"
            >
              <h3 className={cn("text-black-100", fontCaptionBold)}>{item.name}</h3>
              <p className={cn("mt-2 text-black-60", fontCaptionNormal)}>
                Order:{" "}
                <span className={cn("text-black-100", fontCaptionBold)}>
                  {item.orderCount}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
