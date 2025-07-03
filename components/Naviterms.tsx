'use client';
import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"
import {useState} from "react";


const navItems = [
    {label : 'Home' , href : '/'},
    {label : 'Companions' , href : '/companion'},
    {label : 'My Journay' , href : '/my-journey'},
]

const NavItems = () => {


  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
      <div className="relative">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
              {navItems.map(({ label, href }) => (
                  <Link
                      href={href}
                      key={label}
                      className={cn(
                          pathname === href ? 'text-primary font-semibold' : 'text-gray-700'
                      )}
                  >
                      {label}
                  </Link>
              ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
              <button
                  onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-700 focus:outline-none"
              >
                  ☰
              </button>
          </div>

          {/* Mobile Nav Dropdown */}
          {isMobileMenuOpen && (
              <div className="absolute top-full mt-2 right-0 bg-white shadow-md rounded-md p-4 flex flex-col gap-2 z-50 md:hidden">
                  {navItems.map(({ label, href }) => (
                      <Link
                          href={href}
                          key={label}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                              pathname === href ? 'text-primary font-semibold' : 'text-gray-700'
                          )}
                      >
                          {label}
                      </Link>
                  ))}
              </div>
          )}
      </div>
  );
};

export default NavItems