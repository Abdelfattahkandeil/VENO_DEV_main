"use client"

import { useState } from "react"
import {
  Store,
  CreditCard,
  Mail,
  Bell,
  Shield,
  Globe,
  Truck,
  Users,
  Save,
} from "lucide-react"

interface SettingsSection {
  id: string
  title: string
  icon: React.ReactNode
  component: React.ReactNode
}

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("general")
  const [storeName, setStoreName] = useState("VenoStore")
  const [storeEmail, setStoreEmail] = useState("contact@venostore.com")
  const [currency, setCurrency] = useState("USD")
  const [language, setLanguage] = useState("en")
  const [timezone, setTimezone] = useState("UTC")

  const sections: SettingsSection[] = [
    {
      id: "general",
      title: "General Settings",
      icon: <Store className="w-5 h-5" />,
      component: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Store Name
            </label>
            <input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Store Email
            </label>
            <input
              type="email"
              value={storeEmail}
              onChange={(e) => setStoreEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="JPY">JPY (¥)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Timezone
              </label>
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="UTC">UTC</option>
                <option value="EST">EST</option>
                <option value="PST">PST</option>
                <option value="GMT">GMT</option>
              </select>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "payment",
      title: "Payment Settings",
      icon: <CreditCard className="w-5 h-5" />,
      component: <div className="text-gray-600 dark:text-gray-400">Payment settings content</div>,
    },
    {
      id: "shipping",
      title: "Shipping",
      icon: <Truck className="w-5 h-5" />,
      component: <div className="text-gray-600 dark:text-gray-400">Shipping settings content</div>,
    },
    {
      id: "notifications",
      title: "Notifications",
      icon: <Bell className="w-5 h-5" />,
      component: <div className="text-gray-600 dark:text-gray-400">Notification settings content</div>,
    },
    {
      id: "security",
      title: "Security",
      icon: <Shield className="w-5 h-5" />,
      component: <div className="text-gray-600 dark:text-gray-400">Security settings content</div>,
    },
    {
      id: "team",
      title: "Team Members",
      icon: <Users className="w-5 h-5" />,
      component: <div className="text-gray-600 dark:text-gray-400">Team settings content</div>,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Manage your store preferences</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                activeSection === section.id
                  ? "bg-[#1a73e8] text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {section.icon}
              <span>{section.title}</span>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            {sections.find((section) => section.id === activeSection)?.component}
          </div>

          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <button className="flex items-center px-6 py-3 bg-[#1a73e8] text-white rounded-md hover:bg-[#1557b0] transition-colors">
              <Save className="w-5 h-5 mr-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 