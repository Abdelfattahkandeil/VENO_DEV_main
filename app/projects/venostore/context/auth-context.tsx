"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  name: string
  role: "user" | "admin"
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (email: string, password: string, name: string) => Promise<void>
  updateProfile: (data: Partial<User>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check for saved auth state on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("auth_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  // Save auth state when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("auth_user", JSON.stringify(user))
    } else {
      localStorage.removeItem("auth_user")
    }
  }, [user])

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      // TODO: Replace with actual API call
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Simulate successful login
      const mockUser: User = {
        id: "1",
        email,
        name: "Test User",
        role: "user"
      }
      
      setUser(mockUser)
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("auth_user")
  }

  const register = async (email: string, password: string, name: string) => {
    try {
      setIsLoading(true)
      // TODO: Replace with actual API call
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Simulate successful registration
      const mockUser: User = {
        id: "1",
        email,
        name,
        role: "user"
      }
      
      setUser(mockUser)
    } catch (error) {
      console.error("Registration failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const updateProfile = async (data: Partial<User>) => {
    try {
      setIsLoading(true)
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (user) {
        const updatedUser = { ...user, ...data }
        setUser(updatedUser)
      }
    } catch (error) {
      console.error("Profile update failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      isAuthenticated: !!user,
      login,
      logout,
      register,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
} 