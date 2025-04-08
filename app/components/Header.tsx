// app/components/Header.tsx
'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#2c3e1f]">
            West Quarter.
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-[#2c3e1f] hover:text-[#8B4513] transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-[#2c3e1f] hover:text-[#8B4513] transition-colors"
            >
              About
            </Link>
            <Link 
              href="/menu" 
              className="text-[#2c3e1f] hover:text-[#8B4513] transition-colors"
            >
              Menu
            </Link>
            <Link 
              href="/contact" 
              className="text-[#2c3e1f] hover:text-[#8B4513] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#2c3e1f]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}