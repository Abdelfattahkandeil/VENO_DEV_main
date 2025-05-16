"use client"

import { useState } from "react"
import {
  BarChart,
  DollarSign,
  ShoppingBag,
  Users,
  TrendingUp,
  Calendar,
} from "lucide-react"

interface StatCard {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ReactNode
}

const stats: StatCard[] = [
  {
    title: "Total Revenue",
    value: "$48,574",
    change: "+12.5%",
    trend: "up",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    title: "Total Orders",
    value: "845",
    change: "+8.2%",
    trend: "up",
    icon: <ShoppingBag className="w-6 h-6" />,
  },
  {
    title: "Active Users",
    value: "2,420",
    change: "+5.7%",
    trend: "up",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "-0.8%",
    trend: "down",
    icon: <TrendingUp className="w-6 h-6" />,
  },
]

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7d")

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Track your store's performance</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="24h">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
            <Calendar className="w-4 h-4 mr-2" />
            Custom Range
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-3 rounded-full ${
                  stat.trend === "up"
                    ? "bg-green-100 dark:bg-green-900"
                    : "bg-red-100 dark:bg-red-900"
                }`}
              >
                {stat.icon}
              </div>
              <span
                className={`text-sm font-medium ${
                  stat.trend === "up"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">
              {stat.title}
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Revenue Overview</h3>
          <div className="h-80 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg">
            <BarChart className="w-12 h-12 text-gray-400 dark:text-gray-600" />
            <span className="ml-2 text-gray-500 dark:text-gray-400">Chart Component Here</span>
          </div>
        </div>

        {/* Orders Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Orders Overview</h3>
          <div className="h-80 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg">
            <BarChart className="w-12 h-12 text-gray-400 dark:text-gray-600" />
            <span className="ml-2 text-gray-500 dark:text-gray-400">Chart Component Here</span>
          </div>
        </div>
      </div>
    </div>
  )
} 