

export default function Contact() {
  return (
    <section
      className="relative w-full -mt-16 py-20 md:py-32 flex items-center justify-center overflow-hidden bg-slate-900 font-display"
      style={{
        backgroundImage: "url('/assets/contact.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="contact"
    >

      <div className="relative z-10 w-full max-w-362 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start justify-between">
          {/* Left Column: Typography */}
          <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left mt-0 lg:mt-12">
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-medium text-white tracking-tight mb-4 md:mb-6 leading-[1.1]">
              How can we <br className="hidden lg:block" /> help you?
            </h2>
            <p className="text-xs md:text-lg text-[#D1D5DB] leading-relaxed max-w-lg mx-auto lg:mx-0">
              We provide reliable maritime and shipping solutions designed to
              support your operations, move cargo efficiently, and deliver
              trusted services across every stage of the journey.
            </p>
          </div>

          {/* Right Column: Glassmorphism Form Container */}
          <div className="w-full lg:w-120 shrink-0">
            <div className="bg-[#0B1F33]/10 backdrop-blur-md border border-white/5 rounded-2xl px-4 md:px-6 py-3 md:py-5 shadow-2xl">
              <form
                className="flex flex-col space-y-3"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs md:text-base font-medium text-[#B5BBC3] mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your full name"
                    className="w-full bg-[#C7D6E4] border border-[#A3B7CB] text-[#0F172A] placeholder:text-[#64748B] px-4 py-2.5 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#3A81C9] text-xs md:text-sm font-medium transition-all"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-xs md:text-base font-medium text-[#B5BBC3] mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    placeholder="Enter company name"
                    className="w-full bg-[#C7D6E4] border border-[#A3B7CB] text-[#0F172A] placeholder:text-[#64748B] px-4 py-2.5 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#3A81C9] text-xs md:text-sm font-medium transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs md:text-base font-medium text-[#B5BBC3] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="w-full bg-[#C7D6E4] border border-[#A3B7CB] text-[#0F172A] placeholder:text-[#64748B] px-4 py-2.5 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#3A81C9] text-xs md:text-sm font-medium transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs md:text-base font-medium text-[#B5BBC3] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter phone number"
                    className="w-full bg-[#C7D6E4] border border-[#A3B7CB] text-[#0F172A] placeholder:text-[#64748B] px-4 py-2.5 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#3A81C9] text-xs md:text-sm font-medium transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs md:text-base font-medium text-[#B5BBC3]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your request or operation needs"
                    className="w-full bg-[#C7D6E4] border border-[#A3B7CB] text-[#0F172A] placeholder:text-[#64748B] px-4 py-2.5 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#3A81C9] text-xs md:text-sm font-medium transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="-mt-2">
                  <button
                    type="submit"
                    className="cursor-pointer w-full bg-[#3A84C7] hover:bg-[#2F6BA8] text-white text-xs md:text-base font-normal py-2.5 rounded-[10px] transition-colors shadow-sm"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
