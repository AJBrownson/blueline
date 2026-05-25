import { useState } from "react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Tracking");
  const [selectedRadio, setSelectedRadio] = useState("container");

  const tabs = ["Tracking", "Schedules", "Contacts"];

  return (
    <div
      className="relative w-full min-h-screen font-display flex flex-col items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#020B14]"
      style={{
        backgroundImage: "url('/assets/hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mt-12 sm:mt-16">
        <h1 className="w-full max-w-205.75 mx-auto text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Global Excellence in Maritime <br className="hidden md:block" />
          Operations
        </h1>

        <p className="text-base md:text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed">
          Safe, efficient, and data-driven tanker operations trusted across{" "}
          <br className="hidden md:block" />
          international maritime routes.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-16 sm:mb-24 w-full sm:w-auto">
          <a
            href="#contact"
            className="bg-[#145DA0] text-white cursor-pointer px-6 py-3 rounded-md md:rounded-[10px] font-medium transition-colors shadow-lg w-full sm:w-auto text-[15px]"
          >
            Contact Us
          </a>
          <a
            href="#fleets"
            className="bg-white text-[#0F172A] cursor-pointer px-6 py-3 rounded-md md:rounded-[10px] font-medium transition-colors shadow-lg w-full sm:w-auto text-[15px]"
          >
            Explore Fleet
          </a>
        </div>

        {/* Tracking Widget Card */}
        <div className="w-full max-w-162 bg-[#0B1F33] backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#274460] text-left">
          {/* Tabs */}
          <div className="flex gap-6 sm:gap-8 border-b border-slate-700/80 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-[14px] font-medium transition-colors cursor-pointer relative ${
                  activeTab === tab
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-300"
                }`}
              >
                {tab}
                {/* Active Tab Indicator */}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#2E8BC0] rounded-t-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Radio Options */}
          <div className="flex flex-col gap-4 mb-6">
            <label
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => setSelectedRadio("container")}
            >
              <div
                className={`w-4.5 h-4.5 rounded-full flex items-center justify-center border transition-colors ${
                  selectedRadio === "container"
                    ? "border-[#4A90E2]"
                    : "border-slate-500 group-hover:border-slate-400"
                }`}
              >
                {selectedRadio === "container" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4A90E2]"></div>
                )}
              </div>
              <span
                className={`text-[14px] ${selectedRadio === "container" ? "text-white" : "text-slate-300"}`}
              >
                Container / Bill of Landing Number
              </span>
            </label>

            <label
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => setSelectedRadio("booking")}
            >
              <div
                className={`w-4.5 h-4.5 rounded-full flex items-center justify-center border transition-colors ${
                  selectedRadio === "booking"
                    ? "border-[#4A90E2]"
                    : "border-slate-500 group-hover:border-slate-400"
                }`}
              >
                {selectedRadio === "booking" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4A90E2]"></div>
                )}
              </div>
              <span
                className={`text-[14px] ${selectedRadio === "booking" ? "text-white" : "text-slate-300"}`}
              >
                Booking Number
              </span>
            </label>
          </div>

          {/* Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
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
              placeholder="Coming soon"
              disabled
              className="w-full bg-[#132C45] text-[#8795A6] pl-11 pr-4 py-3.5 text-[14px] rounded-xl border border-[#274460] focus:outline-none focus:border-[#4A90E2] transition-colors placeholder:text-[#8795A6] cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
