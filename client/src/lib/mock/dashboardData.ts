export type TimeRange = "daily" | "weekly" | "monthly" | "yearly"
export type RestaurantStatus = "OPEN" | "BUSY" | "CLOSED"

export type MockDataType = {
  stats: {
    revenue: number
    allOrders: number
    paidOrders: number
    accepted: number
    completed: number
    canceled: number
  }
  popularItems: Array<{ name: string; orders: number }>
  payments: Record<string, number>
  completedOrders: Array<{ frequency: string; orders: number }>
}

export const statusMultipliers: Record<RestaurantStatus, number> = {
  OPEN: 1,
  BUSY: 1.5,  // 50% more activity during busy times
  CLOSED: 0.1 // Only 10% of normal activity (pending/processing orders)
}

export const baseMockDataByRange: Record<TimeRange, MockDataType> = {
  daily: {
    stats: {
      revenue: 3145.00,
      allOrders: 290,
      paidOrders: 173,
      accepted: 38,
      completed: 155,
      canceled: 8
    },
    popularItems: [
      { name: "Double Chicken Burger + French fries", orders: 88 },
      { name: "Mexican Burger", orders: 74 },
      { name: "Double Cheese", orders: 56 },
      { name: "Double Spicy Bean Burger", orders: 41 },
      { name: "Potato Gems", orders: 38 },
      { name: "Beer", orders: 32 }
    ],
    payments: {
      Card: 1400,
      PayPal: 400,
      "Apple pay": 395,
      Cash: 365,
      Crypto: 270
    },
    completedOrders: [
      { frequency: "8 AM", orders: 25 },
      { frequency: "9 AM", orders: 32 },
      { frequency: "10 AM", orders: 28 },
      { frequency: "4 PM", orders: 45 },
      { frequency: "6 PM", orders: 69 },
      { frequency: "8 PM", orders: 42 }
    ]
  },
  weekly: {
    stats: {
      revenue: 22145.00,
      allOrders: 1890,
      paidOrders: 1573,
      accepted: 298,
      completed: 1255,
      canceled: 42
    },
    popularItems: [
      { name: "Double Chicken Burger + French fries", orders: 456 },
      { name: "Mexican Burger", orders: 389 },
      { name: "Double Cheese", orders: 345 },
      { name: "Double Spicy Bean Burger", orders: 289 },
      { name: "Potato Gems", orders: 234 },
      { name: "Beer", orders: 198 }
    ],
    payments: {
      Card: 9800,
      PayPal: 5400,
      "Apple pay": 2895,
      Cash: 2450,
      Crypto: 1600
    },
    completedOrders: [
      { frequency: "Mon", orders: 180 },
      { frequency: "Tue", orders: 220 },
      { frequency: "Wed", orders: 269 },
      { frequency: "Thu", orders: 240 },
      { frequency: "Fri", orders: 290 },
      { frequency: "Sat", orders: 310 },
      { frequency: "Sun", orders: 280 }
    ]
  },
  monthly: {
    stats: {
      revenue: 94580.00,
      allOrders: 7890,
      paidOrders: 6573,
      accepted: 1298,
      completed: 5255,
      canceled: 142
    },
    popularItems: [
      { name: "Double Chicken Burger + French fries", orders: 1856 },
      { name: "Mexican Burger", orders: 1589 },
      { name: "Double Cheese", orders: 1345 },
      { name: "Double Spicy Bean Burger", orders: 1089 },
      { name: "Potato Gems", orders: 934 },
      { name: "Beer", orders: 798 }
    ],
    payments: {
      Card: 42800,
      PayPal: 22400,
      "Apple pay": 12895,
      Cash: 9850,
      Crypto: 6635
    },
    completedOrders: [
      { frequency: "Week 1", orders: 1280 },
      { frequency: "Week 2", orders: 1420 },
      { frequency: "Week 3", orders: 1569 },
      { frequency: "Week 4", orders: 1640 }
    ]
  },
  yearly: {
    stats: {
      revenue: 1145800.00,
      allOrders: 89890,
      paidOrders: 76573,
      accepted: 15298,
      completed: 62255,
      canceled: 1842
    },
    popularItems: [
      { name: "Double Chicken Burger + French fries", orders: 22856 },
      { name: "Mexican Burger", orders: 18589 },
      { name: "Double Cheese", orders: 15345 },
      { name: "Double Spicy Bean Burger", orders: 12089 },
      { name: "Potato Gems", orders: 10934 },
      { name: "Beer", orders: 9798 }
    ],
    payments: {
      Card: 528000,
      PayPal: 282400,
      "Apple pay": 162895,
      Cash: 108500,
      Crypto: 64005
    },
    completedOrders: [
      { frequency: "Jan", orders: 12280 },
      { frequency: "Feb", orders: 11420 },
      { frequency: "Mar", orders: 13569 },
      { frequency: "Apr", orders: 12840 },
      { frequency: "May", orders: 13920 },
      { frequency: "Jun", orders: 14569 },
      { frequency: "Jul", orders: 13840 },
      { frequency: "Aug", orders: 12920 },
      { frequency: "Sep", orders: 11569 },
      { frequency: "Oct", orders: 12840 },
      { frequency: "Nov", orders: 11920 },
      { frequency: "Dec", orders: 13568 }
    ]
  }
}

export const timeRangeOptions = [
  { label: "Today", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "Yearly", value: "yearly" },
]

export const adjustDataForStatus = (
  data: MockDataType,
  status: RestaurantStatus
): MockDataType => {
  const multiplier = statusMultipliers[status]

  return {
    stats: {
      revenue: Math.round(data.stats.revenue * multiplier),
      allOrders: Math.round(data.stats.allOrders * multiplier),
      paidOrders: Math.round(data.stats.paidOrders * multiplier),
      accepted: Math.round(data.stats.accepted * multiplier),
      completed: Math.round(data.stats.completed * multiplier),
      canceled: Math.round(data.stats.canceled * (status === "BUSY" ? 1.8 : multiplier))
    },
    popularItems: data.popularItems.map(item => ({
      name: item.name,
      orders: Math.round(item.orders * multiplier)
    })),
    payments: Object.entries(data.payments).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: Math.round(value * multiplier)
    }), {}),
    completedOrders: data.completedOrders.map(item => ({
      frequency: item.frequency,
      orders: Math.round(item.orders * multiplier)
    }))
  }
} 