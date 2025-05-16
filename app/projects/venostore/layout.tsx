"use client"

import { CartProvider } from "./context/cart-context"
import { AuthProvider } from "./context/auth-context"
import { ThemeProvider } from "./context/theme-context"

export default function VenoStoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {children}
          </div>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
