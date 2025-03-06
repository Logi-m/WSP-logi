"use client"

import { useState } from "react"
import {
  AssignmentTurnedInIcon,
  CancelIcon,
  CheckCircleIcon,
  LabProfileIcon,
  MonetizationIcon,
  ReceiptLongIcon,
} from "@/icons"
import { CustomSelect } from "@/components/ui/custom-select"
import { CompletedOrdersChart } from "@/components/completedOrdersChart"
import { PopularItems } from "@/components/popularItems"
import { PaymentDistribution } from "@/components/paymentDistribution"
import { adjustDataForStatus, baseMockDataByRange, timeRangeOptions } from "@/lib/mock/dashboardData"
import type { TimeRange, RestaurantStatus } from "@/lib/mock/dashboardData"
import { fontHeadline, fontBodyNormal, fontTitle2 } from "@/styles/typography"
import { cn } from "@/lib/utils"

const yearlyCompletedOrders = [
  { frequency: "Jan", orders: 269 }, { frequency: "Feb", orders: 285 },
  { frequency: "Mar", orders: 255 }, { frequency: "Apr", orders: 240 },
  { frequency: "May", orders: 290 }, { frequency: "Jun", orders: 269 },
  { frequency: "Jul", orders: 310 }, { frequency: "Aug", orders: 285 },
  { frequency: "Sep", orders: 255 }, { frequency: "Oct", orders: 240 },
  { frequency: "Nov", orders: 290 }, { frequency: "Dec", orders: 269 }
]

const statusConfig = {
  OPEN: "bg-semantic-green-100 text-white",
  BUSY: "bg-semantic-yellow-100 text-black",
  CLOSED: "bg-semantic-red-100 text-white"
}

const timeRangeSelectOptions = [
  { value: "daily" as TimeRange, label: "Today" },
  { value: "weekly" as TimeRange, label: "Weekly" },
  { value: "monthly" as TimeRange, label: "Monthly" },
  { value: "yearly" as TimeRange, label: "Yearly" }
]

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState<TimeRange>("daily")
  const [currentStatus, setCurrentStatus] = useState<RestaurantStatus>("OPEN")

  const data = adjustDataForStatus(baseMockDataByRange[timeRange], currentStatus)

  return (
    <div className="px-4">
      {/* Header Section */}
      <div className="flex items-center justify-between py-7">
        <h1 className="text-2xl font-semibold text-black-100">Dashboard</h1>
        <CustomSelect<TimeRange>
          options={timeRangeSelectOptions}
          sortByText="Range"
          onOptionSelect={(option) => setTimeRange(option.value)}
          defaultValue={timeRangeSelectOptions[0]}
          menuPosition="right"
          selectWidth="w-48"
          menuWidth="min-w-[140px]"
        />
      </div>

      {/* Restaurant Status Section */}
      <div className="min-h-[96px] w-full flex items-center justify-start gap-2 rounded-3 bg-black-5 p-4 hidden lg:flex">
        <h2 className={cn("text-black-100 mr-3", fontHeadline)}>Restaurant Status</h2>
        {(["OPEN", "BUSY", "CLOSED"] as RestaurantStatus[]).map((status) => (
          <button
            key={status}
            onClick={() => setCurrentStatus(status)}
            className={cn(
              "px-2 py-2 rounded-full transition-colors",
              fontBodyNormal,
              currentStatus === status
                ? statusConfig[status]
                : "bg-white/60 text-black/100"
            )}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid min-w-[196px] grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 py-4">
        {/* Revenue Card */}
        <div className={cn(
          "min-h-[195px] max-w-[194px] lg:max-w-[173px] xl:max-w-[214px] w-full h-full",
          "rounded-3 p-4",
          "bg-brand text-white-100" // Override for revenue card
        )}>
          <div className="flex flex-col h-full">
            <MonetizationIcon className="mb-auto" />
            <div>
              <p className={cn("mb-2", fontBodyNormal)}>Revenue</p>
              <p className={fontTitle2}>${data.stats.revenue.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* All Orders Card */}
        <div className={cn(
          "min-h-[195px] max-w-[194px] lg:max-w-[173px] xl:max-w-[214px] w-full h-full",
          "rounded-3 p-4 bg-white-100"
        )}>
          <div className="flex flex-col h-full">
            <LabProfileIcon className="mb-auto" />
            <div>
              <p className={cn("mb-2", fontBodyNormal)}>All Orders</p>
              <p className={fontTitle2}>{data.stats.allOrders}</p>
            </div>
          </div>
        </div>

        {/* Paid Orders Card */}
        <div className={cn(
          "min-h-[195px] max-w-[194px] lg:max-w-[173px] xl:max-w-[214px] w-full h-full",
          "rounded-3 p-4 bg-white-100"
        )}>
          <div className="flex flex-col h-full">
            <ReceiptLongIcon className="mb-auto" />
            <div>
              <p className={cn("mb-2", fontBodyNormal)}>Paid Orders</p>
              <p className={fontTitle2}>{data.stats.paidOrders}</p>
            </div>
          </div>
        </div>

        {/* Accepted Card */}
        <div className={cn(
          "min-h-[195px] max-w-[194px] lg:max-w-[173px] xl:max-w-[214px] w-full h-full",
          "rounded-3 p-4 bg-white-100"
        )}>
          <div className="flex flex-col h-full">
            <AssignmentTurnedInIcon className="mb-auto" />
            <div>
              <p className={cn("mb-2", fontBodyNormal)}>Accepted</p>
              <p className={fontTitle2}>{data.stats.accepted}</p>
            </div>
          </div>
        </div>

        {/* Completed Card */}
        <div className={cn(
          "min-h-[195px] max-w-[194px] lg:max-w-[173px] xl:max-w-[214px] w-full h-full",
          "rounded-3 p-4 bg-white-100"
        )}>
          <div className="flex flex-col h-full">
            <CheckCircleIcon className="mb-auto" />
            <div>
              <p className={cn("mb-2", fontBodyNormal)}>Completed</p>
              <p className={fontTitle2}>{data.stats.completed}</p>
            </div>
          </div>
        </div>

        {/* Canceled Card */}
        <div className={cn(
          "min-h-[195px] max-w-[194px] lg:max-w-[173px] xl:max-w-[214px] w-full h-full",
          "rounded-3 p-4 bg-white-100"
        )}>
          <div className="flex flex-col h-full">
            <CancelIcon className="mb-auto text-semantic-red" />
            <div>
              <p className={cn("mb-2", fontBodyNormal)}>Canceled</p>
              <p className={fontTitle2}>{data.stats.canceled}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid flex-1 grid-cols-1 gap-2 lg:grid-cols-3 ">
        {/* Left Column - Popular Items */}
        <div className="col-span-1">
          <PopularItems
            startDate="2024-03-01"
            endDate="2024-03-07"
            mockData={data.popularItems}
          />
        </div>

        {/* B. Charts Column */}
        <div className="col-span-1 flex flex-col gap-2 lg:col-span-2">
          {/* 1. Completed Orders Chart */}
          <div className="w-full">
            <CompletedOrdersChart
              startDate="2024-03-01"
              endDate="2024-03-07"
              frequency={timeRange}
              mockData={timeRange === "yearly" ? yearlyCompletedOrders : data.completedOrders}
            />
          </div>

          {/* 2. Payment Distribution */}
          <div className="">
            <PaymentDistribution
              startDate="2024-03-01"
              endDate="2024-03-07"
              mockData={data.payments}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
