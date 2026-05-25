import Voyage from "./sections/Voyage"
import Contact from "./sections/Contact"

export default function Company() {
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
            efficient, and reliable crude transportation across global shipping
            routes.
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
            We operate a modern fleet of crude oil tankers, delivering safe and 
            efficient maritime transportation services. Our focus is operational 
            discipline, safety compliance, and real-time visibility across all voyages. 
            We work with charterers, partners, and maritime professionals to ensure 
            every voyage meets the highest international standards.
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
            To be a trusted global leader in crude transportation, recognized for 
            safety, reliability, and operational excellence.
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

      <Voyage />
      <Contact />
    </>
  );
}
