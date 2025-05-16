"use client"

import { useState } from "react"
import Header from "./components/header"
import HomePage from "./components/home-page"
import Footer from "./components/footer"
import CartSidebar from "./components/cart-sidebar"
import { CartProvider } from "./context/cart-context"
import { AuthProvider } from "./context/auth-context"
import { ThemeProvider } from "./context/theme-context"
import "./styles.css"

export default function VenoStore() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <div className="venostore-app min-h-screen flex flex-col bg-gray-50">
            <Header onCartClick={() => setCartOpen(true)} />
            <main className="flex-grow">
              <HomePage />
            </main>
            <Footer />
            <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
          </div>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
