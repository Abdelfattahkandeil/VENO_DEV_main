"use client"

import type React from "react"

import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1A1A1A] border-t border-[#333333] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Veno<span className="text-[#7678ED]">Blog</span>
            </h3>
            <p className="text-[#AAAAAA] mb-4">
              A personal blog about web development, design, and everything in between.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <FooterLink href="/projects/veno-blog">Home</FooterLink>
              <FooterLink href="#">Articles</FooterLink>
              <FooterLink href="#">Categories</FooterLink>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              <FooterLink href="#">React</FooterLink>
              <FooterLink href="#">CSS</FooterLink>
              <FooterLink href="#">TypeScript</FooterLink>
              <FooterLink href="#">Next.js</FooterLink>
              <FooterLink href="#">Animation</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
              <FooterLink href="/#projects">Back to Portfolio</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#333333] pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#888888] text-sm mb-4 md:mb-0">© {currentYear} VenoBlog. All rights reserved.</p>
          <p className="text-[#888888] text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> by VENO.DEV
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[#AAAAAA] hover:text-[#7678ED] transition-colors">
        {children}
      </Link>
    </li>
  )
}
