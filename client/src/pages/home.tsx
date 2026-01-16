import { Link } from "wouter";
import { CheckCircle2, Phone, SlidersHorizontal, PenTool, CircleDollarSign, Play, Star } from "lucide-react";
import heroVideo from "@assets/generated_videos/aerial_view_of_roofers_working_on_a_house_roof.mp4";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden bg-white text-black font-sans">
      {/* Hero Section with Video */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            src={heroVideo} 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-40% to-transparent z-10 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-50% to-transparent z-10 md:hidden" />
          <div className="absolute inset-x-0 bottom-0 h-[450px] bg-gradient-to-t from-white via-white/95 via-40% to-transparent z-10" />
        </div>

        {/* Navigation */}
        <nav className="relative z-50 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48 py-8 flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-12">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <img src="/images/logo.png" alt="Logo" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 text-lg font-medium text-gray-800">
              <a href="#" className="hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="hover:text-primary transition-colors">Website Results</a>
              <a href="#" className="hover:text-primary transition-colors">About</a>
              <a href="#" className="hover:text-primary transition-colors">Services</a>
              <a href="#" className="hover:text-primary transition-colors">Resources</a>
              <a href="#" className="hover:text-primary transition-colors">Reviews</a>
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden sm:flex items-center gap-2 text-gray-800">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-medium text-sm md:text-base">612-473-3432</span>
            </div>
            <button className="bg-primary text-white px-4 md:px-6 py-2.5 md:py-3 font-bold uppercase tracking-wide text-xs md:text-sm hover:bg-black transition-colors cursor-pointer shrink-0 rounded-sm">
              Schedule Intro Call
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48 pt-16 md:pt-32 lg:pt-36 pb-20">
          <div className="max-w-3xl">
            <h2 className="text-gray-600 font-bold tracking-widest text-sm mb-4 uppercase">
              Home Services Marketing Agency
            </h2>
            
            <h1 className="text-[clamp(1.8rem,11vw,3.8rem)] md:text-6xl lg:text-7xl font-heading font-bold uppercase leading-[0.9] mb-6 md:mb-10 text-black tracking-tight break-words">
              Championing<br />
              Hometown Heroes
            </h1>

            <div className="space-y-4 mb-8 md:mb-12">
              <div className="flex items-start gap-3 md:gap-4">
                <SlidersHorizontal className="w-5 h-5 md:w-6 md:h-6 text-gray-600 mt-1 shrink-0" />
                <p className="text-base md:text-lg font-medium text-black">
                  <span className="font-bold">Proactive:</span> We make suggestions that actually move the needle each month.
                </p>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4">
                <PenTool className="w-5 h-5 md:w-6 md:h-6 text-gray-600 mt-1 shrink-0" />
                <p className="text-base md:text-lg font-medium text-black">
                  <span className="font-bold">Cutting Edge:</span> We're always utilizing the latest technology and sharing that with you.
                </p>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4">
                <CircleDollarSign className="w-5 h-5 md:w-6 md:h-6 text-gray-600 mt-1 shrink-0" />
                <p className="text-base md:text-lg font-medium text-black">
                  <span className="font-bold">Transparent ROI Partner:</span> We show you all the work we complete each month.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 mb-12 md:mb-20">
              <button className="w-full sm:w-auto bg-primary text-white px-6 md:px-8 py-3.5 md:py-4 font-bold uppercase tracking-wide text-sm md:text-base hover:bg-black transition-colors cursor-pointer rounded-sm">
                Get Started Now
              </button>
              
              <a href="#" className="flex items-center gap-2 font-bold underline decoration-1 underline-offset-4 text-black hover:text-primary transition-colors text-sm md:text-base">
                <Play className="w-4 h-4 fill-black" />
                Real Customer Experiences
              </a>
            </div>

            {/* Badges / Social Proof */}
            <div className="flex flex-wrap items-center gap-8 border-t border-gray-200 pt-8">
              {/* Google Reviews */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="text-sm font-bold leading-tight text-black">
                  <div className="flex text-yellow-500 mb-0.5">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  170+ Five-Star<br/>Google Reviews
                </div>
              </div>

              <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>

              {/* Best Places to Work */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-black flex flex-col items-center justify-center text-[8px] font-bold leading-none bg-black text-white">
                    <span>BP</span>
                    <div className="w-full h-px bg-white my-0.5"></div>
                    <span>/W</span>
                </div>
                <div className="text-sm font-bold leading-tight text-black">
                  #6 Best Small<br/>Biz to Work For
                </div>
              </div>

              <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>

                {/* Inc 5000 */}
                <div className="flex items-center gap-3">
                  <div className="font-serif font-black italic text-2xl tracking-tighter text-black">
                    Inc.<br/><span className="text-xs not-italic font-sans block -mt-1 tracking-normal text-gray-500">5000</span>
                  </div>
                  <div className="text-sm font-bold leading-tight text-black">
                  Ranked #2031 on<br/>the INC. 5000
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="bg-white py-24 w-full relative z-20">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48">
          <div 
            className="relative overflow-hidden rounded-2xl bg-[#18181B] p-8 md:p-12 border border-[#323232]"
            style={{
              boxShadow: '0 -4px 0 0 #323232',
              borderTopWidth: '4px',
              borderLeftWidth: '1px',
              borderRightWidth: '1px',
              borderBottomWidth: '1px'
            }}
          >
            <div className="max-w-4xl">
              <h3 className="text-[#A1A1AA] font-bold tracking-widest text-xs mb-6 uppercase">
                Elevating Home Service Businesses
              </h3>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase leading-tight mb-12 text-white">
                We Love Serving Our Industry
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                <div className="bg-[#27272A]/50 border border-[#3F3F46] p-6 rounded-xl flex items-center gap-4 hover:bg-[#27272A] transition-colors cursor-pointer group">
                   <div className="w-12 h-12 flex items-center justify-center text-white">
                      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
                      </svg>
                   </div>
                   <span className="text-xl font-bold text-white uppercase tracking-tight">Roofing</span>
                </div>

                <div className="bg-[#27272A]/50 border border-[#3F3F46] p-6 rounded-xl flex items-center gap-4 hover:bg-[#27272A] transition-colors cursor-pointer group">
                   <div className="w-12 h-12 flex items-center justify-center text-white">
                      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M12 12v-4M12 12l3 3M12 12l-3 3" />
                        <path d="M12 7v1M12 16v1M7 12h1M16 12h1" />
                      </svg>
                   </div>
                   <span className="text-xl font-bold text-white uppercase tracking-tight">HVAC</span>
                </div>

                <div className="bg-[#27272A]/50 border border-[#3F3F46] p-6 rounded-xl flex items-center gap-4 hover:bg-[#27272A] transition-colors cursor-pointer group">
                   <div className="w-12 h-12 flex items-center justify-center text-white">
                      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 3v18M3 12h18" strokeDasharray="2 2"/>
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                   </div>
                   <span className="text-xl font-bold text-white uppercase tracking-tight">Plumbing</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-white leading-tight">
                    Industry leaders recognize our work & endorse us
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-[#A1A1AA]">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                      <span>We're constantly learning about the trades</span>
                    </li>
                    <li className="flex items-center gap-3 text-[#A1A1AA]">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                      <span>Dedicated to driving more leads to your business</span>
                    </li>
                    <li className="flex items-center gap-3 text-[#A1A1AA]">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                      <span>We partner with the best in roofing, HVAC, plumbing and home services</span>
                    </li>
                  </ul>
                  
                  <div className="bg-[#09090B] p-6 rounded-xl border border-[#27272A] relative overflow-hidden group">
                    <p className="text-sm italic text-[#D1D1D6] mb-4 relative z-10">
                      "This last year we spent far less than before, and we generated well over a million dollars in sales from paid ads."
                    </p>
                    <div className="flex items-center gap-3 relative z-10">
                      <img src="https://avatar.vercel.sh/marcus" alt="Marcus" className="w-10 h-10 rounded-full border border-[#3F3F46]" />
                      <div>
                        <div className="text-xs font-bold text-white uppercase tracking-wider">Marcus Sheridan</div>
                        <div className="text-[10px] text-[#71717A] uppercase">Home Services Client</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer">
                   <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80" 
                    alt="Clients and Coaches" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black transition-transform group-hover:scale-110">
                        <Play className="w-6 h-6 fill-current ml-1" />
                      </div>
                   </div>
                   <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">
                      Clients & Coaches
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
