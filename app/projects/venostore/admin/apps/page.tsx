"use client"

import { useState } from "react"
import {
  Grid,
  Search,
  ShoppingBag,
  MessageSquare,
  Mail,
  CreditCard,
  TruckIcon,
  BarChart2,
  Share2,
  Globe,
  Plus,
} from "lucide-react"

interface App {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  category: string
  status: "installed" | "not_installed"
  price: string
}

const apps: App[] = [
  {
    id: "1",
    name: "Social Media Integration",
    description: "Connect and share your products on social media platforms",
    icon: <Share2 className="w-8 h-8 text-blue-500" />,
    category: "Marketing",
    status: "installed",
    price: "Free",
  },
  {
    id: "2",
    name: "Advanced Analytics",
    description: "Detailed insights and reporting for your store",
    icon: <BarChart2 className="w-8 h-8 text-purple-500" />,
    category: "Analytics",
    status: "installed",
    price: "$29/mo",
  },
  {
    id: "3",
    name: "Shipping Manager",
    description: "Manage shipping rates and delivery options",
    icon: <TruckIcon className="w-8 h-8 text-green-500" />,
    category: "Shipping",
    status: "not_installed",
    price: "$19/mo",
  },
  {
    id: "4",
    name: "Payment Gateway",
    description: "Accept payments from multiple providers",
    icon: <CreditCard className="w-8 h-8 text-red-500" />,
    category: "Payments",
    status: "installed",
    price: "Free",
  },
  {
    id: "5",
    name: "Email Marketing",
    description: "Create and manage email campaigns",
    icon: <Mail className="w-8 h-8 text-yellow-500" />,
    category: "Marketing",
    status: "not_installed",
    price: "$39/mo",
  },
  {
    id: "6",
    name: "Live Chat",
    description: "Real-time customer support integration",
    icon: <MessageSquare className="w-8 h-8 text-indigo-500" />,
    category: "Support",
    status: "not_installed",
    price: "$24/mo",
  },
]

const categories = ["All", "Marketing", "Analytics", "Shipping", "Payments", "Support"]

export default function AppsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredApps = apps.filter((app) => {
    const matchesCategory = selectedCategory === "All" || app.category === selectedCategory
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">App Store</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Enhance your store with powerful integrations</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-[#1a73e8] text-white rounded-md hover:bg-[#1557b0] transition-colors">
          <Plus className="w-5 h-5 mr-2" />
          Submit App
        </button>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search apps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md ${
                  selectedCategory === category
                    ? "bg-[#1a73e8] text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApps.map((app) => (
          <div
            key={app.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">{app.icon}</div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{app.price}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{app.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{app.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">{app.category}</span>
              <button
                className={`px-4 py-2 rounded-md ${
                  app.status === "installed"
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    : "bg-[#1a73e8] text-white hover:bg-[#1557b0]"
                }`}
              >
                {app.status === "installed" ? "Installed" : "Install"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 