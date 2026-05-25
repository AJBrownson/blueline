import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Fleets",
    "Safety & Quality",
    "Operations",
    "Company",
  ];

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-[#F5F7FA] font-display relative z-50">
      {/* Desktop & Mobile Top Bar */}
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="shrink-0 flex items-center cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-35 h-10 flex items-center justify-center">
               <img src="/assets/logo.svg" alt="Ship Logo" className="h-8 w-auto" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-base font-medium text-[#475569] hover:text-[#195E99] transition-colors whitespace-nowrap"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Right Section (Search & Button) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-4.5 w-4.5 text-slate-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full lg:w-55 pl-10 pr-4 py-2.5 text-sm text-[#818996] bg-white border border-[#DCE3EA] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#DCE3EA]/20 focus:border-[#DCE3EA] transition-all placeholder:text-[#818996]"
              />
            </div>

            {/* Contact Us Button */}
            <a href="#contact" className="bg-[#145DA0] text-white text-sm font-medium px-4 py-3 cursor-pointer rounded-[10px] transition-colors shadow-sm">
              Contact Us
            </a>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-[#195E99] hover:bg-slate-100 focus:outline-none transition-colors"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                // Hamburger Icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                // Close Icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 bg-[#F5F7FA] border-t border-slate-100 shadow-lg">
          {/* Mobile Links */}
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-[#475569] hover:text-[#195E99] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Search & Button */}
          <div className="pt-4 border-t border-slate-100 space-y-4">
            <div className="relative px-3">
              <div className="absolute inset-y-0 left-3 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-4.5 w-4.5 text-slate-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 text-[14px] text-slate-700 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#195E99]/20 focus:border-[#195E99]"
              />
            </div>

            <div className="px-3">
              <a href="#contact" className="w-full bg-[#1A619F] hover:bg-[#144D7E] text-white text-[15px] font-medium px-6 py-2.5 rounded-md transition-colors shadow-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
