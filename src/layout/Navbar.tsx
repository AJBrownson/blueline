import { useState } from "react";

type NavLinkLabel =
  | "Home"
  | "Fleets"
  | "Safety & Quality"
  | "Operations"
  | "Company";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navLinks: NavLinkLabel[] = [
    "Home",
    "Fleets",
    "Safety & Quality",
    "Operations",
    "Company",
  ];

  const toggleMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper function to handle routing correctly across multiple pages
  const getLinkUrl = (link: NavLinkLabel): string => {
    if (link === "Home") return "/";
    if (link === "Company") return "/company";

    // The "/" before the "#" guarantees that even if a user is on the Company page,
    // clicking "Fleets" will route them back to the Home page and scroll down.
    return `/#${link.toLowerCase().replace(/ /g, "-")}`;
  };

  return (
    <nav className="w-full bg-[#F5F7FA] font-display relative z-50">
      {/* Desktop & Mobile Top Bar */}
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="shrink-0 flex items-center cursor-pointer">
            <div className="flex items-center gap-2">
              <a href="/">
                <div className="w-35 h-10 flex items-center justify-center">
                  <img
                    src="/assets/logo.svg"
                    alt="Ship Logo"
                    className="h-8 w-auto"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={getLinkUrl(link)}
                    className="text-base font-medium text-[#475569] hover:text-[#195E99] transition-colors whitespace-nowrap"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Right Section (Search & Button) */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
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
                className="w-14 h-11 p-2.5 text-sm text-transparent focus:text-[#818996] bg-white border border-[#DCE3EA] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#DCE3EA]/20 focus:border-[#DCE3EA] transition-all"
              />
            </div>

            {/* Contact Us Button */}
            <div className="px-3">
              <a
                href="https://wa.me/YOUR_PHONE_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#1A619F] hover:bg-[#144D7E] text-white text-[15px] font-medium px-6 py-2.5 rounded-md transition-colors shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4.5 h-4.5 fill-current"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 334.1l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                Whatsapp Us
              </a>
            </div>
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
                  href={getLinkUrl(link)}
                  onClick={() => setIsMobileMenuOpen(false)} // Closes the mobile menu when a link is clicked!
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
                className="w-full pl-10 pr-4 py-2 text-[14px] text-slate-700 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#195E99]/20 focus:border-[#195E99]"
              />
            </div>

            <div className="px-3">
              <a
                href="https://wa.me/YOUR_PHONE_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#1A619F] hover:bg-[#144D7E] text-white text-[15px] font-medium px-6 py-2.5 rounded-md transition-colors shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4.5 h-4.5 fill-current"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 334.1l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                Whatsapp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
