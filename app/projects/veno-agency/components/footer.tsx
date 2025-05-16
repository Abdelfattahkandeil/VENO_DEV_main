"use client"

import type React from "react"

import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111111] border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#00F5D4]">VENO</span>AGENCY
            </div>
            <p className="text-gray-400 mb-4">Creating exceptional digital experiences that drive results.</p>
            <div className="flex space-x-4">
              <SocialIcon href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </SocialIcon>
              <SocialIcon href="#" aria-label="Dribbble">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Web Design</FooterLink>
              <FooterLink href="#">Web Development</FooterLink>
              <FooterLink href="#">UI/UX Design</FooterLink>
              <FooterLink href="#">Digital Marketing</FooterLink>
              <FooterLink href="#">Brand Strategy</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#" onClick={() => {}}>
                About Us
              </FooterLink>
              <FooterLink href="#">Our Work</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#" onClick={() => {}}>
                Contact
              </FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
              <FooterLink href="#">Sitemap</FooterLink>
              <FooterLink href="/#projects">Back to Portfolio</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© {currentYear} VenoAgency. All rights reserved.</p>
          <p className="text-gray-500 text-sm">
            Designed with <span className="text-[#00F5D4]">♥</span> by VENO.DEV
          </p>
        </div>
      </div>
    </footer>
  )
}

interface SocialIconProps {
  href: string
  children: React.ReactNode
  "aria-label": string
}

function SocialIcon({ href, children, "aria-label": ariaLabel }: SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="w-8 h-8 bg-[#1A1A1A] border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-[#00F5D4] hover:border-[#00F5D4]/50 transition-colors duration-300"
    >
      {children}
    </a>
  )
}

interface FooterLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

function FooterLink({ href, children, onClick }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} onClick={onClick} className="text-gray-400 hover:text-[#00F5D4] transition-colors duration-300">
        {children}
      </Link>
    </li>
  )
}
