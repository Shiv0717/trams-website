import { ChevronRight, Mail } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* ================= PRE-FOOTER (SLAB + CONTACT STRIP) ================= */}
      <div className="relative">
        {/* DIAGONAL GREEN SLAB - Hidden on mobile, visible on larger screens */}
        <div
          className="hidden lg:block absolute left-10 top-[-100px] w-[140px] h-[180px] bg-[#9bd6a4] z-[999]"
          style={{
            clipPath: "polygon(0 100%, 30% 0, 100% 0, 70% 100%)",
          }}
        />

        {/* CONTACT STRIP */}
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 h-auto md:h-20">
          {/* LEFT */}
          <div className="bg-gray-900 px-6 md:px-10 py-4 md:py-0 flex items-center justify-center md:justify-center gap-3">
            <Mail size={24}  color="#9bd6a4" />
            <span className="text-[#9bd6a4] text-base md:text-lg leading-[20px] text-center md:text-left">
              change@tramsworld.org
            </span>
          </div>

          {/* RIGHT */}
          <div className="bg-[#9bd6a4] px-6 md:px-10 py-4 md:py-0 flex items-center justify-between cursor-pointer hover:bg-[#8ac593] transition-colors">
            <span className="text-[#152320] text-base md:text-lg font-medium">
              Drop us a message
            </span>
            <ChevronRight size={24} color="#152320" />
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <footer className="bg-gray-900 text-[#cfd8d3]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-10 pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-12 lg:pb-30">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 lg:gap-0">
            {/* LEFT – 70% on desktop */}
            <div>
              <h2 className="text-[#9bd6a4] text-4xl md:text-5xl lg:text-7xl leading-[1.2] md:leading-[1.1] lg:leading-[72px] font-semibold tracking-[-0.02em]">
                Time is running out.
                <br />
                The planet can't wait.
              </h2>

              <p className="mt-6 md:mt-[28px] text-base md:text-xl leading-[18px] text-[#aab7b1]">
                © 2025 tramsworld.org
              </p>
            </div>

            {/* RIGHT – 30% on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] gap-y-8 lg:gap-y-0">
              {/* INSIDE */}
              <div>
                <p className="text-lg md:text-xl font-light tracking-[0.18em] uppercase text-[#9bd6a4] mb-4 md:mb-[20px]">
                  Inside
                </p>
                <ul className="space-y-3 md:space-y-[12px]">
                  <li className="text-base md:text-xl hover:text-white transition-colors cursor-pointer">Home</li>
                  <li className="text-base md:text-xl hover:text-white transition-colors cursor-pointer">About</li>
                  <li className="text-base md:text-xl hover:text-white transition-colors cursor-pointer">Contact</li>
                </ul>
              </div>

              {/* LEGAL */}
              <div>
                <p className="text-lg md:text-xl font-light tracking-[0.18em] uppercase text-[#9bd6a4] mb-4 md:mb-[20px]">
                  Legal
                </p>
                <ul className="space-y-3 md:space-y-[12px]">
                  <li className="text-base md:text-xl font-light hover:text-white transition-colors cursor-pointer">
                    Privacy
                  </li>
                  <li className="text-base md:text-xl font-light hover:text-white transition-colors cursor-pointer">
                    Terms of Use
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}