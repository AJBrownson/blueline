

export default function Contact() {
  return (
    <section
      className="relative w-full py-20 md:py-32 flex items-center justify-center overflow-hidden bg-slate-900 font-display"
      style={{
        // Replace this with the actual path to your downloaded background image
        backgroundImage: "url('/images/contact-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heavy dark overlay to ensure text and form stand out */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full max-w-362 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start justify-between">
          {/* Left Column: Typography */}
          <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left mt-0 lg:mt-12">
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-medium text-white tracking-tight mb-4 md:mb-6 leading-[1.1]">
              How can we <br className="hidden lg:block" /> help you?
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#D1D5DB] leading-relaxed max-w-lg mx-auto lg:mx-0">
              We provide reliable maritime and shipping solutions designed to
              support your operations, move cargo efficiently, and deliver
              trusted services across every stage of the journey.
            </p>
          </div>

          {/* Right Column: Glassmorphism Form Container */}
          <div className="w-full lg:w-[480px] flex-shrink-0">
            <div className="bg-[#0A111A]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              <form
                className="flex flex-col space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-[13px] font-medium text-white/90 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter you full name" // Kept exactly as written in the mockup
                    className="w-full bg-[#D6E0EB] text-slate-900 placeholder:text-slate-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A81C9] text-[14px] transition-all"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-[13px] font-medium text-white/90 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    placeholder="Enter company name"
                    className="w-full bg-[#D6E0EB] text-slate-900 placeholder:text-slate-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A81C9] text-[14px] transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[13px] font-medium text-white/90 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="w-full bg-[#D6E0EB] text-slate-900 placeholder:text-slate-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A81C9] text-[14px] transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[13px] font-medium text-white/90 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter phone number"
                    className="w-full bg-[#D6E0EB] text-slate-900 placeholder:text-slate-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A81C9] text-[14px] transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[13px] font-medium text-white/90 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your request or operation needs"
                    className="w-full bg-[#D6E0EB] text-slate-900 placeholder:text-slate-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A81C9] text-[14px] transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#3A81C9] hover:bg-[#2F6BA8] text-white text-[15px] font-medium py-[14px] rounded-md transition-colors shadow-sm"
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
