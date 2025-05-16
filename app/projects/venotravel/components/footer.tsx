"use client"

import type React from "react"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0081A7] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/projects/venotravel" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-white">Veno</span>
              <span className="text-[#F07167]">Travel</span>
            </Link>
            <p className="text-white/80 mb-6">
              Discover the world with VenoTravel. We offer unforgettable travel experiences to the most breathtaking
              destinations around the globe.
            </p>
            <div className="flex space-x-4">
              <SocialButton icon={<Facebook size={18} />} href="#" />
              <SocialButton icon={<Twitter size={18} />} href="#" />
              <SocialButton icon={<Instagram size={18} />} href="#" />
              <SocialButton icon={<Youtube size={18} />} href="#" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">Destinations</FooterLink>
              <FooterLink href="#">Packages</FooterLink>
              <FooterLink href="#">Special Offers</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">About Us</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <FooterLink href="#">FAQs</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms & Conditions</FooterLink>
              <FooterLink href="#">Cancellation Policy</FooterLink>
              <FooterLink href="/#projects">Back to Portfolio</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>123 Travel Street, Adventure City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 flex-shrink-0" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 flex-shrink-0" size={18} />
                <span>info@venotravel.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg flex-1 text-gray-800 focus:outline-none"
                />
                <button className="bg-[#F07167] px-4 py-2 rounded-r-lg hover:bg-[#F07167]/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center md:flex md:justify-between md:text-left">
          <p>© {currentYear} VenoTravel. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed with <span className="text-[#F07167]">♥</span> by VENO.DEV
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialButton({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:text-[#F07167] transition-colors">
        {children}
      </Link>
    </li>
  )
}
