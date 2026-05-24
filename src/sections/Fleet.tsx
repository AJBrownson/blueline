export default function Fleet() {
  const fleetData = [
    {
      id: 1,
      image: "/assets/fleet1.webp",
      name: "Crude Oceanic",
      dwt: "115,000 MT",
      cargo: "Crude Oil",
      status: "Active & Operational",
    },
    {
      id: 2,
      image: "/assets/fleet2.webp",
      name: "Atlantic Voyager",
      dwt: "98,500 MT",
      cargo: "Refined Petroleum Products",
      status: "Under Charter Operations",
    },
    {
      id: 3,
      image: "/assets/fleet3.webp",
      name: "Sea Fortune",
      dwt: "74,200 MT",
      cargo: "Chemical & Liquid Bulk",
      status: "Active Fleet Service",
    },
    {
      id: 4,
      image: "/assets/fleet4.webp",
      name: "Ocean Titan",
      dwt: "157,000 MT",
      cargo: "Crude & Heavy Fuel Oil",
      status: "International Operations",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:pt-35 md:pb-20 px-4 sm:px-6 lg:px-8 font-display">
      <div className="max-w-312.5 mx-auto">
        {/* Top Section: Split Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16">
          {/* Left: Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0F172A] leading-[1.15] tracking-tight mb-6">
              Built on Safety, Precision <br className="hidden md:block" />&
              Operational Discipline
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#475569] leading-relaxed max-w-xl">
              We manage tanker operations with a strong commitment to safety,
              regulatory compliance, fuel efficiency, and seamless operational
              performance. Through real-time visibility and transparent
              communication, we ensure charterers, partners, and stakeholders
              stay informed while maintaining reliable and efficient maritime
              operations.
            </p>
          </div>

          {/* Right: Image Collage */}
          <div className="w-full lg:w-[55%] relative">
            {/* Main Grayscale Worker Image */}
            <div className="w-full aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/assets/worker.webp"
                alt="Maritime Worker"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Top Right Floating Images */}
            <div className="absolute top-4 right-4 flex flex-col gap-3">
              <img
                src="/assets/ship-1.webp"
                alt="Ship Deck"
                className="w-24 h-16 sm:w-28 sm:h-20 object-cover rounded-xl border-3 border-[#F5F7FA] shadow-md"
              />
              <img
                src="/assets/ship-2.webp"
                alt="Cargo Containers"
                className="w-24 h-16 sm:w-28 sm:h-20 object-cover rounded-xl border-3 border-[#F5F7FA] shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <hr className="border-t border-slate-200 mb-12" />

        {/* Bottom Section: Fleet Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
          <p className="text-[13px] md:text-[14px] text-[#475569] leading-relaxed max-w-sm">
            Delivering reliable tanker operations across global maritime routes
            with efficiency, safety, and compliance at every level.
          </p>

          <button className="flex items-center gap-2 px-4 py-3 bg-transparent border border-[#145DA0] text-[#145DA0] rounded-[10px] text-[13px] font-medium transition-colors whitespace-nowrap">
            View More Fleet
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetData.map((vessel) => (
            <div key={vessel.id} className="flex flex-col group">
              {/* Vessel Image */}
              <div className="w-full aspect-4/3 rounded-xl overflow-hidden mb-5 shadow-sm">
                <img
                  src={vessel.image}
                  alt={vessel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Vessel Data Specs */}
              <div className="flex flex-col space-y-1.5 text-[12px] md:text-[13px]">
                <div className="flex items-baseline">
                  <span className="text-[#64748B] mr-1.5">Vessel Name:</span>
                  <span className="text-[#0F172A] font-semibold italic">
                    {vessel.name}
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-[#64748B] mr-1.5">
                    Deadweight (DWT):
                  </span>
                  <span className="text-[#0F172A] font-semibold">
                    {vessel.dwt}
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-[#64748B] mr-1.5">Cargo Type:</span>
                  <span className="text-[#0F172A] font-semibold">
                    {vessel.cargo}
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-[#64748B] mr-1.5">Status:</span>
                  <span className="text-[#0F172A] font-semibold">
                    {vessel.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
