"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"

interface OrderNumber {
  id: string
  status: "preparing" | "ready"
}

export default function OrderStatus() {
  const t = useTranslations()
  const [orders, setOrders] = useState<OrderNumber[]>([
    // Sample data - in real app this would come from an API
    { id: "3885", status: "preparing" },
    { id: "3885", status: "preparing" },
    { id: "3885", status: "preparing" },
    { id: "3885", status: "ready" },
    { id: "3885", status: "ready" },
  ])

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
        {/* Preparing Orders Section */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Preparing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {orders
                .filter((order) => order.status === "preparing")
                .map((order, index) => (
                  <div
                    key={`${order.id}-${index}`}
                    className="flex items-center justify-center rounded-lg bg-gray-200 p-4"
                  >
                    <span className="text-xl font-semibold">{order.id}</span>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Ready Orders Section */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Ready
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {orders
                .filter((order) => order.status === "ready")
                .map((order, index) => (
                  <div
                    key={`${order.id}-${index}`}
                    className="flex items-center justify-center rounded-lg bg-green-500 p-4 text-white"
                  >
                    <span className="text-xl font-semibold">{order.id}</span>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
