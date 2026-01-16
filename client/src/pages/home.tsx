import { Link } from "wouter";
import { CheckCircle2, Phone, SlidersHorizontal, PenTool, CircleDollarSign, Play, Star } from "lucide-react";
import heroVideo from "@assets/generated_videos/aerial_view_of_roofers_working_on_a_house_roof.mp4";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white text-black font-sans">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          src={heroVideo} 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-25% to-transparent z-10 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 md:hidden" />
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
      <main className="relative z-20 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48 pt-16 md:pt-32 lg:pt-36 pb-20">
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
      </main>
      
      {/* New Industry Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48">
          <div className="bg-[#18181B] rounded-[2rem] p-8 md:p-16 relative overflow-hidden group">
            {/* Top Border Effect (Thicker at top, fading out) */}
            <div 
              className="absolute inset-x-0 top-0 h-[3px] bg-[#323232] rounded-t-[2rem]"
              style={{
                maskImage: 'linear-gradient(to bottom, black, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
              }}
            />
            {/* Subtle side borders */}
            <div className="absolute inset-0 border border-[#323232]/20 rounded-[2rem] pointer-events-none" />

            <div className="relative z-10 text-center mb-16">
              <h2 className="text-[#A1A1AA] font-bold tracking-[0.2em] text-xs mb-4 uppercase">
                Elevating Home Service Businesses
              </h2>
              <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tight">
                We Love Serving Our Industry
              </h3>
            </div>

            {/* Industry Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { title: 'Roofing', icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> },
                { title: 'HVAC', icon: <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M12 12l0 -9M12 12l9 0M12 12l0 9M12 12l-9 0" /> },
                { title: 'Plumbing', icon: <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /> }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="bg-[#27272A]/50 border border-[#3f3f46] rounded-xl p-8 flex items-center justify-center gap-4 hover:bg-[#27272A] transition-all cursor-pointer group/card"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-10 h-10 text-white opacity-80 group-hover/card:scale-110 transition-transform"
                  >
                    {item.icon}
                  </svg>
                  <span className="text-white text-2xl font-black uppercase italic tracking-tighter">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer Content */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-12 border-t border-[#3f3f46]/30">
              <div className="max-w-xl text-left">
                <h4 className="text-white text-xl md:text-2xl font-bold mb-6">
                  Industry leaders recognize our work & endorse us
                </h4>
                <ul className="space-y-4 mb-8">
                  {[
                    "We're constantly learning about the trades",
                    "Dedicated to driving more leads to your business",
                    "We partner with the best in roofing, HVAC, plumbing and home services"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm md:text-base font-medium text-[#D1D5DB]">
                      <CheckCircle2 className="w-4 h-4 text-[#A3E635] shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
                <div className="bg-[#09090B] rounded-2xl p-6 flex items-start gap-4 border border-[#27272A]">
                  <p className="text-sm italic text-[#A1A1AA] leading-relaxed">
                    "This last year we spent far less than before, and we generated well over a million dollars in sales from paid ads."
                    <span className="block mt-2 font-bold not-italic text-white uppercase tracking-wider text-xs">
                      Marcus Sheridan, Home Services Client
                    </span>
                  </p>
                  <div className="w-12 h-12 rounded-full bg-gray-800 shrink-0 overflow-hidden border border-[#3f3f46]">
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800" />
                  </div>
                </div>
              </div>

              {/* Video Mockup */}
              <div className="relative w-full lg:w-[480px] aspect-video rounded-2xl overflow-hidden shadow-2xl group/video">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-6 h-6 fill-black text-black ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                  <span className="text-white font-black uppercase text-2xl italic tracking-tighter">
                    Clients & Coaches
                  </span>
                </div>
                <div className="w-full h-full bg-[#18181B] flex items-end justify-center">
                  <div className="w-full h-3/4 bg-gradient-to-t from-[#A3E635]/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
