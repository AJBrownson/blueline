

export default function Voyage() {
  return (
    <section className="w-full bg-[#F5F7F9] py-20 md:py-32 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Top Heading */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0F172A] tracking-tight mb-4">
            The People Behind Every Voyage
          </h2>
          <p className="text-sm md:text-base text-[#475569] max-w-124 mx-auto leading-relaxed">
            Experienced maritime professionals driving operational excellence 
            across every voyage.
          </p>
        </div>

        {/* Main Feature Image */}
        <div className="w-full max-w-4xl mx-auto mb-6">
          <img
            src="/assets/voyage.webp"
            alt="Maritime Professionals on site"
            className="w-full h-auto md:h-112.5 object-cover rounded-2xl grayscale shadow-sm"
          />
        </div>

        {/* Image Caption */}
        <div className="mb-24 md:mb-32 px-4">
          <p className="text-sm md:text-base text-[#475569] italic max-w-196 mx-auto leading-relaxed">
            BlueLine Ship Management operates through four global business
            divisions, each structured with end-to-end 
            responsibility for strategy, operations, service delivery, and
            performance excellence.
          </p>
        </div>

        <div>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0F172A] tracking-tight mb-4">
            Operational Sustainability
          </h2>
          <p className="text-sm md:text-base text-[#475569] max-w-124 mx-auto leading-relaxed">
            Focused on fuel efficiency, emissions optimization, and 
            responsible tanker operations.
          </p>
        </div>
      </div>
    </section>
  );
}
