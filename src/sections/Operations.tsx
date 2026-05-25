export default function Operations() {
  const stats = [
    {
      id: 1,
      icon: (
        <img src="/assets/icons/boat.svg" alt="Ship Icon" className="w-8.5 h-8.5 text-slate-300 mb-5" />
      ),
      value: "200M+",
      label: "Barrels Transported",
    },
    {
      id: 2,
      icon: (
        <img src="/assets/icons/engine.svg" alt="Engine Icon" className="w-8.5 h-8.5 text-slate-300 mb-5" />
      ),
      value: "3+",
      label: "Years Operations",
    },
    {
      id: 3,
      icon: (
        <img src="/assets/icons/honour-star.svg" alt="Reliability Icon" className="w-8.5 h-8.5 text-slate-300 mb-5" />
      ),
      value: "99.8%",
      label: "Voyage Reliability",
    },
    {
      id: 4,
      icon: (
        <img src="/assets/icons/road-location-02.svg" alt="Monitoring Icon" className="w-8.5 h-8.5 text-slate-300 mb-5" />
      ),
      value: "24/7",
      label: "Fleet Monitoring",
    },
  ];

  return (
    <section
      className="relative w-full -mt-10 xl:-mt-24 py-24 md:py-32 xl:py-35 font-display overflow-hidden bg-[#020B14]"
      style={{
        backgroundImage: "url('/assets/operations-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="operations"
    >

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[28px] md:text-[36px] xl:text-5xl font-semibold text-white tracking-tight mb-4 md:mb-6">
            Trusted Maritime Operations
          </h2>
          <p className="text-sm md:text-base text-[#B5BBC3] max-w-124 mx-auto leading-relaxed">
            Delivering reliable ship management, vessel operations, and maritime
            support with precision, safety, and operational excellence across
            global waters.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            // Dynamic borders to act as fluid dividers that adapt to the responsive grid
            let borderClasses = "";
            if (index === 0)
              borderClasses =
                "border-b border-slate-600/30 sm:border-r lg:border-b-0";
            if (index === 1)
              borderClasses =
                "border-b border-slate-600/30 lg:border-r lg:border-b-0";
            if (index === 2)
              borderClasses =
                "border-b border-slate-600/30 sm:border-b-0 sm:border-r lg:border-r";

            return (
              <div
                key={stat.id}
                className={`flex flex-col items-center justify-center p-8 sm:p-10 lg:p-8 ${borderClasses} transition-all duration-300`}
              >
                {stat.icon}
                <span className="text-[28px] md:text-[32px] font-bold text-white mb-1.5 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[13px] text-slate-400 font-medium">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
