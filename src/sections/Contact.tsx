import { useState } from "react";

type FormErrors = {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

type FormData = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const [status, setStatus] = useState("Send Message");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    // Full Name
    if (!data.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (data.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters.";
    }

    // Company Name
    if (!data.companyName.trim()) {
      newErrors.companyName = "Company name is required.";
    }

    // Email — robust regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!data.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(data.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone
    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[\d\s\-().]{7,20}$/.test(data.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    // Message
    if (!data.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries()) as FormData;

    // Run validation
    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear errors if valid
    setErrors({});
    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Message Sent!");
        formElement.reset();
      } else {
        setStatus("Failed to send");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error occurred");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus("Send Message");
      }, 3000);
    }
  };

  // Helper: input class — red border on error
  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-[#C7D6E4] border ${
      errors[field] ? "border-red-500" : "border-[#A3B7CB]"
    } text-[#0F172A] placeholder:text-[#64748B] px-4 py-2.5 rounded-[10px] focus:outline-none focus:ring-2 ${
      errors[field] ? "focus:ring-red-400" : "focus:ring-[#3A81C9]"
    } text-xs md:text-sm font-medium transition-all`;

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
          {/* Left Column */}
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

          {/* Right Column: Form */}
          <div className="w-full lg:w-120 xl:w-186 shrink-0">
            <div className="bg-[#0B1F33]/10 backdrop-blur-md border border-white/5 rounded-2xl px-4 md:px-6 py-3 md:py-5 shadow-2xl">
              <form
                className="flex flex-col space-y-3"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs md:text-base font-medium text-[#B5BBC3] mb-2"
                  >
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    className={inputClass("fullName")}
                    // Clear error on change
                    onChange={() =>
                      setErrors((prev) => ({ ...prev, fullName: undefined }))
                    }
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-xs md:text-base font-medium text-[#B5BBC3] mb-2"
                  >
                    Company Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Enter company name"
                    className={inputClass("companyName")}
                    onChange={() =>
                      setErrors((prev) => ({ ...prev, companyName: undefined }))
                    }
                  />
                  {errors.companyName && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.companyName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs md:text-base font-medium text-[#B5BBC3] mb-2"
                  >
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className={inputClass("email")}
                    onChange={() =>
                      setErrors((prev) => ({ ...prev, email: undefined }))
                    }
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs md:text-base font-medium text-[#B5BBC3] mb-2"
                  >
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone number"
                    className={inputClass("phone")}
                    onChange={() =>
                      setErrors((prev) => ({ ...prev, phone: undefined }))
                    }
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs md:text-base font-medium text-[#B5BBC3] mb-2"
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your request or operation needs"
                    className={`${inputClass("message")} resize-none`}
                    onChange={() =>
                      setErrors((prev) => ({ ...prev, message: undefined }))
                    }
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="-mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer w-full bg-[#3A84C7] hover:bg-[#2F6BA8] disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs md:text-base font-normal py-2.5 rounded-[10px] transition-colors shadow-sm"
                  >
                    {status}
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
