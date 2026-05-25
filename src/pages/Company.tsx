import Contact from "../sections/Contact";
import Voyage from "../sections/Voyage";

export default function Company() {
  const operations = [
    {
      id: 1,
      icon: (
        <svg
          className="w-8 h-8 md:w-9 md:h-9"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
        >
          {/* Ship / Wave Icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18c1.5 0 2.25-.75 3.75-.75s2.25.75 3.75.75 2.25-.75 3.75-.75 2.25.75 3.75.75 2.25-.75 3.75-.75 2.25.75 3.75.75"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15l1.5-5.25h12L19.5 15H4.5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9.75V4.5l3 2.25-3 2.25"
          />
        </svg>
      ),
      text: (
        <>
          Crude oil transportation across
          <br />
          international routes
        </>
      ),
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-8 h-8 md:w-9 md:h-9"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
        >
          {/* Engine / Operations Icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10h14v5H5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 10V7h2v3m6-3h2v3M3 12h2m14 0h2m-11 3v2h6v-2"
          />
        </svg>
      ),
      text: (
        <>
          Fleet management and vessel
          <br />
          operations
        </>
      ),
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-8 h-8 md:w-9 md:h-9"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
        >
          {/* Shield & Star Icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4L12 8z"
          />
        </svg>
      ),
      text: (
        <>
          Voyage planning and
          <br />
          optimization
        </>
      ),
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-8 h-8 md:w-9 md:h-9"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
        >
          {/* Hand & Shield/Check Icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 11.25V5.25a1.875 1.875 0 113.75 0v4.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 8.25v-1.5a1.875 1.875 0 013.75 0v4.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 15.5c0 2.5-2 4-2 4s-2-1.5-2-4v-2l2-.75 2 .75v2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.5 15.5l.5.5 1-1"
          />
        </svg>
      ),
      text: (
        <>
          Safety and compliance
          <br />
          management
        </>
      ),
    },
    {
      id: 5,
      icon: (
        <svg
          className="w-8 h-8 md:w-9 md:h-9"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
        >
          {/* Route / Monitoring Icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11.25v4.5"
          />
          <rect
            x="5"
            y="15.75"
            width="14"
            height="4.5"
            rx="1.5"
            strokeDasharray="3 3"
          />
        </svg>
      ),
      text: (
        <>
          Real-time operational
          <br />
          monitoring
        </>
      ),
    },
  ];
  return (
    <>
      <section
        className="relative w-full min-h-[75vh] md:min-h-[85vh] lg:min-h-screen flex items-center font-display bg-slate-900 overflow-hidden"
        style={{
          backgroundImage: "url('/assets/company-hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-300 mx-auto px-5 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl flex flex-col text-left">
            <h1 className="text-[38px] sm:text-[46px] md:text-5xl lg:text-[60px] font-bold text-white leading-[1.1] tracking-tight mb-5 md:mb-6">
              About BlueLine <br />
              Ship Management
            </h1>

            <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#D1D5DB] leading-relaxed max-w-115">
              We are a maritime vessel management company focused on safe,
              efficient, and reliable crude transportation across global
              shipping routes.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F5F7FA] py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-display">
        <div className="max-w-300 mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-[24px] md:text-[48px] font-bold text-[#0F172A] tracking-tight mb-5 md:mb-6 leading-[1.15]">
              Who We Are
            </h2>

            <p className="text-xs md:text-lg text-[#475569] leading-relaxed mb-8 md:mb-10 max-w-[95%]">
              We operate a modern fleet of crude oil tankers, delivering safe
              and efficient maritime transportation services. Our focus is
              operational discipline, safety compliance, and real-time
              visibility across all voyages. We work with charterers, partners,
              and maritime professionals to ensure every voyage meets the
              highest international standards.
            </p>

            <h3 className="text-[24px] md:text-[48px] font-bold text-[#0F172A] tracking-tight mb-2.5">
              Our Mission
            </h3>
            <p className="text-xs md:text-lg text-[#475569] leading-relaxed mb-8 md:mb-10 max-w-[95%]">
              To deliver safe, efficient, and reliable tanker operations through
              disciplined maritime management and advanced operational systems.
            </p>

            <h3 className="text-[24px] md:text-[48px] font-bold text-[#0F172A] tracking-tight mb-2.5">
              Our Vision
            </h3>
            <p className="text-xs md:text-lg text-[#475569] leading-relaxed max-w-[95%]">
              To be a trusted global leader in crude transportation, recognized
              for safety, reliability, and operational excellence.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2">
            <div className="w-full aspect-4/5 sm:aspect-4/3 lg:aspect-square rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/assets/we.webp"
                alt="Maritime worker on deck"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F5F7FA] py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-300 mx-auto flex flex-col items-center">
          {/* Header Section */}
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0B1325] tracking-tight mb-12 lg:mb-16 text-center">
            Our Core Operations
          </h2>

          {/* Icons Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-5 relative mb-10">
            {operations.map((op, index) => (
              <div
                key={op.id}
                className="flex flex-col items-center text-center px-4 py-8 lg:py-4 relative group"
              >
                {/* Icon */}
                <div className="text-[#5C738A] mb-5">{op.icon}</div>

                {/* Text - <br /> tags handle the exact wrapping from your mockup */}
                <p className="text-[13px] text-[#475569] leading-relaxed max-w-[200px]">
                  {op.text}
                </p>

                {/* DESKTOP ONLY: Vertical Divider Line */}
                {index !== 4 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-[60px] bg-[#E2E8F0]" />
                )}

                {/* MOBILE ONLY: Short Horizontal Divider Line */}
                {index !== 4 && (
                  <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-[140px] bg-[#E2E8F0]" />
                )}
              </div>
            ))}
          </div>

          {/* Full-width Bottom Divider Line (Visible on both Mobile & Desktop) */}
          <div className="w-full max-w-[1000px] h-px bg-[#E2E8F0]" />
        </div>
      </section>

      <Voyage />

      <Contact />
    </>
  );
}
