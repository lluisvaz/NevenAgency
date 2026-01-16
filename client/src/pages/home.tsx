import { Link } from "wouter";
import { CheckCircle2, Phone, SlidersHorizontal, PenTool, CircleDollarSign, Play, Star } from "lucide-react";
import heroVideo from "@assets/generated_videos/aerial_view_of_roofers_working_on_a_house_roof.mp4";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white font-sans">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          src={heroVideo} 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 w-full px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-heading tracking-tight">
            <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={2.5} />
            <span>HOOK</span>
            <span className="font-light text-gray-400 text-sm mt-1 ml-1 tracking-widest">AGENCY</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-200">
            <a href="#" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="hover:text-primary transition-colors">Website Results</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Services</a>
            <a href="#" className="hover:text-primary transition-colors">Resources</a>
            <a href="#" className="hover:text-primary transition-colors">Reviews</a>
            <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-200">
            <Phone className="w-4 h-4 text-primary" />
            <span className="font-medium">612-473-3432</span>
          </div>
          <button className="bg-primary text-black px-6 py-3 font-bold uppercase tracking-wide text-sm hover:bg-white transition-colors cursor-pointer">
            Schedule Intro Call
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative z-20 container mx-auto px-6 pt-32 lg:pt-48 pb-20">
        <div className="max-w-3xl">
          <h2 className="text-gray-400 font-bold tracking-widest text-sm mb-4 uppercase">
            Home Services Marketing Agency
          </h2>
          
          <h1 className="text-6xl lg:text-8xl font-heading font-bold uppercase leading-[0.9] mb-10 text-white">
            Championing<br />
            Hometown Heroes
          </h1>

          <div className="space-y-4 mb-12">
            <div className="flex items-start gap-4">
              <SlidersHorizontal className="w-6 h-6 text-gray-400 mt-1 shrink-0" />
              <p className="text-lg font-medium text-white">
                <span className="font-bold">Proactive:</span> We make suggestions that actually move the needle each month.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <PenTool className="w-6 h-6 text-gray-400 mt-1 shrink-0" />
              <p className="text-lg font-medium text-white">
                <span className="font-bold">Cutting Edge:</span> We're always utilizing the latest technology and sharing that with you.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <CircleDollarSign className="w-6 h-6 text-gray-400 mt-1 shrink-0" />
              <p className="text-lg font-medium text-white">
                <span className="font-bold">Transparent ROI Partner:</span> We show you all the work we complete each month.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 mb-20">
            <button className="w-full sm:w-auto bg-primary text-black px-8 py-4 font-bold uppercase tracking-wide text-base hover:bg-white transition-colors cursor-pointer">
              Get Started Now
            </button>
            
            <a href="#" className="flex items-center gap-2 font-bold underline decoration-1 underline-offset-4 hover:text-primary transition-colors">
              <Play className="w-4 h-4 fill-white" />
              Real Customer Experiences
            </a>
          </div>

          {/* Badges / Social Proof */}
          <div className="flex flex-wrap items-center gap-8 border-t border-gray-800 pt-8">
            {/* Google Reviews */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                 <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="text-sm font-bold leading-tight">
                <div className="flex text-yellow-400 mb-0.5">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
                170+ Five-Star<br/>Google Reviews
              </div>
            </div>

            <div className="h-8 w-px bg-gray-700 mx-2 hidden sm:block"></div>

            {/* Best Places to Work */}
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 border border-white flex flex-col items-center justify-center text-[8px] font-bold leading-none bg-white text-black">
                  <span>BP</span>
                  <div className="w-full h-px bg-black my-0.5"></div>
                  <span>/W</span>
               </div>
               <div className="text-sm font-bold leading-tight">
                #6 Best Small<br/>Biz to Work For
              </div>
            </div>

            <div className="h-8 w-px bg-gray-700 mx-2 hidden sm:block"></div>

             {/* Inc 5000 */}
             <div className="flex items-center gap-3">
               <div className="font-serif font-black italic text-2xl tracking-tighter">
                 Inc.<br/><span className="text-xs not-italic font-sans block -mt-1 tracking-normal text-gray-400">5000</span>
               </div>
               <div className="text-sm font-bold leading-tight">
                Ranked #2031 on<br/>the INC. 5000
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
