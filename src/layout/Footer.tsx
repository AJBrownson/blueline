

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A64A3] text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 font-display">
      <div className="max-w-350 mx-auto">
        {/* Main Bordered Card Container */}
        <div className="border border-white/20 rounded-2xl overflow-hidden mb-10">
          {/* Top Section: Links & Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 p-8 md:p-0 gap-y-10 md:gap-y-0">
            {/* Column 1: Contact */}
            <div className="md:p-10 lg:p-12 md:border-r border-white/20">
              <h3 className="text-sm md:text-xl text-[#A1BED9] font-semibold tracking-wide mb-6">
                CONTACT
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-xs md:text-sm text-[#A1BED9] mb-1">Email:</p>
                  <a
                    href="mailto:bluelineshipmgt@gmail.com"
                    className="text-xs md:text-base hover:underline"
                  >
                    bluelineshipmgt@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-[#A1BED9] mb-1">
                    Head Office address:
                  </p>
                  <p className="text-xs md:text-base leading-relaxed">
                    3 St Andrew's Rd#01-01Singapore 178598
                  </p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-[#A1BED9] mb-1">
                    Local Address:
                  </p>
                  <p className="text-xs md:text-base leading-relaxed">
                    No. 5 Chief Manilla Pepple str, Bonny Island
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="md:p-10 lg:p-12 md:border-r border-white/20">
              <h3 className="text-sm md:text-xl text-[#A1BED9] font-semibold tracking-wide mb-6">
                SERVICES
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#ship-management"
                    className="text-xs md:text-base  hover:text-white/70 transition-colors"
                  >
                    Ship Management
                  </a>
                </li>
                <li>
                  <a
                    href="#crew-management"
                    className="text-xs md:text-base  hover:text-white/70 transition-colors"
                  >
                    Crew Management
                  </a>
                </li>
                <li>
                  <a
                    href="#marine-operations"
                    className="text-xs md:text-base  hover:text-white/70 transition-colors"
                  >
                    Marine Operations
                  </a>
                </li>
                <li>
                  <a
                    href="#technical-support"
                    className="text-xs md:text-base  hover:text-white/70 transition-colors"
                  >
                    Technical Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="md:p-10 lg:p-12">
              <h3 className="text-sm md:text-xl text-[#A1BED9] font-semibold tracking-wide mb-6">
                COMPANY
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#about-us"
                    className="text-[14px] hover:text-white/70 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="text-[14px] hover:text-white/70 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#news"
                    className="text-[14px] hover:text-white/70 transition-colors"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[14px] hover:text-white/70 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle Section: Big Logo */}
          <div className="border-t border-white/20 p-8 md:p-12 lg:p-16 flex justify-center items-center">
            <img
              src="/assets/footer-logo.webp"
              alt="BlueLine Ship Management Large Logo"
              className="w-full max-w-200 h-auto object-contain select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/70">
          <p>© 2026 BlueLine Ship. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <a href="#linkedin" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#twitter" className="hover:text-white transition-colors">
              X/Twitter
            </a>
            <a href="#facebook" className="hover:text-white transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
