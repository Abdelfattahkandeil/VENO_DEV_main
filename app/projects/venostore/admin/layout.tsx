"use client"

import Header from "../components/header"
import { useTheme } from "../context/theme-context"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme } = useTheme()

  return (
    <div className={theme}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header onCartClick={() => {}} />
        <main>{children}</main>
      </div>
    </div>
  )
} 